// Sincronización entre localStorage y Firebase
import { guardarReporteFirebase, obtenerReportesFirebase, eliminarTodosLosReportesFirebase } from './firebase-config.js';

// Variable para modo de almacenamiento
let usarFirebase = true;

// Detectar si Firebase está disponible
async function verificarFirebase() {
    try {
        await obtenerReportesFirebase();
        usarFirebase = true;
        console.log("✅ Firebase conectado correctamente");
        return true;
    } catch (error) {
        usarFirebase = false;
        console.warn("⚠️ Firebase no disponible, usando localStorage", error);
        return false;
    }
}

// Guardar reporte (Firebase o localStorage)
async function guardarReporte(reporte) {
    if (usarFirebase) {
        try {
            await guardarReporteFirebase(reporte);
            // También guardar en localStorage como backup
            let reportesLocal = JSON.parse(localStorage.getItem('reportes') || '[]');
            reportesLocal.unshift(reporte);
            localStorage.setItem('reportes', JSON.stringify(reportesLocal));
        } catch (error) {
            console.error("Error con Firebase, usando localStorage:", error);
            let reportes = JSON.parse(localStorage.getItem('reportes') || '[]');
            reportes.unshift(reporte);
            localStorage.setItem('reportes', JSON.stringify(reportes));
        }
    } else {
        let reportes = JSON.parse(localStorage.getItem('reportes') || '[]');
        reportes.unshift(reporte);
        localStorage.setItem('reportes', JSON.stringify(reportes));
    }
}

// Obtener reportes (Firebase o localStorage)
async function obtenerReportes() {
    if (usarFirebase) {
        try {
            const reportesFirebase = await obtenerReportesFirebase();
            // Sincronizar con localStorage
            localStorage.setItem('reportes', JSON.stringify(reportesFirebase));
            return reportesFirebase;
        } catch (error) {
            console.error("Error con Firebase, usando localStorage:", error);
            return JSON.parse(localStorage.getItem('reportes') || '[]');
        }
    } else {
        return JSON.parse(localStorage.getItem('reportes') || '[]');
    }
}

// Eliminar todos los reportes
async function eliminarTodosLosReportes() {
    if (usarFirebase) {
        try {
            await eliminarTodosLosReportesFirebase();
            localStorage.removeItem('reportes');
        } catch (error) {
            console.error("Error con Firebase:", error);
            localStorage.removeItem('reportes');
        }
    } else {
        localStorage.removeItem('reportes');
    }
}

// Sincronizar localStorage con Firebase (migración inicial)
async function sincronizarDatos() {
    if (!usarFirebase) return;
    
    try {
        const reportesLocal = JSON.parse(localStorage.getItem('reportes') || '[]');
        const reportesFirebase = await obtenerReportesFirebase();
        
        // Si hay datos en localStorage pero no en Firebase, migrar
        if (reportesLocal.length > 0 && reportesFirebase.length === 0) {
            console.log("Migrando datos de localStorage a Firebase...");
            for (const reporte of reportesLocal) {
                await guardarReporteFirebase(reporte);
            }
            console.log("✅ Migración completada");
        }
        
        // Si hay datos en Firebase, actualizar localStorage
        if (reportesFirebase.length > 0) {
            localStorage.setItem('reportes', JSON.stringify(reportesFirebase));
        }
    } catch (error) {
        console.error("Error en sincronización:", error);
    }
}

// Inicializar
verificarFirebase().then(() => {
    sincronizarDatos();
});

// Exportar funciones
export { 
    verificarFirebase,
    guardarReporte, 
    obtenerReportes, 
    eliminarTodosLosReportes,
    sincronizarDatos 
};
