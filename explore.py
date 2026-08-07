#!/usr/bin/env python3
"""
Antigravity Tools - FTP Directory Explorer (Extended)
Tries multiple possible public_html paths on Bluehost.
"""

import os
import sys
import ftplib

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def load_env_file():
    env_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), ".env")
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    os.environ[k.strip()] = v.strip()

def try_cwd(ftp, path):
    try:
        ftp.cwd(path)
        print(f"[SUCCESS] Accessible: {path}  -->  Current: {ftp.pwd()}")
        print("[CONTENTS]")
        ftp.dir()
        return True
    except Exception as e:
        print(f"[BLOCKED]  {path}  ({e})")
        return False

def main():
    load_env_file()

    ftp_host = os.environ.get("FTP_HOST")
    ftp_user = os.environ.get("FTP_USER")
    ftp_pass = os.environ.get("FTP_PASS")

    print(f"\n[CONNECTING] {ftp_host} as {ftp_user}...")
    ftp = ftplib.FTP(ftp_host)
    ftp.login(user=ftp_user, passwd=ftp_pass)
    print(f"[AUTH SUCCESS] Root dir: {ftp.pwd()}")

    # Try all likely paths
    paths_to_try = [
        "..",
        "../public_html",
        "/home3/besttopo/public_html",
        "/home3/besttopo/antigravitytools.app",
        "/home3/besttopo/antigravitytools.app/public_html",
        "/home3/besttopo",
        "/public_html",
        "public_html",
    ]

    print("\n[SCANNING POSSIBLE PATHS]")
    for path in paths_to_try:
        ftp.cwd("/")  # reset to root each time
        try_cwd(ftp, path)
        print()

    ftp.quit()

if __name__ == "__main__":
    main()
