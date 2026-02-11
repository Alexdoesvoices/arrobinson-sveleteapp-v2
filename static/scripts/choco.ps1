$proceed = Read-Host "Are you sure you want to execute this script?(Y/N) "
$apps = @(
    "ditto"
    "fastfetch"
    "firefox"
    "flow-launcher"
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

   Write-Host "Select the programs you want to install:" -ForegroundColor Red

    for ($i = 0; $i -lt $apps.Count; $i++) {
        $num = $i + 1
        Write-Host "[$num] $($apps[$i])" -ForegroundColor Green
        Start-Sleep -Milliseconds 100
    }

    Write-Host ""
    $selection = Read-Host "Enter numbers (e.g. 1,4,7) or 'A' for all"

    # Convert selection string into a list of indices
    $selectedIndices = @()

    if ($selection -eq "A" -or $selection -eq "a") {
        $selectedIndices = 0..($apps.Count - 1)
    } else {
        # Split the input by commas and convert to integers
        $selectedIndices = $selection.Split(',') | ForEach-Object { 
            $val = $_.Trim()
            if ([int]::TryParse($val, [ref]0)) { [int]$val - 1 } 
        }
    }

    # Process installation
    foreach ($index in $selectedIndices) {
        if ($index -ge 0 -and $index -lt $apps.Count) {
            $app = $apps[$index]
            Write-Host "`n>>> Upgrading $app..." -ForegroundColor Cyan
            choco upgrade $app -y
        }
    }

}