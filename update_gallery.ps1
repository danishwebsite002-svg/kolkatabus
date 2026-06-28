$content = Get-Content -Path 'index.html' -Raw -Encoding UTF8

$content = $content -replace '<h1 class="text-effect text-white"><span>GALARY</span> SEE OUR TRAVEL</h1>\s*<h1 class="text-effect text-white">photography</h1>', "<h1 class=`"text-effect text-white`"><span>GALLERY</span> OUR SUCCESSFUL</h1>`r`n							<h1 class=`"text-effect text-white`">journeys</h1>"

$content = $content -replace 'successfully <br> placed visited', 'happy <br> passengers transported'

$content = $content -replace '<img src="https://html.ditsolution.net/travelik/assets/images/main-home/gelary-1.png" alt="">', '<img src="gallery1.png" alt="Happy Corporate Passengers" style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 3/4;">'
$content = $content -replace '<img src="https://html.ditsolution.net/travelik/assets/images/main-home/gelary-2.png" alt="">', '<img src="gallery2.png" alt="Friendly Bus Driver" style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 3/4;">'
$content = $content -replace '<img src="https://html.ditsolution.net/travelik/assets/images/main-home/gelary-3.png" alt="">', '<img src="gallery3.png" alt="Group of Friends" style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 3/4;">'
$content = $content -replace '<img src="https://html.ditsolution.net/travelik/assets/images/main-home/gelary-4.png" alt="">', '<img src="gallery4.png" alt="Wedding Party" style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 3/4;">'
$content = $content -replace '<img src="https://html.ditsolution.net/travelik/assets/images/main-home/gelary-5.png" alt="">', '<img src="gallery5.png" alt="Bus Interior" style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 3/4;">'

Set-Content -Path 'index.html' -Value $content -Encoding UTF8
