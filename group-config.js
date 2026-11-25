import {
    obtenerConfiguracionGruposFirebase,
    guardarConfiguracionGruposFirebase
} from './firebase-config.js';

const CACHE_KEY = 'configuracionGruposMisioneros';

function crearConfiguracionPredeterminada() {
    const grupos = JSON.parse(JSON.stringify(window.GRUPOS_DATA || {}));
    const descripciones = {
        sauce: 'Comunidad agrícola dedicada al servicio y la evangelización.',
        pital: 'Misión de montaña que acompaña a familias rurales.',
        tekera: 'Comunidad enfocada en fortalecer familias y nuevas generaciones.'
    };
    const filiales = Object.entries(grupos).map(([id, grupo]) => ({
        id,
        mision: grupo.mision,
        emoji: grupo.emoji,
        logo: grupo.logo,
        descripcion: descripciones[id] || 'Comunidad atendida por el equipo misionero.',
        activa: true
    }));

    return { version: 1, grupos, filiales };
}

function combinarConPredeterminados(configuracion) {
    const base = crearConfiguracionPredeterminada();
    if (!configuracion || typeof configuracion !== 'object') return base;

    const grupos = { ...base.grupos, ...(configuracion.grupos || {}) };
    Object.keys(grupos).forEach(id => {
        const baseGrupo = base.grupos[id] || { auxiliares: [] };
        grupos[id] = {
            ...baseGrupo,
            ...grupos[id],
            auxiliares: Array.isArray(grupos[id]?.auxiliares) ? grupos[id].auxiliares : baseGrupo.auxiliares
        };
    });

    const filiales = Array.isArray(configuracion.filiales) ? configuracion.filiales : base.filiales;
    return { version: 1, grupos, filiales };
}

export async function cargarConfiguracionGrupos() {
    const local = (() => {
        try {
            return JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
        } catch {
            return null;
        }
    })();

    try {
        const remota = await obtenerConfiguracionGruposFirebase();
        if (remota) {
            const configuracion = combinarConPredeterminados(remota);
            localStorage.setItem(CACHE_KEY, JSON.stringify(configuracion));
            return { configuracion, sincronizada: true };
        }
    } catch (error) {
        console.warn('No se pudo leer la configuración compartida; se usará el respaldo local.', error);
    }

    return {
        configuracion: combinarConPredeterminados(local),
        sincronizada: false
    };
}

export async function guardarConfiguracionGrupos(configuracion) {
    const normalizada = combinarConPredeterminados(configuracion);
    localStorage.setItem(CACHE_KEY, JSON.stringify(normalizada));

    try {
        await guardarConfiguracionGruposFirebase(normalizada);
        return { configuracion: normalizada, sincronizada: true };
    } catch (error) {
        console.warn('La configuración quedó guardada en este dispositivo, pero no se pudo sincronizar.', error);
        return { configuracion: normalizada, sincronizada: false, error };
    }
}

export { crearConfiguracionPredeterminada };
