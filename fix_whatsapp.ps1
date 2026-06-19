$files = Get-ChildItem -Path "g:\interio\*.html"
$count = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    if ($content -match '<h1 class="pdp-title">([^<]+)</h1>') {
        $title = $matches[1].Trim()
        
        $oldPattern = 'Hi, I''m interested in the CRAYON Laminates\.?'
        $newStr = "Hi, I'm interested in $title."
        
        if ($content -match $oldPattern) {
            $content = [regex]::Replace($content, $oldPattern, $newStr)
            Set-Content -Path $file.FullName -Value $content
            Write-Host "Updated $($file.Name) with title: $title"
            $count++
        }
    }
}

Write-Host "Total files updated: $count"
