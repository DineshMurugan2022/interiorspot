$data = Get-Content "g:\interio\match.json" -Raw
$json = $data | ConvertFrom-Json
$content = $json.content
$startIndex = $content.IndexOf("@@ -1,1159")
if ($startIndex -ge 0) {
    $diffBlock = $content.Substring($startIndex)
    $lines = $diffBlock -split "`n"
    $extracted = @()
    foreach ($line in $lines) {
        if ($line.StartsWith("-")) {
            $extracted += $line.Substring(1)
        } elseif ($line.StartsWith(" ")) {
            $extracted += $line.Substring(1)
        }
    }
    $extracted -join "`n" | Out-File "g:\interio\laminate.html" -Encoding utf8
    Write-Host "Restored old laminate.html!"
} else {
    Write-Host "Index not found"
}
