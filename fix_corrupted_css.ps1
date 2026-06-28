$baseUrl = "https://html.ditsolution.net/travelik/assets/css/"
$cssDir = "assets\css"

$cssFiles = @(
    "bootstrap.min.css",
    "swiper-bundle.min.css",
    "animation-text.css",
    "animate.css",
    "magnific-popup.css",
    "meanmenu.min.css",
    "odometer-theme.css",
    "custom.css",
    "style.css",
    "responsive.css",
    "coustom-animation.css",
    "scroll-up.css"
)

foreach ($css in $cssFiles) {
    $outFile = "$cssDir\$css"
    Invoke-WebRequest -Uri "$baseUrl$css" -OutFile $outFile
    
    $content = Get-Content -Path $outFile -Raw
    
    # Safely replace ../images/ while maintaining correct quotes
    $content = [regex]::Replace($content, 'url\(\s*[''"]?\.\./images/([^''"\)]+)[''"]?\s*\)', 'url("https://html.ditsolution.net/travelik/assets/images/$1")')
    
    # Safely replace ../fonts/
    $content = [regex]::Replace($content, 'url\(\s*[''"]?\.\./fonts/([^''"\)]+)[''"]?\s*\)', 'url("https://html.ditsolution.net/travelik/assets/fonts/$1")')
    
    # Safely replace local fonts in the same directory (like foo.woff2)
    $content = [regex]::Replace($content, 'url\(\s*[''"]?([a-zA-Z0-9_\-\.]+)\.(ttf|woff|woff2|eot|svg)[''"]?\s*\)', 'url("https://html.ditsolution.net/travelik/assets/css/$1.$2")')
    
    Set-Content -Path $outFile -Value $content -Encoding UTF8
}

Write-Host "CSS files re-downloaded and successfully fixed."
