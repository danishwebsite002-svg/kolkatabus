$indexHtml = Get-Content -Path 'index.html' -Raw
$originalHtml = Get-Content -Path 'index_original.html' -Raw

$part1Match = [regex]::Match($indexHtml, '(?s)^(.*?<!--========= End Prealoader ============== -->\s*)')
$part1 = $part1Match.Groups[1].Value

$part2Match = [regex]::Match($originalHtml, '(?s)(<!--==================================================-->\s*<!-- Start travelik Header Area-->.*?)(?=<!--==================================================-->\s*<!-- Start Destination  Section -->)')
$part2 = $part2Match.Groups[1].Value

$part3Match = [regex]::Match($indexHtml, '(?s)(<!--==================================================-->\s*<!-- Start Destination  Section -->.*)$')
$part3 = $part3Match.Groups[1].Value

$newHtml = $part1 + "`n`n" + $part2 + "`n`n" + $part3

Set-Content -Path 'index.html' -Value $newHtml -Encoding UTF8
