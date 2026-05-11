$packages = @(
    "nodejs",
    "git",
    "micro"
)


foreach ($package in $packages) {
    Write-Host "Upgrading: $package"
    choco upgrade $package -y
    Write-Host "Finished pgrading: $package"
}