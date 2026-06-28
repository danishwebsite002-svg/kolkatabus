$htmlFiles = Get-ChildItem -Path "*.html" -Exclude "index_original.html", "about_content.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    $content = $content -replace 'https://html.ditsolution.net/travelik/assets/css/all.min.css', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "CDN replaced successfully."
