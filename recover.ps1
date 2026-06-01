$logPath = "C:\Users\user\.gemini\antigravity-ide\brain\efe64f51-d347-46e9-8db4-1eb0042f6906\.system_generated\logs\transcript.jsonl"
$lines = Get-Content $logPath
$targetContent = $null

foreach ($line in $lines) {
    if ($line -match "i want like these") {
        $json = $line | ConvertFrom-Json
        $content = $json.content
        if ($content -match "@@ -1,\d+ \+1,\d+ @@") {
            $targetContent = $content
            break
        }
    }
}

if ($targetContent) {
    $diffBlockRegex = "(?s)\[diff_block_start\](.*?)\[diff_block_end\]"
    if ($targetContent -match $diffBlockRegex) {
        $diff = $matches[1]
    } else {
        $diffBlockRegex = "(?s)\[diff_block_start\](.*)"
        $targetContent -match $diffBlockRegex > $null
        $diff = $matches[1]
    }
    
    $extractedHtml = ""
    $diff -split "`n" | ForEach-Object {
        if ($_ -match "^-(.*)") {
            $extractedHtml += $matches[1] + "`n"
        }
    }
    
    $extractedHtml | Out-File -FilePath "g:\interio\recovered_laminate.html" -Encoding utf8
    Write-Host "Recovered HTML to recovered_laminate.html"
} else {
    Write-Host "Could not find diff"
}
