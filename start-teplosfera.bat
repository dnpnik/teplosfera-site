@echo off
title TeploSfera Site
cd /d "D:\Yandex.Disk\SERVER\teplosfera-site"

echo ================================
echo   ТеплоСфера - запуск сайта
echo ================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ОШИБКА: Node.js не установлен.
  echo Установите Node.js LTS и перезагрузите компьютер.
  pause
  exit /b
)

if not exist node_modules (
  echo Устанавливаю зависимости...
  call npm install
)

echo.
echo Запускаю сайт...
start "" "http://localhost:5173/"
call npm run dev

pause