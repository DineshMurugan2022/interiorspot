$logPath = "C:\Users\user\.gemini\antigravity-ide\brain\efe64f51-d347-46e9-8db4-1eb0042f6906\.system_generated\logs\transcript.jsonl"
$lines = Get-Content $logPath
foreach ($line in $lines) {
    if ($line -match "i want like these") {
        $line | Out-File -FilePath "g:\interio\match.json" -Encoding utf8
    }
}
