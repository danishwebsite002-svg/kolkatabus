$content = Get-Content -Path 'index.html' -Raw -Encoding UTF8

$content = $content -replace '<h1 class="text-effect text-white"><span>destination</span> browse our top</h1>\s*<h1 class="text-effect text-white">destinations</h1>', "<h1 class=`"text-effect text-white`"><span>fleet</span> browse our top</h1>`r`n							<h1 class=`"text-effect text-white`">premium buses</h1>"

$content = $content -replace '<p class="section-desc">Continually negotiate plug-and-play collaboration and idea\s*worldclas e-commerce\. Uniquely engage tested experience\s*via modern travel equipment</p>', '<p class="section-desc">Explore our extensive fleet of premium buses, designed to provide the utmost comfort, safety, and reliability for any size group or destination.</p>'

$content = $content -replace 'https://html.ditsolution.net/travelik/assets/images/main-home/destination-thumb1.png', 'luxury_coach.png'
$content = $content -replace '>sea and mountain<', '>Luxury Coach Bus<'
$content = $content -replace '>08 Trip<', '>56 Seats • WiFi &amp; Restroom<'

$content = $content -replace 'https://html.ditsolution.net/travelik/assets/images/main-home/destination-thumb2.png', 'mini_bus.png'
$content = $content -replace '>Athens Greece<', '>Premium Mini Bus<'
$content = $content -replace '>10 Trip<', '>24 Seats • Leather Interior<'

$content = $content -replace 'https://html.ditsolution.net/travelik/assets/images/main-home/destination-thumb3.png', 'party_bus.png'
$content = $content -replace '>pyramid egypt<', '>Executive Party Bus<'
$content = $content -replace '>12 Trip<', '>20 Seats • Surround Sound<'

$content = $content -replace 'https://html.ditsolution.net/travelik/assets/images/main-home/destination-thumb4.png', 'double_decker.png'
$content = $content -replace '>mountain Nepal<', '>Double Decker Tourist Bus<'
$content = $content -replace '>14 Trip<', '>72 Seats • Open Top Deck<'

Set-Content -Path 'index.html' -Value $content -Encoding UTF8
