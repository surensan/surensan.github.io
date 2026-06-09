@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo Updating generated portfolio projects...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0update-projects.ps1"
if errorlevel 1 pause & exit /b 1

echo.
echo Optimizing thumbnails...
set "PYTHON_EXE="
where python >nul 2>nul && set "PYTHON_EXE=python"
if "%PYTHON_EXE%"=="" where py >nul 2>nul && set "PYTHON_EXE=py"
if "%PYTHON_EXE%"=="" if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" set "PYTHON_EXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
if not "%PYTHON_EXE%"=="" (
  "%PYTHON_EXE%" "%~dp0generate-thumbnails.py"
) else (
  echo Thumbnail optimization skipped. Python was not found.
)

echo.
echo Uploading to GitHub Pages...
git add .
git commit -m "Update portfolio works"
git push -u origin main

echo.
echo Done. Open https://surensan.github.io after 1-3 minutes.
pause
