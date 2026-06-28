$htmlFiles = Get-ChildItem -Path . -Filter *.html

foreach ($file in $htmlFiles) {
    # Skip original backup if it exists
    if ($file.Name -eq "index_original.html") { continue }
    
    $content = Get-Content -Path $file.FullName -Raw
    
    # Replace the text address
    $newContent = $content -replace 'Mumbai\s*400001,\s*Maharashtra,\s*India', 'West Bengal, Kolkata'
    
    # Replace the broken multi-line version in index.html specifically if needed
    $newContent = $newContent -replace 'Mumbai\s*400001,\s*[\r\n\s]*Maharashtra,\s*India', 'West Bengal, Kolkata'
    
    # Also update the Google Maps embed URL in contact.html
    $newContent = $newContent -replace 'q=Mumbai,%20Maharashtra,%20India', 'q=Kolkata,%20West%20Bengal,%20India'
    
    if ($content -ne $newContent) {
        Set-Content -Path $file.FullName -Value $newContent -NoNewline
        Write-Host "Updated $($file.Name)"
    }
}
