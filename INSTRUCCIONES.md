# 📊 Sistema de Reportes Misioneros 2026

Sistema web para gestión de reportes misioneros con tres filiales y panel de administración.

## 🚀 Características

- ✅ Sistema de autenticación con 4 usuarios (1 admin + 3 líderes)
- 📋 Reportes dinámicos por grupo y filial
- 📊 Dashboard administrativo con estadísticas
- 📈 Control de asistencia individual y grupal
- 🖨️ Exportación a PDF y Excel
- ☁️ Sincronización con Firebase (opcional)
- 📱 Acceso desde cualquier dispositivo

## 👥 Usuarios del Sistema

| Usuario | Contraseña | Rol | Grupo Asignado |
|---------|------------|-----|----------------|
| administrador | admin2026 | Administrador | Todos |
| pastor_denis | denis2026 | Líder | Grupo N°1 |
| pastor_cesar | cesar2026 | Líder | Grupo N°2 |
| damaris_mayora | damaris2026 | Líder | Grupo N°3 |

## 🏘️ Filiales

1. **El Sauce** 🌿 - Grupo N°1 (Pastor Denis Mayora)
2. **El Pital** ⛰️ - Grupo N°2 (Pastor Cesar Cuchillas)
3. **La Tekera** 🏘️ - Grupo N°3 (Damaris de Nolasco)

## 📁 Estructura del Proyecto

```
Reporte 2026/
├── index.html              # Página de login
├── dashboard-admin.html    # Panel de administración
├── reportes-misiones.html  # Selector de filiales
├── reporte-grupo.html      # Formulario de reportes
├── auth.js                 # Sistema de autenticación
├── grupos-data.js          # Datos de grupos y auxiliares
├── firebase-config.js      # Configuración de Firebase
├── storage-sync.js         # Sincronización Firebase/localStorage
├── styles.css              # Estilos globales
├── firebase.json           # Configuración de hosting
├── firestore.rules         # Reglas de seguridad
└── logo/                   # Imágenes de las filiales
    ├── El Sauce.png
    ├── El Pital.png
    ├── La Tekera.png
    └── Central.png
```

## 🔧 Instalación Local

1. Clonar o descargar el proyecto
2. Abrir `index.html` en un navegador
3. Iniciar sesión con cualquiera de los usuarios

**Nota:** Para funcionalidad completa, usar un servidor local:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (npx)
npx serve

# Usando PHP
php -S localhost:8000
```

## ☁️ Despliegue en Firebase

### Requisitos
- Node.js instalado
- Cuenta de Firebase
- Firebase CLI instalado

### Pasos para desplegar

1. **Instalar Firebase CLI** (si no lo tienes):
```bash
npm install -g firebase-tools
```

2. **Iniciar sesión en Firebase**:
```bash
firebase login
```

3. **Inicializar el proyecto** (ya configurado):
```bash
cd "F:\Proyectos\Reporte 2026"
firebase init
```
Seleccionar:
- ✅ Firestore
- ✅ Hosting
- Usar configuración existente (firebase.json)

4. **Configurar Firestore**:
- Ir a [Firebase Console](https://console.firebase.google.com/)
- Seleccionar proyecto: reporte2026-bab62
- Ir a Firestore Database → Crear base de datos
- Seleccionar modo de prueba o producción
- Elegir ubicación: us-central1 (recomendado)

5. **Desplegar**:
```bash
firebase deploy
```

6. **URL del proyecto**:
```
https://reporte2026-bab62.web.app
```

## 🔄 Sincronización de Datos

El sistema funciona en dos modos:

### Modo localStorage (Por defecto sin internet)
- Los datos se guardan localmente en el navegador
- Solo accesible desde el mismo dispositivo
- No requiere conexión a internet

### Modo Firebase (Con conexión)
- Los datos se sincronizan automáticamente
- Accesible desde cualquier dispositivo
- Requiere conexión a internet
- Backup automático en localStorage

## 📊 Funcionalidades del Dashboard

### Para Administrador:
- Ver estadísticas de todas las filiales
- Exportar reportes a PDF/Excel
- Control de asistencia por grupo
- Detalle de asistencia individual
- Reiniciar sistema (eliminar todos los datos)
- Imprimir reportes individuales

### Para Líderes:
- Crear reportes de cualquier filial
- Ver equipo de auxiliares
- Registro de asistencia del grupo
- Actividades realizadas y programadas
- Conteo de adultos y niños
- Visitas y hermanos enfermos

## 🛠️ Mantenimiento

### Agregar nuevos auxiliares
Editar `grupos-data.js`:
```javascript
auxiliares: [
    { nombre: 'Nuevo Auxiliar', icono: '👨' },
    // ...
]
```

### Agregar nuevos usuarios
Editar `auth.js`:
```javascript
nuevo_usuario: {
    password: 'password2026',
    rol: 'lider',
    nombre: 'Nombre Completo',
    pagina: 'reportes-misiones.html',
    grupoAsignado: 'sauce' // o 'pital', 'tekera'
}
```

### Cambiar contraseñas
Editar `auth.js` y modificar el campo `password`.

## 🔒 Seguridad

### Recomendaciones para producción:
1. Cambiar todas las contraseñas por defecto
2. Configurar reglas de Firestore con autenticación
3. Usar HTTPS
4. Implementar Firebase Authentication
5. Limitar permisos por rol

### Actualizar reglas de Firestore:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /reportes/{reporteId} {
      // Solo usuarios autenticados
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📱 Acceso Móvil

El sistema es completamente responsive y funciona en:
- 📱 Teléfonos móviles
- 📱 Tablets
- 💻 Computadoras de escritorio

## 🐛 Solución de Problemas

### Las imágenes no cargan
- Verificar que la carpeta `logo/` esté en la raíz del proyecto
- Verificar nombres de archivos (El Sauce.png, El Pital.png, La Tekera.png)

### Firebase no conecta
- Verificar conexión a internet
- Revisar configuración en `firebase-config.js`
- Verificar que Firestore esté habilitado en Firebase Console

### Los reportes no se guardan
- Limpiar caché del navegador
- Verificar que JavaScript esté habilitado
- Revisar consola del navegador (F12) para errores

## 📧 Soporte

Para soporte técnico o reportar problemas, contactar al administrador del sistema.

---

**Desarrollado para:** Iglesia Central - Sistema de Reportes Misioneros
**Año:** 2026
**Versión:** 1.0.0
