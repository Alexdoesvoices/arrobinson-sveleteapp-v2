$packages = @(
"nodejs"
"git",
"micro"
)

$currentPrincipal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
$isAdmin = $currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "--- ATTENTION ---" -ForegroundColor Yellow
    Write-Host "This script needs Admin rights to use Chocolatey."
    $response = Read-Host "Relaunch as Administrator? (Y/N)"

    if ($response -eq "Y" -or $response -eq "y") {
        # This command restarts the script in a new elevated window
        Start-Process powershell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs
        exit
    } else {
        Write-Host "Permission denied. Exiting..." -ForegroundColor Red
        pause
        exit
    }
}

Write-Host "`nPackages to Install/Upgrade:" -ForegroundColor Red
$packages | ForEach-Object { Write-Host " - $_" -ForegroundColor Yellow }

$proceed = Read-Host "`nDo you want to Upgrade/Install these packages? (Y/N)"
if ($proceed -eq "Y" -or $proceed -eq "y") { 
    foreach ($package in $packages) {
        Write-Host "Working on: $package" -ForegroundColor Green
        choco upgrade $package -y 
    }
    Write-Host "All operations finished!" -ForegroundColor Cyan
} else {
    Write-Host "Aborted by user." -ForegroundColor Yellow
}

pause