$original = Get-Content -Raw "about.html"
$newContent = Get-Content -Raw "about_content.html"

# We replace the text between "<!-- Start BusRentals breadcumb Section  -->" and "<!-- Start Testimonial Section -->"
$pattern = "(?s)<!-- Start BusRentals breadcumb Section  -->.*?<!-- Start Testimonial Section -->"
$replacement = "$newContent`r`n`t<!-- Start Testimonial Section -->"

$updated = $original -replace $pattern, $replacement
Set-Content "about.html" $updated -NoNewline
