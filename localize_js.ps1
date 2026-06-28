$htmlFiles = Get-ChildItem -Path "." -Filter "*.html"
$jsDir = "assets/js"
if (-not (Test-Path $jsDir)) {
    New-Item -ItemType Directory -Force -Path $jsDir | Out-Null
}

$regex = 'src=["''](https?://[^"''\s]+\.js)["'']'
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

foreach ($file in $htmlFiles) {
    $content = [System.IO.File]::ReadAllText($file.FullName)
    $matches = [regex]::Matches($content, $regex)
    
    $fileModified = $false
    # We use a hashtable to avoid replacing the same URL multiple times which is fine, 
    # but Replace does all instances anyway, so we just loop through unique URLs
    $uniqueUrls = @{}
    foreach ($match in $matches) {
        $uniqueUrls[$match.Groups[1].Value] = $true
    }
    
    foreach ($url in $uniqueUrls.Keys) {
        $uri = [uri]$url
        $filename = [System.IO.Path]::GetFileName($uri.LocalPath)
        $localPath = Join-Path -Path $jsDir -ChildPath $filename
        $localUrl = "assets/js/$filename"
        
        if (-not (Test-Path $localPath)) {
            Write-Host "Downloading $url to $localPath"
            try {
                Invoke-WebRequest -Uri $url -OutFile $localPath -UseBasicParsing
            } catch {
                Write-Host "Failed to download $($url): $_"
                continue
            }
        }
        
        $content = $content.Replace($url, $localUrl)
        $fileModified = $true
    }
    
    if ($fileModified) {
        Write-Host "Updating $($file.Name)"
        [System.IO.File]::WriteAllText($file.FullName, $content, $utf8NoBom)
    }
}
Write-Host "Done."
