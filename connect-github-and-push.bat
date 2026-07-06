@echo off
cd /d "%~dp0"

set "GH=C:\Program Files\GitHub CLI\gh.exe"

if not exist "%GH%" (
  echo GitHub CLI was not found.
  echo Please install GitHub CLI and run this file again.
  pause
  exit /b 1
)

echo Checking GitHub login...
"%GH%" auth status >nul 2>nul
if errorlevel 1 (
  echo.
  echo A browser window will open for GitHub login.
  echo Complete the login, then return here.
  echo.
  "%GH%" auth login --hostname github.com --web --git-protocol https
  if errorlevel 1 (
    echo GitHub login failed.
    pause
    exit /b 1
  )
)

echo.
echo Creating GitHub repository and pushing project...
"%GH%" repo create WebEngine --source . --private --push
if errorlevel 1 (
  echo.
  echo If the repository already exists, trying to push to it...
  for /f "tokens=*" %%u in ('"%GH%" api user --jq ".login"') do set "GH_USER=%%u"
  git remote remove origin >nul 2>nul
  git remote add origin https://github.com/%GH_USER%/WebEngine.git
  git push -u origin main
  if errorlevel 1 (
    echo.
    echo Push failed. Check the message above.
    pause
    exit /b 1
  )
)

echo.
echo Done. Project is connected and pushed to GitHub.
"%GH%" repo view --web
pause
