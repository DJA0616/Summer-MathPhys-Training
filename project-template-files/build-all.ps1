param(
    [switch]$Watch,
    [int]$WatchInterval = 3,
    [string[]]$Dirs = @("learning-guides", "problem_sets")
)

$ErrorActionPreference = "Continue"
$scriptDir = Split-Path $PSCommandPath -Parent
$convertScript = Join-Path $scriptDir "convert.ps1"
$repoRoot = Split-Path $scriptDir -Parent

if (-not (Test-Path $convertScript)) {
    Write-Error "convert.ps1 not found at $convertScript"
    exit 1
}

$built = @{}   # track last write times for --watch
$ok = 0
$fail = 0

function Convert-File($jsxPath) {
    $rel = $jsxPath.Replace($repoRoot, "").TrimStart("\")
    Write-Host -NoNewline "  $rel ... "
    try {
        & $convertScript $jsxPath *>$null
        Write-Host "OK" -ForegroundColor Green
        $script:ok++
        return $true
    } catch {
        Write-Host "FAIL" -ForegroundColor Red
        Write-Host "    $_" -ForegroundColor DarkYellow
        $script:fail++
        return $false
    }
}

function Convert-All {
    $script:ok = 0
    $script:fail = 0
    $files = @()
    foreach ($dir in $Dirs) {
        $full = Join-Path $repoRoot $dir
        if (Test-Path $full) {
            $files += Get-ChildItem $full -Filter *.jsx -File | ForEach-Object { $_.FullName }
        }
    }
    if ($files.Count -eq 0) {
        Write-Host "No .jsx files found in: $($Dirs -join ', ')" -ForegroundColor Yellow
        return
    }
    Write-Host "Building $($files.Count) file(s)..." -ForegroundColor Cyan
    foreach ($f in $files) {
        Convert-File $f
        $built[$f] = (Get-Item $f).LastWriteTime
    }
    Write-Host "Done: $ok OK, $fail failed" -ForegroundColor $(if ($fail -eq 0) { "Green" } else { "Red" })
}

if ($Watch) {
    Write-Host "Watching $($Dirs -join ', ') for changes... (Ctrl+C to stop)" -ForegroundColor Cyan
    # Initial build
    Convert-All
    while ($true) {
        Start-Sleep $WatchInterval
        foreach ($dir in $Dirs) {
            $full = Join-Path $repoRoot $dir
            if (-not (Test-Path $full)) { continue }
            $jsxFiles = Get-ChildItem $full -Filter *.jsx -File
            foreach ($f in $jsxFiles) {
                $current = $f.LastWriteTime
                if (-not $built.ContainsKey($f.FullName) -or $current -gt $built[$f.FullName]) {
                    Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Changed: $($f.Name)" -ForegroundColor DarkGray
                    Convert-File $f.FullName
                    $built[$f.FullName] = $current
                }
            }
        }
    }
} else {
    Convert-All
}
