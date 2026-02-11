$proceed = Read-Host "Are you sure you want to execute this script?(Y/N) "
$apps = @(
"ditto"
"fastfetch"
"firefox"
"flow-launcher"
"gh"
"git"
"googledrive"
"micro"
"mingw"
"nodejs"
"obs-studio"
"python"
"ruby"
"rust"
"starship"
"vivaldi"
"vscode"
"windirstat"
)


if ($proceed -like "Y"){ 

    Write-Host "Here is a list of programs about to be installed:" -ForegroundColor Red

    foreach ($app in $apps) {
        Write-Host "$app" -ForegroundColor Green
        Start-Sleep -Milliseconds 100
    
    }
    $allowinstall = Read-Host "Do you want to install these packages? (Y/N)" 
    
    if($allowinstall -like "Y"){
        foreach ($app in $apps) {
            choco upgrade $app -y
        }
    }

}