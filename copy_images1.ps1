$brainDir = "C:\Users\MSI 1\.gemini\antigravity\brain\73f6aac5-4e72-4adf-b135-2eb8cecd3b3a"
$targetDir = "C:\Users\MSI 1\Downloads\destination3"

function Copy-Latest ($prefix, $targetName) {
    $latest = Get-ChildItem -Path $brainDir -Filter "$prefix*" | Sort-Object LastWriteTime -Descending | Select-Object -First 1
    if ($latest) {
        Copy-Item -Path $latest.FullName -Destination (Join-Path $targetDir $targetName) -Force
    }
}

Copy-Latest "hero_bg_*" "hero-bg.png"
Copy-Latest "hero_thumb_*" "hero-thumb.png"
Copy-Latest "bus_banner_bg_*" "bus_banner_bg.png"
Copy-Latest "bus_banner_bg_*" "bannerimage.jpg"
Copy-Latest "bus_banner_bg_*" "blog-bg.png"
Copy-Latest "bus_banner_bg_*" "travelling-bg.png"
Copy-Latest "testi_bg_*" "testi-bg.jpg"
Copy-Latest "touring_bus_*" "touring_bus.png"
Copy-Latest "dest_taj_*" "destination-thumb1.png"
Copy-Latest "dest_kerala_*" "destination-thumb2.png"
Copy-Latest "gallery_jaipur_*" "destination-thumb3.png"
Copy-Latest "gallery_goa_*" "destination-thumb4.png"
Copy-Latest "luxury_coach_*" "luxury_coach.png"
Copy-Latest "airport_bus_*" "airport_bus.png"
Copy-Latest "city_bus_*" "city_bus.png"
Copy-Latest "mini_bus_*" "mini_bus.png"
Copy-Latest "school_bus_*" "school_bus.png"
Copy-Latest "wedding_bus_*" "wedding_bus.png"
Copy-Latest "gallery_goa_*" "gallery1.png"
Copy-Latest "gallery_varanasi_*" "gallery2.png"
Copy-Latest "luxury_coach_*" "corporate_bus.png"
Copy-Latest "dest_taj_*" "destination2.jpg"
Copy-Latest "dest_kerala_*" "destination3.jpg"
Copy-Latest "gallery_jaipur_*" "destinations1.jpg"
