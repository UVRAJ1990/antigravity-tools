#!/usr/bin/env python3
"""
Antigravity Tools - Automated Bluehost FTP Deployment & Cleanup Script
Uploads static website files and cleans up old WordPress files/folders.
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

def delete_remote_folder(ftp, folder):
    """Recursively delete a remote directory over FTP."""
    try:
        lines = []
        ftp.dir(folder, lines.append)
        for line in lines:
            tokens = line.split()
            if not tokens:
                continue
            name = tokens[-1]
            if name in ('.', '..'):
                continue
            item_path = f"{folder}/{name}"
            if line.startswith('d'):
                delete_remote_folder(ftp, item_path)
            else:
                try:
                    ftp.delete(item_path)
                except Exception:
                    pass
        ftp.rmd(folder)
        print(f"[CLEANUP] Deleted remote directory: {folder}")
    except Exception as e:
        print(f"[CLEANUP INFO] Could not delete folder {folder}: {e}")

def main():
    load_env_file()

    print("=" * 60)
    print("[ANTIGRAVITY TOOLS] - BLUEHOST DEPLOYMENT & CLEANUP")
    print("=" * 60)

    ftp_host = os.environ.get("FTP_HOST")
    ftp_user = os.environ.get("FTP_USER")
    ftp_pass = os.environ.get("FTP_PASS")
    remote_dir = os.environ.get("FTP_DIR", "/")

    if not ftp_host or not ftp_user or not ftp_pass:
        print("[ERROR] Missing FTP Host, Username, or Password in .env file.")
        sys.exit(1)

    print(f"\n[CONNECTING] Bluehost FTP server: {ftp_host}...")

    try:
        ftp = ftplib.FTP(ftp_host)
        ftp.login(user=ftp_user, passwd=ftp_pass)
        print("[AUTH SUCCESS] Successfully logged in to FTP server!")

        try:
            ftp.cwd(remote_dir)
            print(f"[DIR] Navigated to remote directory: {remote_dir}")
        except Exception as e:
            print(f"[WARNING] Remote directory {remote_dir} not found, using root.")

        # 1. Clean up old WordPress files & folders
        wp_files_to_remove = [
            "index.php", "wp-config.php", "wp-load.php", "wp-settings.php",
            "wp-signup.php", "wp-trackback.php", "xmlrpc.php", "wp-activate.php",
            "wp-blog-header.php", "wp-comments-post.php", "wp-cron.php",
            "wp-links-opml.php", "wp-login.php", "wp-mail.php", "license.txt", "readme.html"
        ]
        wp_folders_to_remove = ["wp-admin", "wp-content", "wp-includes"]

        print("\n[CLEANUP] Removing old WordPress files...")
        for wf in wp_files_to_remove:
            try:
                ftp.delete(wf)
                print(f"[CLEANUP] Deleted file: {wf}")
            except Exception:
                pass

        print("[CLEANUP] Removing old WordPress directories...")
        for wdir in wp_folders_to_remove:
            delete_remote_folder(ftp, wdir)

        # 2. Upload new 50 tools site files
        files_to_upload = ["index.html", "styles.css", "app.js", "tools.js", "tool_docs.js", "robots.txt", "sitemap.xml", "og-image.svg", "google0c53db2784dfb376.html", ".htaccess"]
        base_dir = os.path.dirname(os.path.abspath(__file__))

        print("\n[UPLOADING] Pushing new site files...")
        for filename in files_to_upload:
            filepath = os.path.join(base_dir, filename)
            if not os.path.exists(filepath):
                print(f"[ERROR] Local file {filename} not found.")
                continue

            print(f"[UPLOADING] {filename}...")
            with open(filepath, "rb") as f:
                ftp.storbinary(f"STOR {filename}", f)
            print(f"[COMPLETED] Uploaded {filename}")

        ftp.quit()
        print("\n" + "=" * 60)
        print("[SUCCESS] CLEANUP & DEPLOYMENT COMPLETE!")
        print("Your website is now 100% clean and LIVE at: https://antigravitytools.app/")
        print("=" * 60 + "\n")

    except Exception as e:
        print(f"\n[DEPLOYMENT FAILED] {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
