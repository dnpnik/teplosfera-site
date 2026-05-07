@echo off
title TeploSfera Site Fixed Start
cd /d D:\Yandex.Disk\SERVER\teplosfera-site

echo Останавливаю старые процессы Node...
taskkill /F /IM node.exe >nul 2>nul

echo.
echo Проверяю папку проекта...
dir package.json

echo.
echo Устанавливаю зависимости...
call npm install

echo.
echo Запускаю сайт на 127.0.0.1:5173
start "" "http://127.0.0.1:5173/"
call npx vite --host 127.0.0.1 --port 5173

pause