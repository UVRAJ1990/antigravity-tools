schtasks /Create /TN "Antigravity_Auto_Marketing" /TR "python.exe \"c:\Users\cvyuv\OneDrive\Desktop\anti webste\auto_scheduler.py\"" /SC DAILY /ST 09:00 /F
schtasks /Query /TN "Antigravity_Auto_Marketing" /FO LIST
