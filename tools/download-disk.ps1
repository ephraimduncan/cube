mkdir images
cd images

$wc = New-Object System.Net.WebClient
$path = "$(Resolve-Path .)\images.zip"
$wc.DownloadFile($env:DISK_URL, $path)

7z x images.zip -y -aoa
Remove-Item images.zip
Remove-Item __MACOSX -Recurse -ErrorAction Ignore
cd ..
Tree ./ /F
