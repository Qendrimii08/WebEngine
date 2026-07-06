@echo off
cd /d "%~dp0"

echo Starting WebEngine project...
echo.

if not exist node_modules (
  echo Installing dependencies first...
  call npm install
  echo.
)

start "WebEngine Dev Server" cmd /k "npm run dev"

echo Opening website...
timeout /t 5 /nobreak >nul
start http://localhost:5173

echo.
echo Project started.
echo Frontend: http://localhost:5173
echo.
pause
