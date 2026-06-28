$htmlFiles = Get-ChildItem -Path "*.html"

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Use regex to find "seasonal offer" followed by any weird characters and then "s"
    $content = [regex]::Replace($content, 'seasonal offer[^<a-zA-Z0-9]+s', "seasonal offer's")
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Host "Encoding fixed."
