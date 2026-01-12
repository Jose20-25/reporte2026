// Configuración de Firebase para Reporte Misioneros 2026
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGRr8VmZ3CLpSuDXKr_DMSV2y9u-fVIG4",
  authDomain: "reporte2026-bab62.firebaseapp.com",
  projectId: "reporte2026-bab62",
  storageBucket: "reporte2026-bab62.firebasestorage.app",
  messagingSenderId: "51617904428",
  appId: "1:51617904428:web:33610bbaff48fc80725e89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Funciones para manejar reportes
async function guardarReporteFirebase(reporte) {
    try {
        const docRef = await addDoc(collection(db, "reportes"), reporte);
        console.log("Reporte guardado con ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error al guardar reporte: ", e);
        throw e;
    }
}

async function obtenerReportesFirebase() {
    try {
        const q = query(collection(db, "reportes"), orderBy("fechaCreacion", "desc"));
        const querySnapshot = await getDocs(q);
        const reportes = [];
        querySnapshot.forEach((doc) => {
            reportes.push({ id: doc.id, ...doc.data() });
        });
        return reportes;
    } catch (e) {
        console.error("Error al obtener reportes: ", e);
        throw e;
    }
}

async function eliminarReporteFirebase(reporteId) {
    try {
        await deleteDoc(doc(db, "reportes", reporteId));
        console.log("Reporte eliminado");
    } catch (e) {
        console.error("Error al eliminar reporte: ", e);
        throw e;
    }
}

async function eliminarTodosLosReportesFirebase() {
    try {
        const querySnapshot = await getDocs(collection(db, "reportes"));
        const deletePromises = [];
        querySnapshot.forEach((documento) => {
            deletePromises.push(deleteDoc(doc(db, "reportes", documento.id)));
        });
        await Promise.all(deletePromises);
        console.log("Todos los reportes eliminados");
    } catch (e) {
        console.error("Error al eliminar todos los reportes: ", e);
        throw e;
    }
}

// Exportar funciones
export { 
    db, 
    guardarReporteFirebase, 
    obtenerReportesFirebase, 
    eliminarReporteFirebase,
    eliminarTodosLosReportesFirebase 
};
