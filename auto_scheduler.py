"""
Antigravity Tools — Fully Automated Master Scheduler & Social Media Engine
Runs automatic search engine re-indexing, directory pinging, and scheduled social posts.
"""

import sys
import time
import subprocess
from datetime import datetime

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

LOG_FILE = "automation_schedule.log"

def log(msg):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    entry = f"[{timestamp}] {msg}"
    print(entry)
    with open(LOG_FILE, "a", encoding="utf-8") as f:
        f.write(entry + "\n")

def run_task(script_name, description):
    log(f"🚀 Starting scheduled task: {description} ({script_name})...")
    try:
        res = subprocess.run([sys.executable, script_name], capture_output=True, text=True, encoding="utf-8")
        if res.returncode == 0:
            log(f"  ✅ {description} completed successfully!")
        else:
            log(f"  ⚠️ {description} exited with code {res.returncode}. Output: {res.stderr[:200]}")
    except Exception as e:
        log(f"  ❌ Error running {script_name}: {e}")

def execute_full_cycle():
    log("==================================================")
    log("⚡ EXECUTING AUTOMATED MARKETING & INDEXING CYCLE")
    log("==================================================")
    
    # Task 1: Re-index all 60 site URLs with IndexNow (Bing, DuckDuckGo, Yandex)
    run_task("auto_indexer.py", "Search Engine Auto-Indexer")
    
    # Task 2: Ping global directory hubs & Ping-O-Matic
    run_task("auto_directory_pinger.py", "Global Directory Pinger")
    
    # Task 3: Run Dev.to & Social Media Submitter
    run_task("auto_submitter.py", "Social Media & Dev.to Submitter")
    
    log("🎉 Full Automated Cycle Complete!")

if __name__ == "__main__":
    execute_full_cycle()
