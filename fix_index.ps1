$indexHtml = Get-Content -Path 'index.html' -Encoding UTF8
$indexOriginal = Get-Content -Path 'index_original.html' -Encoding UTF8

$part1 = $indexHtml[0..46]
$part2 = $indexOriginal[47..334]
$part3 = $indexHtml[102..($indexHtml.Length - 1)]

$newHtml = $part1 + $part2 + $part3
Set-Content -Path 'index.html' -Value $newHtml -Encoding UTF8
Copy-Item -Path "bus_banner_bg.png" -Destination "hero-bg.png" -Force
