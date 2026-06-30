$targetDir = "C:\Users\MSI 1\Downloads\destination3"

# Fallback copies to replace any remaining images with our new Indian ones
Copy-Item (Join-Path $targetDir "touring_bus.png") -Destination (Join-Path $targetDir "double_decker.png") -Force
Copy-Item (Join-Path $targetDir "luxury_coach.png") -Destination (Join-Path $targetDir "party_bus.png") -Force
Copy-Item (Join-Path $targetDir "city_bus.png") -Destination (Join-Path $targetDir "corporate_bus.png") -Force

Copy-Item (Join-Path $targetDir "destination-thumb1.png") -Destination (Join-Path $targetDir "gallery3.png") -Force
Copy-Item (Join-Path $targetDir "destination-thumb2.png") -Destination (Join-Path $targetDir "gallery4.png") -Force
Copy-Item (Join-Path $targetDir "destination-thumb3.png") -Destination (Join-Path $targetDir "gallery5.png") -Force

# People images can just use destination thumbs for now to remove foreign faces
Copy-Item (Join-Path $targetDir "destination-thumb1.png") -Destination (Join-Path $targetDir "about-img1.png") -Force
Copy-Item (Join-Path $targetDir "destination-thumb2.png") -Destination (Join-Path $targetDir "about-img2.png") -Force
Copy-Item (Join-Path $targetDir "destination-thumb3.png") -Destination (Join-Path $targetDir "guideimage2.jpg") -Force
Copy-Item (Join-Path $targetDir "destination-thumb4.png") -Destination (Join-Path $targetDir "guideimage3.jpg") -Force

# Package images
Copy-Item (Join-Path $targetDir "gallery1.png") -Destination (Join-Path $targetDir "packageoneimage.jpg") -Force
Copy-Item (Join-Path $targetDir "gallery2.png") -Destination (Join-Path $targetDir "packagetwoimage.jpg") -Force
Copy-Item (Join-Path $targetDir "destination-thumb1.png") -Destination (Join-Path $targetDir "packagethreeimage.jpg") -Force

# Other Backgrounds
Copy-Item (Join-Path $targetDir "bus_banner_bg.png") -Destination (Join-Path $targetDir "ctasectionbg.jpg") -Force
Copy-Item (Join-Path $targetDir "bus_banner_bg.png") -Destination (Join-Path $targetDir "footer-bg.jpg") -Force
Copy-Item (Join-Path $targetDir "bus_banner_bg.png") -Destination (Join-Path $targetDir "fourthbg.jpg") -Force
Copy-Item (Join-Path $targetDir "bus_banner_bg.png") -Destination (Join-Path $targetDir "populer-bg.jpg") -Force
Copy-Item (Join-Path $targetDir "bus_banner_bg.png") -Destination (Join-Path $targetDir "videosectionbg.jpg") -Force

# Popular destinations
Copy-Item (Join-Path $targetDir "gallery1.png") -Destination (Join-Path $targetDir "popular-img1.png") -Force
Copy-Item (Join-Path $targetDir "gallery2.png") -Destination (Join-Path $targetDir "popular-img2.png") -Force
Copy-Item (Join-Path $targetDir "destination-thumb1.png") -Destination (Join-Path $targetDir "popular-img3.png") -Force
Copy-Item (Join-Path $targetDir "destination-thumb2.png") -Destination (Join-Path $targetDir "popular-img4.png") -Force
