$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$version = Get-Date -Format "yyyyMMddHHmmss"
$files = Get-ChildItem -LiteralPath $root -Filter "*.html" -File | ForEach-Object { $_.FullName }

foreach ($file in $files) {
  if (-not (Test-Path $file)) { continue }

  $content = Get-Content -Raw -Encoding UTF8 -LiteralPath $file
  $content = $content -replace 'style\.css\?v=[^"'']+', "style.css?v=$version"
  $content = $content -replace 'extra-projects\.js\?v=[^"'']+', "extra-projects.js?v=$version"
  $content = $content -replace 'app\.js\?v=[^"'']+', "app.js?v=$version"
  Set-Content -LiteralPath $file -Value $content -Encoding UTF8
}

Write-Host "Updated browser cache version to $version." -ForegroundColor Green
