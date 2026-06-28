$content = Get-Content -Path 'index_original.html' -Raw -Encoding UTF8

# Fix the asset links
$content = $content -replace '(?i)"assets/', '"https://html.ditsolution.net/travelik/assets/'
$content = $content -replace "(?i)'assets/", "'https://html.ditsolution.net/travelik/assets/"

# Inject the custom style block right before </head>
$styleBlock = @"
<style>
.hero-section-1, .hero-bg, .hero-area { background-image: url('hero-bg.png') !important; background-size: cover; }
.popular-destination, .destination-section { background-image: url('populer-bg.jpg') !important; background-size: cover; }
.testi-section, .testimonial-area { background-image: url('testi-bg.jpg') !important; background-size: cover; }
.blog-section, .blog-area { background-image: url('blog-bg.png') !important; background-size: cover; }
.footer-section, .footer, footer { background-image: url('footer-bg.jpg') !important; background-size: cover; }
.about-section, .travelling-section { background-image: url('travelling-bg.png') !important; background-size: cover; }
</style>
</head>
"@
$content = $content -replace '</head>', $styleBlock

# Fix the title
$content = $content -replace '<title>.*?</title>', '<title> BusRentals - Premium Bus Rental Services </title>'

# Fix the "london" to "Bangalore" in the first occurrence
$content = $content -replace '<div class="populer-country text-center">london</div>', '<div class="populer-country text-center">Bangalore</div>'

Set-Content -Path 'index.html' -Value $content -Encoding UTF8
