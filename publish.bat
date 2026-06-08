@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo Updating generated portfolio projects...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0update-projects.ps1"
if errorlevel 1 pause & exit /b 1

echo.
echo Uploading to GitHub Pages...
git add .
git commit -m "Update portfolio works"
git push -u origin main

echo.
echo Done. Open https://surensan.github.io after 1-3 minutes.
pause
