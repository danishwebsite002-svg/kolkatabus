Get-ChildItem -Path . -Filter *.html -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName
    $content = $content -replace 'font-size: 32px; text-transform: uppercase; line-height: 1; letter-spacing: 1px;">GITANJALI TRAVEL', 'font-size: 22px; text-transform: uppercase; line-height: 1; letter-spacing: 0.5px;">GITANJALI TRAVEL'
    Set-Content -Path $_.FullName -Value $content
}
