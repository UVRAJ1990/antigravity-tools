$action  = New-ScheduledTaskAction -Execute 'C:\Users\cvyuv\OneDrive\Desktop\anti webste\run_submit.bat'
$trigger = New-ScheduledTaskTrigger -Daily -At '09:00AM'
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -RunOnlyIfNetworkAvailable -DontStopIfGoingOnBatteries
Register-ScheduledTask `
    -TaskName    'URLSubmitter' `
    -TaskPath    '\AntigravityTools\' `
    -Action      $action `
    -Trigger     $trigger `
    -Settings    $settings `
    -Description 'Submits 10 URLs daily to Google for antigravitytools.app' `
    -Force
Write-Host "Done! Task registered."
