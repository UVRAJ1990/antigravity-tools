@echo off
set PYTHONIOENCODING=utf-8
cd /d "C:\Users\cvyuv\OneDrive\Desktop\anti webste"
python submit_urls.py >> submit_log_daily.txt 2>&1
