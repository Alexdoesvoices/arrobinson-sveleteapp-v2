$proceed = Read-Host "Are you sure you want to execute this script?(Y/N) "
$packages = @(
    "@google/gemini-cli"
    "live-server"
    "pm2"
)
if ($proceed -like 'Y') {
    Write-Host "Installing NPM packages"

    Write-Host ""
    Write-Host "Packges: "

    foreach ($package in $packages) {
        Write-Host $package
    }
    $proceed2 = Read-Host "Proced with Install? (Y/N)"

    if ($proceed2 -like 'Y') {   
        foreach ($package in $packages) {
            npm install -g $package
        }
    }
}