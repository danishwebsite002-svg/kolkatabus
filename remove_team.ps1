$lines = Get-Content -Path 'index.html' -Encoding UTF8
$part1 = $lines[0..1211]
$part2 = $lines[1301..($lines.Length - 1)]
$newLines = $part1 + $part2
Set-Content -Path 'index.html' -Value $newLines -Encoding UTF8
