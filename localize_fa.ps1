$faCssUrl = "https://html.ditsolution.net/travelik/assets/css/all.min.css"
$faWebfontsUrl = "https://html.ditsolution.net/travelik/assets/webfonts/"
$cssDir = "assets\css"
$webfontsDir = "assets\webfonts"

New-Item -ItemType Directory -Force -Path $webfontsDir | Out-Null

# Download the original FontAwesome CSS
Invoke-WebRequest -Uri $faCssUrl -OutFile "$cssDir\all.min.css"

# The most common FA webfonts
$fonts = @(
    "fa-solid-900.woff2",
    "fa-solid-900.ttf",
    "fa-brands-400.woff2",
    "fa-brands-400.ttf",
    "fa-regular-400.woff2",
    "fa-regular-400.ttf"
)

foreach ($font in $fonts) {
    try {
        Invoke-WebRequest -Uri "$faWebfontsUrl$font" -OutFile "$webfontsDir\$font" -ErrorAction Stop
    } catch {
        Write-Host "Could not download $font"
    }
}

# Update all HTML files to point to the local all.min.css instead of CDNJS
$htmlFiles = Get-ChildItem -Path "*.html" -Exclude "index_original.html", "about_content.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    $content = $content -replace 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css', 'assets/css/all.min.css'
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Host "FontAwesome localized."
