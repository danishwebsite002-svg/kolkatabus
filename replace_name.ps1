Get-ChildItem -Path . -Filter *.html -Recurse | ForEach-Object {
    $content = Get-Content $_.FullName
    $content = $content -replace 'BusRentals', 'GITANJALI TRAVEL'
    Set-Content -Path $_.FullName -Value $content
}
