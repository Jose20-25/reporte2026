// Sistema de autenticación para Reporte Misioneros
// Usuarios y contraseñas del sistema

const usuarios = {
    administrador: {
        password: 'admin2026',
        rol: 'administrador',
        nombre: 'Administrador',
        pagina: 'dashboard-admin.html',
        grupoAsignado: null
    },
    pastor_denis: {
        password: 'denis2026',
        rol: 'lider',
        nombre: 'Pastor Denis',
        pagina: 'reportes-misiones.html',
        grupo: 'El Sauce - Grupo N°1',
        grupoAsignado: 'sauce'
    },
    pastor_cesar: {
        password: 'cesar2026',
        rol: 'lider',
        nombre: 'Pastor Cesar',
        pagina: 'reportes-misiones.html',
        grupo: 'El Pital - Grupo N°2',
        grupoAsignado: 'pital'
    },
    damaris_mayora: {
        password: 'damaris2026',
        rol: 'lider',
        nombre: 'Damaris Mayora',
        pagina: 'reportes-misiones.html',
        grupo: 'La Tekera - Grupo N°3',
        grupoAsignado: 'tekera'
    }
};

// Manejar el envío del formulario
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const usuarioSeleccionado = document.getElementById('usuario').value;
    const passwordIngresado = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Limpiar mensaje de error previo
    errorMessage.textContent = '';
    
    // Validar que se haya seleccionado un usuario
    if (!usuarioSeleccionado) {
        errorMessage.textContent = 'Por favor seleccione un usuario';
        return;
    }
    
    // Validar contraseña
    const usuario = usuarios[usuarioSeleccionado];
    
    if (passwordIngresado === usuario.password) {
        // Login exitoso
        // Guardar información de sesión
        sessionStorage.setItem('usuarioActivo', usuarioSeleccionado);
        sessionStorage.setItem('nombreUsuario', usuario.nombre);
        sessionStorage.setItem('rolUsuario', usuario.rol);
        sessionStorage.setItem('grupoUsuario', usuario.grupo || '');
        sessionStorage.setItem('grupoAsignado', usuario.grupoAsignado || '');
        
        // Redirigir a la página correspondiente
        window.location.href = usuario.pagina;
    } else {
        // Contraseña incorrecta
        errorMessage.textContent = 'Contraseña incorrecta. Intente nuevamente.';
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
});

// Función para verificar si hay una sesión activa
function verificarSesion() {
    const usuarioActivo = sessionStorage.getItem('usuarioActivo');
    return usuarioActivo !== null;
}

// Función para cerrar sesión
function cerrarSesion() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}

// Función para obtener información del usuario actual
function obtenerUsuarioActual() {
    return {
        usuario: sessionStorage.getItem('usuarioActivo'),
        nombre: sessionStorage.getItem('nombreUsuario'),
        rol: sessionStorage.getItem('rolUsuario'),
        grupo: sessionStorage.getItem('grupoUsuario'),
        grupoAsignado: sessionStorage.getItem('grupoAsignado')
    };
}
