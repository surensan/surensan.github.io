$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$detailsRoot = Join-Path $root "assets\new-details"
$outputFile = Join-Path $root "extra-projects.js"

function U {
  param([string]$HexCodes)
  return -join ($HexCodes.Split(" ") | ForEach-Object { [char][Convert]::ToInt32($_, 16) })
}

$mainCategoryAliases = @{}
$mainCategoryAliases[(U "5E73 9762 8BBE 8BA1")] = "2d"
$mainCategoryAliases[(U "5E73 9762")] = "2d"
$mainCategoryAliases["2d"] = "2d"
$mainCategoryAliases["2D"] = "2d"
$mainCategoryAliases[(U "6E32 67D3 4F5C 54C1")] = "3d"
$mainCategoryAliases[(U "6E32 67D3")] = "3d"
$mainCategoryAliases["3d"] = "3d"
$mainCategoryAliases["3D"] = "3d"

$subCategoryAliases = @{}
$subCategoryAliases[(U "8BE6 60C5 9875")] = "detail"
$subCategoryAliases["detail"] = "detail"
$subCategoryAliases[(U "4E3B 56FE")] = "mainVisual"
$subCategoryAliases["mainVisual"] = "mainVisual"
$subCategoryAliases[(U "89C6 89C9 89C4 8303")] = "visualSystem"
$subCategoryAliases["visualSystem"] = "visualSystem"
$subCategoryAliases["AI" + (U "6D77 62A5")] = "aiPoster"
$subCategoryAliases["AI " + (U "6D77 62A5")] = "aiPoster"
$subCategoryAliases["aiPoster"] = "aiPoster"
$subCategoryAliases[(U "5408 6210 6D77 62A5")] = "composite"
$subCategoryAliases["composite"] = "composite"
$subCategoryAliases[(U "4EA7 54C1 6E32 67D3")] = "product3d"
$subCategoryAliases["product3d"] = "product3d"
$subCategoryAliases[(U "8BE6 60C5 9875 5356 70B9 6E32 67D3")] = "detailRender"
$subCategoryAliases["detailRender"] = "detailRender"
$subCategoryAliases[(U "52A8 753B 5C55 793A")] = "animation"
$subCategoryAliases["animation"] = "animation"
$subCategoryAliases[(U "7EC3 4E60 4F5C 54C1")] = "practice"
$subCategoryAliases[(U "7EC3 4E60")] = "practice"
$subCategoryAliases["practice"] = "practice"

$keys = @{
  title = @((U "6807 9898"), "title")
  main = @((U "4E3B 5206 7C7B"), "mainCategory", "main")
  sub = @((U "5206 7C7B"), (U "5B50 5206 7C7B"), "subCategory", "sub")
  tags = @((U "6807 7B7E"), "tags")
  description = @((U "7B80 4ECB"), "description")
  updatedAt = @((U "66F4 65B0 65F6 95F4"), "updatedAt")
  updateMonths = @((U "4FEE 6539 8BB0 5F55"), "updateMonths")
  historyLimit = @((U "663E 793A 8BB0 5F55"), "historyLimit")
  cover = @((U "5C01 9762"), "cover")
  statement = @((U "5361 7247 8BF4 660E"), "statement")
  galleryLayout = @((U "8BE6 60C5 5E03 5C40"), "galleryLayout")
}

function ConvertTo-JsString {
  param([string]$Value)
  if ($null -eq $Value) { return '""' }
  $escaped = $Value.Replace("\", "\\").Replace('"', '\"').Replace("`r", "").Replace("`n", "\n")
  return '"' + $escaped + '"'
}

function Get-MetaValue {
  param(
    [hashtable]$Meta,
    [string[]]$Keys,
    [string]$Default = ""
  )

  foreach ($key in $Keys) {
    if ($Meta.ContainsKey($key)) {
      return $Meta[$key]
    }
  }

  return $Default
}

function Read-MetaFile {
  param([string]$Path)

  $meta = @{}
  if (-not (Test-Path $Path)) { return $meta }

  $lines = Get-Content -Encoding UTF8 -LiteralPath $Path
  foreach ($line in $lines) {
    $clean = $line.Trim()
    if ($clean -eq "" -or $clean.StartsWith("#")) { continue }

    $separatorIndex = $clean.IndexOf("=")
    if ($separatorIndex -lt 1) { continue }

    $key = $clean.Substring(0, $separatorIndex).Trim()
    $value = $clean.Substring($separatorIndex + 1).Trim()
    $meta[$key] = $value
  }

  return $meta
}

function Resolve-Alias {
  param(
    [hashtable]$Aliases,
    [string]$Value,
    [string]$Fallback,
    [string]$FieldName,
    [string]$FolderName
  )

  if ([string]::IsNullOrWhiteSpace($Value)) {
    return $Fallback
  }

  $clean = $Value.Trim()
  if ($Aliases.ContainsKey($clean)) {
    return $Aliases[$clean]
  }

  throw "Project '$FolderName' has an unknown $FieldName value: '$Value'. Please use a category from assets/new-details/README.txt."
}

function Split-List {
  param(
    [string]$Value,
    [string[]]$Default
  )

  if ([string]::IsNullOrWhiteSpace($Value)) {
    return $Default
  }

  return $Value.Split(",") | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne "" }
}

if (-not (Test-Path $detailsRoot)) {
  New-Item -ItemType Directory -Path $detailsRoot | Out-Null
}

$projects = @()
$projectFolders = Get-ChildItem -LiteralPath $detailsRoot -Directory |
  Where-Object { -not $_.Name.StartsWith("__") } |
  Sort-Object Name
$nextId = 9000

foreach ($folder in $projectFolders) {
  $images = Get-ChildItem -LiteralPath $folder.FullName -File |
    Where-Object { $_.Extension.ToLower() -in @(".jpg", ".jpeg", ".png", ".webp") } |
    Sort-Object Name

  if ($images.Count -eq 0) { continue }

  $metaFile = Join-Path $folder.FullName "meta.txt"
  $descriptionFile = Join-Path $folder.FullName "description.txt"
  $meta = Read-MetaFile $metaFile

  $title = Get-MetaValue $meta $keys.title $folder.Name
  $mainCategory = Resolve-Alias $mainCategoryAliases (Get-MetaValue $meta $keys.main) "2d" "main category" $folder.Name
  $subCategory = Resolve-Alias $subCategoryAliases (Get-MetaValue $meta $keys.sub) "detail" "category" $folder.Name

  $folderUrl = "assets/new-details/$($folder.Name)"
  $coverName = Get-MetaValue $meta $keys.cover
  if ([string]::IsNullOrWhiteSpace($coverName)) {
    $coverName = $images[0].Name
  }

  $coverFile = Join-Path $folder.FullName $coverName
  if (-not (Test-Path $coverFile)) {
    throw "Project '$($folder.Name)' cover '$coverName' was not found. Check the cover field in meta.txt."
  }

  $cover = "$folderUrl/$coverName"
  $imagePaths = @()
  foreach ($image in $images) {
    $imagePaths += "$folderUrl/$($image.Name)"
  }

  $description = Get-MetaValue $meta $keys.description
  if ([string]::IsNullOrWhiteSpace($description) -and (Test-Path $descriptionFile)) {
    $description = (Get-Content -Raw -Encoding UTF8 -LiteralPath $descriptionFile).Trim()
  }
  if ([string]::IsNullOrWhiteSpace($description)) {
    $description = "$title portfolio project."
  }

  $tags = Split-List (Get-MetaValue $meta $keys.tags) @("New Work")
  $updatedAt = Get-MetaValue $meta $keys.updatedAt (Get-Date -Format "yyyy-MM")
  $historyLimitText = Get-MetaValue $meta $keys.historyLimit "12"
  $historyLimit = [int]$historyLimitText
  $updateMonths = Split-List (Get-MetaValue $meta $keys.updateMonths) @($updatedAt)
  $statement = Get-MetaValue $meta $keys.statement
  $galleryLayout = Get-MetaValue $meta $keys.galleryLayout

  $imageList = ($imagePaths | ForEach-Object { ConvertTo-JsString $_ }) -join ", "
  $tagList = ($tags | ForEach-Object { ConvertTo-JsString $_ }) -join ", "
  $monthList = ($updateMonths | ForEach-Object { ConvertTo-JsString $_ }) -join ", "

  $optionalLines = @()
  if (-not [string]::IsNullOrWhiteSpace($statement)) {
    $optionalLines += "    statement: $(ConvertTo-JsString $statement)"
  }
  if (-not [string]::IsNullOrWhiteSpace($galleryLayout)) {
    $optionalLines += "    galleryLayout: $(ConvertTo-JsString $galleryLayout)"
  }

  $optionalBlock = ""
  if ($optionalLines.Count -gt 0) {
    $optionalBlock = ",`n" + ($optionalLines -join ",`n")
  }

  $projects += @"
  {
    id: $nextId,
    type: "image",
    title: $(ConvertTo-JsString $title),
    mainCategory: $(ConvertTo-JsString $mainCategory),
    subCategory: $(ConvertTo-JsString $subCategory),
    coverImage: $(ConvertTo-JsString $cover),
    detailImages: [$imageList],
    tags: [$tagList],
    description: $(ConvertTo-JsString $description),
    updatedAt: $(ConvertTo-JsString $updatedAt),
    historyLimit: $historyLimit,
    updateMonths: [$monthList]$optionalBlock
  }
"@
  $nextId++
}

$content = @"
// Generated by update-projects.ps1.
// Do not edit manually. Add folders under assets/new-details and run the script.
window.extraPortfolioProjects = [
$($projects -join ",`n")
];
"@

Set-Content -LiteralPath $outputFile -Value $content -Encoding UTF8
Write-Host "Updated extra-projects.js. Added $($projects.Count) extra projects." -ForegroundColor Green
Write-Host ""
Write-Host "If everything looks right, publish.bat will commit and upload it for you." -ForegroundColor Cyan
