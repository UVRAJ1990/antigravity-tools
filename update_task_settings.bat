powershell -Command "$task = Get-ScheduledTask -TaskName 'Antigravity_Auto_Marketing'; $task.Settings.StartWhenAvailable = $true; Set-ScheduledTask $task"
schtasks /Query /TN "Antigravity_Auto_Marketing" /FO LIST
