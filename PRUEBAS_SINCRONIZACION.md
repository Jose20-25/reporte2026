# 🧪 PRUEBAS DE SINCRONIZACIÓN - SISTEMA REPORTES 2026

## ✅ Pasos para Probar la Sincronización entre Dispositivos

### 📱 PRUEBA 1: Verificar Conexión con Firebase

1. **Abrir el Dashboard de Administrador:**
   - Usuario: `administrador`
   - Contraseña: `admin2026`

2. **Abrir la Consola del Navegador:**
   - Presiona `F12` o `Ctrl + Shift + I`
   - Ve a la pestaña **"Console"**

3. **Verificar Mensajes:**
   Deberías ver mensajes como:
   ```
   🔄 Cargando reportes desde Firebase...
   ✅ X reportes cargados desde Firebase
   ```

4. **Si hay error:**
   ```
   ❌ Error al cargar desde Firebase: [error]
   ⚠️ Usando X reportes desde localStorage
   ```

---

### 📊 PRUEBA 2: Crear un Reporte Nuevo

1. **Iniciar sesión como líder:**
   - Usuario: `pastor_denis` / Contraseña: `denis2026` (El Sauce)
   - Usuario: `pastor_cesar` / Contraseña: `cesar2026` (El Pital)
   - Usuario: `damaris_mayora` / Contraseña: `damaris2026` (La Tekera)

2. **Crear un reporte:**
   - Clic en "Crear Nuevo Reporte"
   - Llena los datos del formulario
   - Clic en "Guardar Reporte"

3. **Verificar mensaje:**
   ```
   ✅ Reporte guardado exitosamente en Firebase!
   
   Fecha: [fecha]
   Tipo: [tipo]
   Total Asistentes: [número]
   
   ✨ El reporte estará disponible en todos los dispositivos.
   ```

4. **Verificar en la consola:**
   ```
   Reporte guardado con ID: [firebase_id]
   ```

---

### 🔄 PRUEBA 3: Sincronización entre Dispositivos

#### **DISPOSITIVO 1 (Donde se creó el reporte):**
1. Mantén la sesión abierta

#### **DISPOSITIVO 2 (Otro dispositivo o navegador en modo incógnito):**
1. Abre: `index.html`
2. Inicia sesión como: `administrador` / `admin2026`
3. **DEBERÍAS VER:** El reporte que acabas de crear

#### **Si NO aparece automáticamente:**
1. Clic en el botón **"🔄 Sincronizar Datos"**
2. Espera el mensaje: "✅ SINCRONIZACIÓN COMPLETADA"
3. Ahora deberías ver todos los reportes

---

### 🛠️ PRUEBA 4: Verificar Estadísticas en Tiempo Real

1. En el **Dashboard Admin**, verifica:
   - **Total Reportes**: Contador actualizado
   - **Total Asistentes**: Suma correcta
   - **Promedio por Evento**: Cálculo correcto
   - **Reportes por Grupo**: Contadores individuales

2. En la **Tabla de Reportes Recientes**:
   - Deberían aparecer los últimos 5 reportes
   - Con botones: "👁️ Ver" y "🖨️ Imprimir"

---

### 🔥 PRUEBA 5: Verificar Firebase Console (Opcional)

1. Abre: https://console.firebase.google.com/
2. Selecciona el proyecto: **reporte2026-bab62**
3. Ve a **Firestore Database**
4. Verifica la colección **"reportes"**
5. Deberías ver todos los documentos con:
   - ID único
   - Datos del reporte
   - Timestamp de creación

---

## ✅ CHECKLIST DE VERIFICACIÓN

### Funcionalidades que DEBEN funcionar:

- [ ] Login con todas las cuentas (admin y líderes)
- [ ] Dashboard carga reportes desde Firebase
- [ ] Crear nuevo reporte guarda en Firebase
- [ ] Mensaje de confirmación muestra "Firebase"
- [ ] Sincronización manual funciona (botón 🔄)
- [ ] Reportes aparecen en TODOS los dispositivos
- [ ] Estadísticas se actualizan correctamente
- [ ] Consola muestra mensajes de Firebase (sin errores)
- [ ] Tabla de asistencia se carga correctamente
- [ ] Exportar a Excel/PDF funciona

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### ❌ "Error al cargar desde Firebase"

**Causas posibles:**
- No hay conexión a Internet
- Reglas de Firestore bloqueando acceso
- Configuración incorrecta de Firebase

**Solución:**
1. Verifica conexión a Internet
2. Revisa las reglas en Firebase Console
3. Verifica que `firebase-config.js` tenga las credenciales correctas

---

### ❌ "Reportes no se sincronizan"

**Solución:**
1. Presiona `F12` > Console
2. Busca errores en rojo
3. Clic en "🔄 Sincronizar Datos"
4. Espera 30 segundos (sincronización automática)
5. Recarga la página (`F5`)

---

### ❌ "No veo el botón de sincronizar"

**Solución:**
- El botón está solo en el **Dashboard Admin**
- Asegúrate de estar en: `dashboard-admin.html`
- Verifica que iniciaste sesión como **administrador**

---

## 📞 INFORMACIÓN TÉCNICA

### Archivos Modificados:
- ✏️ `dashboard-admin.html` - Sincronización completa con Firebase
- ✏️ `reporte-grupo.html` - Guardado en Firebase
- 📄 `firebase-config.js` - Configuración de Firebase
- 📄 `firestore.rules` - Reglas de seguridad

### Sincronización:
- **Manual**: Botón "🔄 Sincronizar Datos"
- **Automática**: Cada 30 segundos en formularios
- **Al cargar**: Al abrir el dashboard

### Almacenamiento:
- **Firebase**: Base de datos principal (sincronizada)
- **localStorage**: Backup local (respaldo)

---

## 🎯 RESULTADO ESPERADO

**ANTES (❌):**
- Reportes solo en localStorage
- No se ven en otros dispositivos
- Cada dispositivo tiene datos diferentes

**AHORA (✅):**
- Reportes en Firebase
- Sincronización automática
- Mismo dashboard en todos los dispositivos
- Datos en tiempo real

---

**Fecha de Prueba:** 14 de enero de 2026  
**Sistema:** Reportes Misioneros 2026  
**Versión:** 2.0 (Con sincronización Firebase)
