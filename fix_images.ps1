$content = Get-Content -Path 'index.html' -Raw -Encoding UTF8
$content = $content -replace '<img src="touring_bus\.png"\s*alt="Touring Bus">', '<img src="touring_bus.png" alt="Touring Bus" style="max-width: 400px; border-radius: 15px; border: 8px solid white; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transform: rotate(-5deg);">'
$content = $content -replace '<img src="city_bus\.png"\s*alt="City Bus">', '<img src="city_bus.png" alt="City Bus" style="max-width: 350px; border-radius: 15px; border: 8px solid white; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transform: rotate(5deg); position: absolute; bottom: -50px; right: 0;">'
Set-Content -Path 'index.html' -Value $content -Encoding UTF8
