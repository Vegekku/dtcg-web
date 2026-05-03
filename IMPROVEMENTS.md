# Sugerencias de mejora — DTCG Web Collection

## Índice

- [🔧 Refactorización de código](#-refactorización-de-código)
- [🏗️ Arquitectura](#️-arquitectura)
- [🎨 UX/UI](#-uxui)
- [⚡ Rendimiento](#-rendimiento)
- [🔒 Robustez y datos](#-robustez-y-datos)
- [🧪 Calidad y testing](#-calidad-y-testing)
- [📦 Build y tooling](#-build-y-tooling)
- [🌐 SEO y PWA](#-seo-y-pwa)
- [💡 Funcionalidades nuevas](#-funcionalidades-nuevas)

---

## 🔧 Refactorización de código

### 1. Eliminar `var` y usar `const`/`let`

En `index.js` hay varios `var cardUrl` dentro de bloques `if/else`. Esto causa hoisting y puede generar bugs sutiles. Reemplazarlos por `let cardUrl` declarado antes del `if`.

```js
// ❌ Actual
if (url.includes('bandaitcgplusURL')) {
    var cardUrl = url.replace('bandaitcgplusURL', bandaitcgplusURL);
} else if (...) {
    var cardUrl = ...;
}

// ✅ Propuesto
let cardUrl;
if (url.includes('bandaitcgplusURL')) {
    cardUrl = url.replace('bandaitcgplusURL', bandaitcgplusURL);
} else if (...) {
    cardUrl = ...;
}
```

### 2. Simplificar `getImageUrl` con un mapa de URLs base

La cadena de `if/else if` para resolver URLs base se puede simplificar con un objeto:

```js
const urlBases = {
    bandaitcgplusURL: 'https://files.bandai-tcg-plus.com/card_image/DG-EN',
    digimoncardjpURL: 'https://digimoncard.com/images/cardlist/card',
    digimoncardURL: 'https://world.digimoncard.com/images/cardlist/card',
    digimonCardDev: 'https://assets.cardlist.dev/images/communitycards',
    digimonFandom: 'https://static.wikia.nocookie.net/digimoncardgame/images',
};

let cardUrl = url;
for (const [key, base] of Object.entries(urlBases)) {
    if (url.includes(key)) {
        cardUrl = url.replace(key, base);
        break;
    }
}
```

### 3. Reducir duplicación en `drawAlternatives`

La lógica de "si no existe la carta, crearla" y "si hay override, recalcular URL" se repite en 3-4 sitios. Extraer funciones auxiliares:

- `ensureCardExists(setId, cardId, slug)` — Inicializa la carta en `collection` si no existe.
- `resolveCardUrl(setElement, url, setId, cardId, parallel)` — Resuelve la URL final teniendo en cuenta overrides.

### 4. Reducir duplicación en `modalOk`

La lógica de guardar el precio de Cardmarket se repite casi idéntica para `card` y `pack`. Extraer a una función:

```js
const updateCardmarketPrice = (target, price) => {
    target.price ??= [];
    if (target.price.length === 0 || target.price.slice(-1)[0] !== price) {
        target.price.push(price);
    }
};
```

### 5. Eliminar `innerHTML +=` para inyectar imágenes

Cada vez que se hace `innerHTML +=` en `card_list`, el navegador re-parsea todo el HTML existente de esa celda, destruyendo event listeners y forzando re-renders innecesarios. Usar `insertAdjacentHTML('beforeend', ...)` o crear elementos con `document.createElement`.

### 6. Eliminar `onclick` inline en HTML

Hay muchos `onclick="editSet()"`, `onclick="modalClose(this)"`, etc. en `index.html`. Usar `addEventListener` desde JS para mantener la separación HTML/JS y facilitar el testing.

### 7. Evitar `this.event` en `selectValue`

```js
// ❌ Actual — this.event es legacy y no funciona en strict mode
const selectValue = () => {
    if (editingSet) {
        this.event.target.select();
    }
}

// ✅ Propuesto
const selectValue = (e) => {
    if (editingSet) {
        e.target.select();
    }
}
```

### 8. Unificar la lógica de expansión de rangos

`getCardsColor` y `getCardsRarity` comparten la misma lógica de expandir rangos tipo `"1-5"` a índices individuales. Extraer a una función genérica:

```js
const expandRanges = (mapping) => {
    const result = [];
    Object.entries(mapping).forEach(([value, ids]) => {
        ids.forEach(id => {
            if (typeof id === 'string') {
                const [start, end] = id.split('-').map(Number);
                for (let i = start; i <= end; i++) result[i] = value;
            } else {
                result[id] = value;
            }
        });
    });
    return result;
};
```

### 9. Usar template literals consistentemente

En `views.js` se usa concatenación con `+` para construir clases CSS:

```js
// ❌
setLists.classList.add('view--' + list);

// ✅
setLists.classList.add(`view--${list}`);
```

---

## 🏗️ Arquitectura

### 10. Migrar a módulos ES

Actualmente se cargan 10+ scripts con `<script>` globales. Usar `type="module"` e `import`/`export` eliminaría la dependencia del orden de carga y las variables globales (`collection`, `cardmarket`, `editingSet`, etc.).

### 11. Separar datos de presentación

`index.js` mezcla lógica de negocio (gestión de colección/localStorage) con generación de DOM. Separar en:

- `collection.js` — Solo gestiona el estado (CRUD sobre localStorage).
- `renderer.js` — Solo dibuja el DOM a partir del estado.

### 12. Sistema de versiones para migraciones

En `updates.js` ya existe el TODO. Implementar un `dataVersion` en localStorage y un array de migraciones secuenciales:

```js
const CURRENT_VERSION = 5;
const migrations = [
    { version: 1, fn: () => { /* LM01 -> LM */ } },
    { version: 2, fn: () => { /* migrateReprints */ } },
    // ...
];

const runMigrations = () => {
    let version = parseInt(localStorage.getItem('dataVersion') || '0');
    for (const m of migrations) {
        if (version < m.version) {
            m.fn();
            version = m.version;
        }
    }
    localStorage.setItem('dataVersion', String(CURRENT_VERSION));
};
```

### 13. Crear una clase `Card`

Como indica el TODO en `index.js`, pasar a un modelo orientado a objetos para las cartas simplificaría mucho la lógica:

```js
class Card {
    constructor({ setId, cardId, slug, url, status, bought, rarity }) { ... }
    getImageUrl() { ... }
    toHTML() { ... }
    updateStatus(status, price) { ... }
}
```

### 14. Centralizar constantes

Los mapas de estado (`0=falta, 1=obtenida, -1=reservada...`) se repiten en `modal.js` y `filters.js` con formatos distintos. Centralizar en un único archivo de constantes.

### 15. Separar los datos de sets en JSON

Los archivos `data_*.js` son scripts que declaran variables globales. Si fueran archivos `.json`, podrían cargarse dinámicamente (fetch o import) y serían más fáciles de validar, generar automáticamente y versionar.

---

## 🎨 UX/UI

### 16. Feedback visual al guardar

Cuando se pulsa "Guardar", no hay confirmación visual. Un toast/snackbar temporal ("Colección guardada ✓") daría confianza al usuario.

### 17. Confirmación antes de cancelar edición

Si el usuario ha hecho cambios y pulsa "Cancelar", se pierden sin aviso. Un `confirm()` simple evitaría pérdidas accidentales.

### 18. Diseño responsive

No hay media queries significativas fuera del modal. En móvil, la barra de filtros, botones de sets y la tabla se ven apretados. Considerar:

- Layout colapsable para filtros en pantallas pequeñas.
- Botones de sets en scroll horizontal.
- Vista grid como default en móvil.

### 19. Accesibilidad

- `<html lang="en">` debería ser `lang="es"` ya que la UI está en español.
- Los botones `<` y `>` de navegación de sets no tienen texto accesible (solo `title`), añadir `aria-label`.
- Los radio buttons del modal usan solo iconos SVG sin texto visible; asegurar que los `title` en los `<label>` sean suficientes o añadir `aria-label`.
- Añadir `role="dialog"` y `aria-modal="true"` a los modales.
- Gestionar el foco al abrir/cerrar modales (focus trap).

### 20. Atajos de teclado en el modal

- Cerrar con `Escape`.
- Confirmar con `Enter`.
- Navegar entre estados con flechas izquierda/derecha.

### 21. Indicador de progreso de colección

Una barra o porcentaje por set (ej. "BT15: 87/112 — 78%") sería muy útil para ver de un vistazo cuánto falta. Podría mostrarse en los botones de set o como tooltip.

### 22. Tema oscuro

Dado que es una app de coleccionismo que se usa mucho tiempo, un dark mode reduciría fatiga visual. Se puede implementar con CSS custom properties y un toggle.

### 23. Mejorar la vista grid

Actualmente la vista grid solo oculta columnas de la tabla. Podría ser un layout CSS Grid real con las imágenes de cartas más grandes y con indicadores de estado superpuestos (badges).

### 24. Indicadores visuales en botones de set

Mostrar en cada botón de set un indicador de completitud (ej. un punto verde si está completo, amarillo si está en progreso, rojo si no se ha empezado).

### 25. Mejorar la impresión

El CSS de impresión es muy básico. Podría incluir:

- Resumen de colección por set.
- Lista de cartas que faltan.
- Totales de gasto por set.

### 26. Swipe en móvil para navegar entre sets

En dispositivos táctiles, permitir deslizar izquierda/derecha para cambiar de set, similar a la navegación con los botones `<` y `>`.

---

## ⚡ Rendimiento

### 27. Carga diferida de sets (lazy rendering)

Actualmente se generan TODAS las tablas de TODOS los sets al cargar la página. Con 20+ sets y cientos de cartas cada uno, el DOM inicial es enorme. Generar las tablas solo cuando el usuario selecciona un set.

### 28. Debounce en filtros

Si el usuario cambia filtros rápidamente, cada cambio ejecuta `filterCards()` que recorre todo el DOM. Un debounce de ~150ms evitaría trabajo innecesario.

### 29. Reducir el tamaño de localStorage

Como indica el TODO existente, no almacenar cartas con estado por defecto (`{status: 0, bought: 0}`) reduciría significativamente el JSON almacenado. Solo guardar las cartas que el usuario ha modificado.

### 30. Usar `DocumentFragment` para inserciones masivas

En el bucle principal de `sets.forEach`, cada `setLists.appendChild(tableSet)` causa un reflow. Acumular en un `DocumentFragment` y hacer un solo append al final.

### 31. Optimizar `filterCards`

`filterCards` limpia y re-aplica todos los filtros cada vez. Podría mantener un estado de filtros activos y solo recalcular lo que cambió. Además, usar `requestAnimationFrame` para agrupar cambios de DOM.

### 32. Considerar virtualización para "todas las colecciones"

Cuando se muestra "todas las colecciones" a la vez, el DOM puede tener miles de filas. Una librería de virtualización (o implementación propia) renderizaría solo las filas visibles.

---

## 🔒 Robustez y datos

### 33. Importar colección desde JSON

Hay exportación pero no importación. Si el usuario cambia de navegador o borra localStorage, pierde todo. Un botón "Importar colección" complementaría al de descarga.

### 34. Validación de datos importados

Si se implementa importación, validar la estructura del JSON antes de escribir en localStorage para evitar corrupción de datos.

### 35. Manejo de errores en `getImageUrl`

Si la URL no coincide con ningún patrón conocido, cae al `else` con `digimonFandom` por defecto, lo cual puede generar URLs rotas silenciosamente. Añadir un log de warning o un fallback visual.

### 36. Backup automático en localStorage

Guardar una copia de seguridad periódica (ej. `collection_backup`) con timestamp. Si la colección principal se corrompe, poder restaurar desde el backup.

### 37. Detectar y avisar sobre límite de localStorage

localStorage tiene un límite de ~5-10MB. Con una colección grande y muchos datos de Cardmarket, podría alcanzarse. Detectar el tamaño actual y avisar al usuario cuando se acerque al límite.

### 38. Proteger contra pérdida de datos al editar

Actualmente, si el usuario cierra el navegador sin pulsar "Guardar", pierde los cambios de la sesión de edición. Considerar auto-guardado o guardar en cada `modalOk`.

### 39. Sanitizar URLs de Cardmarket

El campo `cardmarketUrl` acepta cualquier URL. Validar que sea una URL de `cardmarket.com` para evitar inyección de contenido malicioso vía `data-cardmarketurl`.

---

## 🧪 Calidad y testing

### 40. Añadir un linter (ESLint)

No hay configuración de linter. ESLint ayudaría a detectar problemas como el uso de `var`, variables no declaradas, etc.

### 41. Añadir tests unitarios

Las funciones puras como `getCardsColor`, `getCardsRarity`, `expandRanges` (si se extrae) son candidatas perfectas para tests unitarios con un framework ligero como Vitest.

### 42. Validar la integridad de los datos de sets

Crear un script que valide que todos los archivos `data_*.js` tienen la estructura correcta: campos obligatorios, rangos de cartas coherentes, URLs válidas, etc.

### 43. Añadir JSDoc a las funciones principales

Algunas funciones ya tienen comentarios, pero la mayoría no. JSDoc mejoraría la documentación y el autocompletado en el IDE.

---

## 📦 Build y tooling

### 44. Migrar de Gulp a un bundler moderno

Gulp solo se usa para compilar SASS. Un bundler como Vite o esbuild podría:

- Compilar SASS.
- Hacer bundle de los módulos JS.
- Minificar CSS y JS para producción.
- Hot reload en desarrollo.
- Tree-shaking para eliminar código muerto.

### 45. Minificar CSS y JS para producción

Actualmente el CSS compilado no está minificado (el `style.css` generado tiene ~1200 líneas). Añadir un paso de minificación reduciría el tamaño de carga.

### 46. Añadir un `favicon.ico`

No hay favicon definido en el HTML. Añadir uno con el logo de la app o un icono de Digimon.

### 47. Generar source maps

Para facilitar el debugging en producción, generar source maps del CSS compilado.

---

## 🌐 SEO y PWA

### 48. Convertir en PWA (Progressive Web App)

Ya existe un `manifest.json` básico. Completarlo y añadir un Service Worker permitiría:

- Uso offline (los datos ya están en localStorage).
- Instalación como app nativa en móvil.
- Caché de imágenes de cartas para carga más rápida.

El `manifest.json` actual solo tiene `name` y `permissions`. Completar con:

```json
{
    "name": "DTCG List",
    "short_name": "DTCG",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#4285f4",
    "icons": [...]
}
```

### 49. Añadir meta tags

```html
<meta name="description" content="Gestiona tu colección de Digimon TCG">
<meta name="theme-color" content="#4285f4">
<link rel="manifest" href="manifest.json">
```

---

## 💡 Funcionalidades nuevas

### 50. Búsqueda por nombre de carta

Actualmente solo se puede filtrar por set, color, estado y rareza. Buscar por nombre (ej. "Omnimon") sería muy práctico. Requeriría añadir el nombre de cada carta a los datos o al DOM.

### 51. Estadísticas de colección

Un panel de estadísticas con:

- Total de cartas obtenidas vs total existente.
- Gasto total y por set.
- Distribución por estado (gráfico de tarta).
- Evolución del gasto en el tiempo (usando el historial de precios de Cardmarket).
- Set más completo / menos completo.

### 52. Historial de precios de Cardmarket

Ya se almacena un array de precios en `cardmarket[set][id][slug].price`. Mostrar un mini-gráfico de evolución de precio al hacer hover o en el modal de visualización.

### 53. Lista de deseos / wishlist

Permitir marcar cartas como "deseadas" para generar una lista de compra rápida con enlaces a Cardmarket.

### 54. Compartir colección

Generar un enlace o código que permita compartir la colección (o una vista de solo lectura) con otros coleccionistas. Podría ser un JSON codificado en base64 en la URL o un servicio externo.

### 55. Comparar colecciones

Permitir importar la colección de otro usuario y ver qué cartas tiene uno que le faltan al otro (y viceversa), útil para intercambios.

### 56. Notificaciones de nuevos sets

Cuando se añade un nuevo set a los datos, mostrar un badge o notificación al usuario indicando que hay contenido nuevo.

### 57. Modo "deck builder" ligero

Permitir seleccionar cartas de la colección para armar un deck de 50 cartas, con validación de reglas básicas (máximo 4 copias, etc.).

### 58. Integración con la API de Cardmarket

En lugar de introducir manualmente URLs y precios, consultar la API de Cardmarket para obtener precios mínimos automáticamente (si la API lo permite).

### 59. Soporte multi-idioma

La UI mezcla español e inglés. Implementar un sistema de i18n básico con un objeto de traducciones permitiría soportar ambos idiomas completamente.

### 60. Ordenación de cartas en la tabla

Permitir ordenar las filas por: número, estado, precio de compra, precio de Cardmarket, rareza, etc.

### 61. Filtro combinado avanzado

Permitir combinar filtros con operadores AND/OR. Por ejemplo: "Cartas que me faltan Y son Super Rare Y del color rojo".

### 62. Resumen de gasto por sesión de edición

Al pulsar "Guardar", mostrar un resumen de los cambios realizados: cuántas cartas se marcaron, cuánto se gastó en total en esa sesión.

### 63. Soporte para tokens

Algunos sets incluyen tokens (como se indica en los TODOs de `data_2025.js`). Añadir soporte para mostrarlos y trackearlos.

### 64. Caché de imágenes con fallback

Si una imagen de carta no carga (404), mostrar un placeholder genérico en lugar de una imagen rota. Actualmente no hay manejo de errores de carga de imágenes.

```js
img.onerror = () => { img.src = noCardURL; };
```

### 65. Listado de sleeves

Añadir las fundas (sleeves) como producto gestionable dentro de la sección Products, con el mismo sistema de estados y tracking que los sobres.

### 66. Listado de memory gauges

Añadir los contadores de memoria (memory gauges) como producto gestionable dentro de la sección Products.

### 67. Listado de cajas

Añadir las cajas (booster boxes, starter boxes, etc.) como producto gestionable dentro de la sección Products.

### 68. Filtrar cartas por datos de Cardmarket

Nuevos filtros basados en los datos de Cardmarket almacenados:

- Con / sin URL de Cardmarket.
- Con / sin precio mínimo registrado.

Útil para identificar cartas que aún no se han vinculado a Cardmarket o que no tienen precio actualizado.

### 69. Conteo de imágenes por origen

Herramienta o vista que muestre cuántas imágenes de cartas provienen de cada base de URL (bandaitcgplus, digimoncard, fandom, etc.). Útil para mantenimiento y para detectar dependencias de fuentes externas.

### 70. Filtrado por edición de Cardmarket

Añadir un nuevo campo en los datos de set para indicar la edición con la que Cardmarket clasifica el producto. Permitiría filtrar cartas según la edición de Cardmarket, facilitando la búsqueda y vinculación de precios.

### 71. Tracking de mazos (fase 1)

Permitir registrar mazos como un listado de cartas (identificador + cantidad) para llevar un control de qué cartas están en uso en qué mazo. Esto evita el descontrol entre lo que no se encuentra en el álbum y lo que aparece en los listados. Incluir alguna distinción visual en las cartas que están asignadas a un mazo.

En una segunda fase, esto podría evolucionar hacia un deck builder completo con validación de reglas (máximo 4 copias, 50 cartas, etc.).

### 72. Marcar cartas baneadas, limitadas o con límite de 50

Añadir soporte en los datos de sets para indicar el estado de regulación de cada carta:

- Baneada (no se puede usar en torneo).
- Limitada (máximo 1 copia en el deck).
- Límite de 50 (se pueden llevar hasta 50 copias).

Mostrar esta información visualmente en la tabla y/o en el modal de la carta.

### 73. Nuevo color de fondo para playset >4

Actualmente el input de cantidad usa verde (`--four-cards`) para 4 o más copias. Añadir un color diferenciado (azul) cuando la cantidad supera las 4 copias, para distinguir visualmente entre "playset completo" y "exceso de copias".

---

## Prioridad sugerida

| Prioridad | Items |
|-----------|-------|
| 🔴 Alta | 1, 5, 7, 19, 33, 38, 64 |
| 🟠 Media | 2, 3, 4, 8, 10, 12, 16, 17, 18, 20, 27, 29, 39, 40, 68, 73 |
| 🟡 Baja | 6, 9, 11, 13, 14, 15, 21-26, 28, 30-32, 34-37, 41-67, 69-72 |
