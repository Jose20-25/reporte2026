# Sistema de Reporte Misioneros 2026

## 🔐 Credenciales de Acceso

### Administrador
- **Usuario**: Administrador
- **Contraseña**: admin2026
- **Acceso**: Panel completo de administración

### Líderes de Grupo
1. **Pastor Denis**
   - Usuario: Pastor Denis
   - Contraseña: denis2026

2. **Pastor Cesar**
   - Usuario: Pastor Cesar
   - Contraseña: cesar2026

3. **Damaris Mayora**
   - Usuario: Damaris Mayora
   - Contraseña: damaris2026

## 📁 Estructura del Proyecto

```
html/
├── index.html              # Página de login
├── auth.js                 # Sistema de autenticación
├── styles.css              # Estilos del sistema
├── dashboard-admin.html    # Panel del administrador
├── dashboard-denis.html    # Panel de Pastor Denis
├── dashboard-cesar.html    # Panel de Pastor Cesar
└── dashboard-damaris.html  # Panel de Damaris Mayora
```

## 🚀 Cómo Usar

1. Abrir `index.html` en un navegador web
2. Seleccionar el usuario del menú desplegable
3. Ingresar la contraseña correspondiente
4. Click en "Iniciar Sesión"

## ✨ Características

- ✅ Sistema de login con selección de usuario
- ✅ Autenticación con contraseñas
- ✅ 4 dashboards personalizados (1 admin + 3 líderes)
- ✅ Sesiones seguras con sessionStorage
- ✅ Verificación de acceso por rol
- ✅ Botón de cerrar sesión
- ✅ Diseño responsive y moderno
- ✅ Validación de formularios

## 🎨 Próximos Pasos

Puedes agregar las siguientes funcionalidades:
- Formularios para crear reportes
- Base de datos para almacenar información
- Tablas para mostrar reportes
- Gráficas y estadísticas
- Sistema de notificaciones
- Exportación de reportes a PDF/Excel

## 📝 Notas de Seguridad

⚠️ **Importante**: Este es un sistema básico para desarrollo. Para producción:
- Implementar autenticación en el servidor
- Usar HTTPS
- Encriptar contraseñas
- Implementar tokens de sesión seguros
- Añadir protección contra ataques CSRF/XSS
