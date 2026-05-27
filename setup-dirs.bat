@echo off
REM LaporAman Project Refactoring - Windows Batch Runner
REM This batch file executes the complete refactoring

cd /d "%~dp0"

echo.
echo ====================================================
echo   LaporAman Project Structure Refactoring
echo ====================================================
echo.

echo Running migration script...
echo.

node migrate-structure.js

echo.
echo ====================================================
if %errorlevel% equ 0 (
    echo   ✓ Migration successful!
    echo.
    echo Next steps:
    echo   1. Run: npm run build
    echo   2. Run: npm run dev
    echo   3. Test in browser:
    echo      - http://localhost:3000/dashboard
    echo      - http://localhost:3000/history-report
) else (
    echo   ✗ Migration failed with error code: %errorlevel%
)
echo ====================================================
echo.
pause
