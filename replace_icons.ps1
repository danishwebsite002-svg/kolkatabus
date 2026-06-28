$htmlFiles = Get-ChildItem -Path "*.html" -Exclude "index_original.html", "about_content.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Generic FA6 to FA5 class conversions
    $content = $content -replace 'fa-solid fa-', 'fas fa-'
    $content = $content -replace 'fa-brands fa-', 'fab fa-'
    $content = $content -replace 'fa-regular fa-', 'far fa-'
    
    # Specific missing/renamed FA icons
    $content = $content -replace 'fas fa-magnifying-glass', 'fas fa-search'
    $content = $content -replace 'fab fa-x-twitter', 'fab fa-twitter'
    $content = $content -replace 'fas fa-arrow-right-long', 'fas fa-long-arrow-alt-right'
    $content = $content -replace 'fas fa-house', 'fas fa-home'
    $content = $content -replace 'fas fa-hand-holding-dollar', 'fas fa-hand-holding-usd'
    
    # Replace other icon libraries (bi, flaticon) with FontAwesome equivalents
    $content = $content -replace 'flaticon-email', 'fas fa-envelope'
    $content = $content -replace 'bi bi-telephone-inbound', 'fas fa-phone-alt'
    $content = $content -replace 'bi bi-geo-alt', 'fas fa-map-marker-alt'
    $content = $content -replace 'bi bi-clock', 'far fa-clock'
    $content = $content -replace 'bi bi-envelope', 'far fa-envelope'
    
    # Fix the weird offer??s typo in the footer
    $content = $content -replace 'offer\?\?s', "offer's"
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "Icons replaced successfully."
