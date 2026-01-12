# Script de despliegue automático para Firebase
# Ejecutar con PowerShell

Write-Host "🚀 DESPLIEGUE DE SISTEMA DE REPORTES MISIONEROS 2026" -ForegroundColor Cyan
Write-Host ""

# Verificar si Firebase CLI está instalado
Write-Host "Verificando Firebase CLI..." -ForegroundColor Yellow
$firebaseInstalled = Get-Command firebase -ErrorAction SilentlyContinue

if (-not $firebaseInstalled) {
    Write-Host "❌ Firebase CLI no está instalado" -ForegroundColor Red
    Write-Host ""
    Write-Host "Instalando Firebase CLI..." -ForegroundColor Yellow
    npm install -g firebase-tools
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Error al instalar Firebase CLI" -ForegroundColor Red
        Write-Host "Por favor, instala manualmente con: npm install -g firebase-tools" -ForegroundColor Yellow
        exit 1
    }
}

Write-Host "✅ Firebase CLI instalado" -ForegroundColor Green
Write-Host ""

# Verificar login
Write-Host "Verificando autenticación de Firebase..." -ForegroundColor Yellow
firebase login:list 2>&1 | Out-Null

if ($LASTEXITCODE -ne 0) {
    Write-Host "Por favor, inicia sesión en Firebase..." -ForegroundColor Yellow
    firebase login
}

Write-Host "✅ Autenticado en Firebase" -ForegroundColor Green
Write-Host ""

# Confirmar despliegue
Write-Host "📋 INFORMACIÓN DEL PROYECTO:" -ForegroundColor Cyan
Write-Host "  Proyecto: reporte2026-bab62" -ForegroundColor White
Write-Host "  URL: https://reporte2026-bab62.web.app" -ForegroundColor White
Write-Host ""

$confirmacion = Read-Host "¿Deseas continuar con el despliegue? (S/N)"

if ($confirmacion -ne "S" -and $confirmacion -ne "s") {
    Write-Host "❌ Despliegue cancelado" -ForegroundColor Yellow
    exit 0
}

# Desplegar
Write-Host ""
Write-Host "🚀 Desplegando a Firebase..." -ForegroundColor Cyan
firebase deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ ¡DESPLIEGUE EXITOSO!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Tu aplicación está disponible en:" -ForegroundColor Cyan
    Write-Host "   https://reporte2026-bab62.web.app" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📱 Puedes acceder desde cualquier dispositivo con esa URL" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Error en el despliegue" -ForegroundColor Red
    Write-Host "Revisa los errores anteriores" -ForegroundColor Yellow
}

Write-Host ""
Read-Host "Presiona Enter para salir"
