param(
    [Parameter(Mandatory=$true, ValueFromPipeline=$true)]
    [string]$InputFile
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $InputFile)) {
    Write-Error "File not found: $InputFile"
    exit 1
}

$jsx = Get-Content $InputFile -Raw
$inputDir = Split-Path $InputFile -Parent

# Check for block-kit import and inline it
$bkMatch = [regex]::Match($jsx, "import\s*\{([^}]*)\}\s*from\s*`"([^`"]*block-kit[^`"]*)`"")
$blockKitCode = ""
if ($bkMatch.Success) {
    $bkPath = $bkMatch.Groups[2].Value
    $bkAbsPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($inputDir, $bkPath))
    if (-not (Test-Path $bkAbsPath)) {
        Write-Warning "Block-kit file not found at resolved path: $bkAbsPath"
    } else {
        $bkRaw = Get-Content $bkAbsPath -Raw
        # Strip React imports
        $bkRaw = $bkRaw -replace "import\s*\{[^}]*\}\s*from\s*`"[^`"]*react[^`"]*`";?", ''
        $bkRaw = $bkRaw -replace "import\s+\w+\s+from\s*`"[^`"]*react[^`"]*`";?", ''
        # Strip other imports (keep React-related ones already handled)
        $bkRaw = $bkRaw -replace "import\s*\{[^}]*\}\s*from\s*`"[^`"]*`";?", ''
        $bkRaw = $bkRaw -replace "import\s+\w+\s+from\s*`"[^`"]*`";?", ''
        $bkRaw = $bkRaw -replace "import\s+\w+\s*,\s*\{[^}]*\}\s*from\s*`"[^`"]*`";?", ''
        # Strip exports
        $bkRaw = $bkRaw -replace 'export\s+default\s+function', 'function'
        $bkRaw = $bkRaw -replace 'export\s+function', 'function'
        $bkRaw = $bkRaw -replace 'export\s+const', 'const'
        $bkRaw = $bkRaw -replace 'export\s+let', 'let'
        $bkRaw = $bkRaw -replace 'export\s+var', 'var'
        $bkRaw = $bkRaw -replace 'export\s+\{', '// exported: {'
        $bkRaw = $bkRaw -replace 'export\s+default\s+', '// exported default: '
        $blockKitCode = $bkRaw
    }
}

# Extract the component name (export default function X)
$nameMatch = [regex]::Match($jsx, 'export\s+default\s+function\s+(\w+)')
if (-not $nameMatch.Success) {
    Write-Error "Could not find 'export default function ComponentName' in $InputFile"
    exit 1
}
$componentName = $nameMatch.Groups[1].Value

# Extract all hooks used (in both block-kit and the component)
$allCode = $blockKitCode + "`n" + $jsx
$hookMatches = [regex]::Matches($allCode, '\b(use[A-Z]\w+)\b')
$hooks = $hookMatches | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$hookDestructure = "const { $($hooks -join ', ') } = React;"

# Remove import statements from main file
$jsx = $jsx -replace "import\s*\{[^}]*\}\s*from\s*`"[^`"]*`";?", ''
$jsx = $jsx -replace "import\s+\w+\s+from\s*`"[^`"]*`";?", ''
$jsx = $jsx -replace "import\s+\w+\s*,\s*\{[^}]*\}\s*from\s*`"[^`"]*`";?", ''

# Remove export statements
$jsx = $jsx -replace 'export\s+default\s+function', 'function'
$jsx = $jsx -replace 'export\s+function', 'function'
$jsx = $jsx -replace 'export\s+const', 'const'
$jsx = $jsx -replace 'export\s+let', 'let'
$jsx = $jsx -replace 'export\s+var', 'var'
$jsx = $jsx -replace 'export\s+\{', '// exported: {'
$jsx = $jsx -replace 'export\s+default\s+', '// exported default: '

$html = @"
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>$componentName</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0a0a0a; color: #c8c8c8; font-family: 'EB Garamond', Georgia, serif; font-size: 16px; line-height: 1.7; -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #0a0a0a; }
  ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 2px; }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  .fade { animation: fadeUp 0.4s ease forwards; }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button { opacity: 1; }
  input:focus { outline: none; }
</style>
</head>
<body>
<div id="root"></div>

<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<script type="text/babel">
$hookDestructure

$blockKitCode

$jsx

ReactDOM.createRoot(document.getElementById('root')).render(<$componentName />);
</script>
</body>
</html>
"@

$outputFile = [System.IO.Path]::ChangeExtension($InputFile, ".html")
$html | Set-Content $outputFile -Encoding UTF8

Write-Host "Converted: $InputFile -> $outputFile"
Write-Host "  Component: $componentName"
Write-Host "  Hooks: $hooks"
if ($blockKitCode) {
    $lines = ($blockKitCode -split "`n").Count
    Write-Host "  Inlined block-kit ($lines lines)"
}
