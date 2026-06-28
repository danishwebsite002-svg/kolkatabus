$baseUrl = "https://html.ditsolution.net/travelik/assets/css/"
$imgUrl = "https://html.ditsolution.net/travelik/assets/images/"
$cssDir = "assets\css"
$imgDir = "assets\images"

New-Item -ItemType Directory -Force -Path $cssDir | Out-Null
New-Item -ItemType Directory -Force -Path $imgDir | Out-Null

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

# Download favicon
Invoke-WebRequest -Uri "$imgUrl/fav-icon.png" -OutFile "$imgDir\fav-icon.png"

# Download CSS files and fix relative URLs
foreach ($css in $cssFiles) {
    $outFile = "$cssDir\$css"
    Invoke-WebRequest -Uri "$baseUrl$css" -OutFile $outFile
    
    # Fix relative urls in CSS (like ../images/ or ../fonts/) to point to the remote server
    # so they don't break when loaded locally
    $content = Get-Content -Path $outFile -Raw
    $content = $content -replace 'url\(\s*[\''"]?\.\./images/', 'url("https://html.ditsolution.net/travelik/assets/images/'
    $content = $content -replace 'url\(\s*[\''"]?\.\./fonts/', 'url("https://html.ditsolution.net/travelik/assets/fonts/'
    $content = $content -replace 'url\(\s*[\''"]?([a-zA-Z0-9_\-\.]+)\.(ttf|woff|woff2|eot|svg)', 'url("https://html.ditsolution.net/travelik/assets/css/$1.$2'
    Set-Content -Path $outFile -Value $content -Encoding UTF8
}

# Update all HTML files
$htmlFiles = Get-ChildItem -Path "*.html" -Exclude "index_original.html", "about_content.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    $content = $content -replace 'https://html.ditsolution.net/travelik/assets/css/', 'assets/css/'
    $content = $content -replace 'https://html.ditsolution.net/travelik/assets/images/fav-icon.png', 'assets/images/fav-icon.png'
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Host "CSS localized successfully."
