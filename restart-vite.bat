@echo off
title Restart Vite - TeploSfera
cd /d D:\Yandex.Disk\SERVER\teplosfera-site

echo Останавливаю процессы на портах 5173 и 5174...

for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5173') do taskkill /PID %%a /F >nul 2>nul
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5174') do taskkill /PID %%a /F >nul 2>nul

echo.
echo Запускаю сайт...
npm run dev

pause