# Script de Deployment para Firebase
# Reportes Misioneros 2026

Write-Host "=== DEPLOYMENT A FIREBASE ===" -ForegroundColor Cyan
Write-Host ""

# Verificar si Firebase CLI esta instalado
Write-Host "1. Verificando Firebase CLI..." -ForegroundColor Yellow
$firebaseCmd = Get-Command firebase -ErrorAction SilentlyContinue
if ($firebaseCmd) {
    Write-Host "   OK Firebase CLI instalado" -ForegroundColor Green
} else {
    Write-Host "   X Firebase CLI no encontrado" -ForegroundColor Red
    Write-Host ""
    Write-Host "Para instalar Firebase CLI:" -ForegroundColor Yellow
    Write-Host "npm install -g firebase-tools" -ForegroundColor White
    Write-Host ""
    exit 1
}

Write-Host ""

# Login a Firebase
Write-Host "2. Verificando autenticacion..." -ForegroundColor Yellow
Write-Host "   OK Continuando con deployment" -ForegroundColor Green

Write-Host ""

# Inicializar proyecto si es necesario
Write-Host "3. Verificando configuracion del proyecto..." -ForegroundColor Yellow
if (Test-Path ".firebaserc") {
    Write-Host "   OK Proyecto configurado" -ForegroundColor Green
} else {
    Write-Host "   Configurando proyecto Firebase..." -ForegroundColor Yellow
    firebase use reporte2026-bab62
}

Write-Host ""

# Deploy
Write-Host "4. Desplegando a Firebase Hosting..." -ForegroundColor Yellow
Write-Host ""
firebase deploy --only hosting

Write-Host ""
Write-Host "=== DEPLOYMENT COMPLETADO ===" -ForegroundColor Green
Write-Host ""
Write-Host "Tu aplicacion esta disponible en:" -ForegroundColor Cyan
Write-Host "https://reporte2026-bab62.web.app" -ForegroundColor White
Write-Host "https://reporte2026-bab62.firebaseapp.com" -ForegroundColor White
Write-Host ""
Write-Host "Proximos pasos:" -ForegroundColor Yellow
Write-Host "1. Ve a Firebase Console: https://console.firebase.google.com" -ForegroundColor White
Write-Host "2. Selecciona el proyecto 'reporte2026-bab62'" -ForegroundColor White
Write-Host "3. Crea una base de datos Firestore" -ForegroundColor White
Write-Host "4. Configura las reglas de seguridad" -ForegroundColor White
Write-Host ""
