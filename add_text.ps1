Add-Type -AssemblyName System.Drawing

$imgPaths = @(
    "hero-thumb.png",
    "touring_bus.png",
    "luxury_coach.png",
    "airport_bus.png",
    "city_bus.png",
    "mini_bus.png",
    "school_bus.png",
    "wedding_bus.png",
    "double_decker.png",
    "party_bus.png",
    "corporate_bus.png"
)

$targetDir = "C:\Users\MSI 1\Downloads\destination3"

foreach ($imgName in $imgPaths) {
    $path = Join-Path $targetDir $imgName
    if (Test-Path $path) {
        try {
            $img = [System.Drawing.Image]::FromFile($path)
            $bmp = New-Object System.Drawing.Bitmap($img)
            $img.Dispose()

            $graphics = [System.Drawing.Graphics]::FromImage($bmp)
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
            $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

            $fontSize = [float]($bmp.Width / 15)
            $font = New-Object System.Drawing.Font("Arial", $fontSize, [System.Drawing.FontStyle]::Bold)
            $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
            $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 0, 50, 150))
            
            $text = "GITANJALI TRAVEL"
            $textSize = $graphics.MeasureString($text, $font)

            $rectY = [float](($bmp.Height / 2) + ($bmp.Height / 4))
            $rectHeight = [float]($textSize.Height + 20)
            
            # Use floating point numbers explicitly
            $x = [float]0
            $w = [float]$bmp.Width
            $rect = New-Object System.Drawing.RectangleF($x, $rectY, $w, $rectHeight)
            
            $graphics.FillRectangle($bgBrush, $rect)

            $textX = [float](($bmp.Width - $textSize.Width) / 2)
            $textY = [float]($rectY + 10)
            
            $graphics.DrawString($text, $font, $textBrush, $textX, $textY)

            $font.Dispose()
            $textBrush.Dispose()
            $bgBrush.Dispose()
            $graphics.Dispose()

            $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
            $bmp.Dispose()
            
            Write-Host "Processed $imgName successfully"
        } catch {
            Write-Host "Error on $imgName : $_"
        }
    }
}
