$content = Get-Content -Path 'index.html' -Raw -Encoding UTF8

$content = $content -replace '<h1 class="text-effect text-white"><span>popular</span> browse our all</h1>\s*<h1 class="text-effect text-white">world popular destination</h1>', "<h1 class=`"text-effect text-white`"><span>services</span> tailored for you</h1>`r`n							<h1 class=`"text-effect text-white`">types of events we cover</h1>"

$content = $content -replace 'Maui, Hawaii, USA', 'Premium Vehicles'
$content = $content -replace '>05 Days<', '>Flexible<'

# Card 1
$content = $content -replace '>Bangalore<', '>Corporate<'
$content = $content -replace 'https://html.ditsolution.net/travelik/assets/images/main-home/popular-img1.png', 'corporate_bus.png'
$content = $content -replace '>Hawaiian Islands<', '>Corporate Retreats<'

# Card 2
$content = $content -replace '>nepal<', '>Weddings<'
$content = $content -replace 'https://html.ditsolution.net/travelik/assets/images/main-home/popular-img2.png', 'wedding_bus.png'
$content = $content -replace '>Mount Everest Region<', '>Wedding Transportation<'

# Card 3
$content = $content -replace '>Egypt<', '>Schools<'
$content = $content -replace 'https://html.ditsolution.net/travelik/assets/images/main-home/popular-img3.png', 'school_bus.png'
$content = $content -replace '>Siwa Oasis<', '>School &amp; College Tours<'
$content = $content -replace '\$580\.00 <span>/ Per Person</span>', 'Discounted Rates <span>/ Per Trip</span>'

# Card 4
$content = $content -replace '>INDIA<', '>Transfers<'
$content = $content -replace 'https://html.ditsolution.net/travelik/assets/images/main-home/popular-img4.png', 'airport_bus.png'
$content = $content -replace '>Araku Valley<', '>Airport Shuttles<'
$content = $content -replace '\$880\.00 <span>/ Per Person</span>', 'Starting at $150 <span>/ Transfer</span>'

# Replace remaining 680 prices
$content = $content -replace '\$680\.00 <span>/ Per Person</span>', 'Custom Quotes <span>/ Daily</span>'

Set-Content -Path 'index.html' -Value $content -Encoding UTF8
