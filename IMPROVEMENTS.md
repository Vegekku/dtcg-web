# Sugerencias de mejora — DTCG Web Collection

## Prioridad sugerida

| Prioridad | Items |
|-----------|-------|
| 🔴 Alta | [1](#item-1), [5](#item-5), [7](#item-7), [19](#item-19), [33](#item-33), [38](#item-38), [64](#item-64) |
| 🟠 Media | [2](#item-2), [3](#item-3), [4](#item-4), [8](#item-8), [10](#item-10), [12](#item-12), [16](#item-16), [17](#item-17), [18](#item-18), [20](#item-20), [27](#item-27), [29](#item-29), [39](#item-39), [40](#item-40), [68](#item-68), [73](#item-73) |
| 🟡 Baja | [6](#item-6), [9](#item-9), [11](#item-11), [13](#item-13), [14](#item-14), [15](#item-15), [21](#item-21)–[26](#item-26), [28](#item-28), [30](#item-30)–[32](#item-32), [34](#item-34)–[37](#item-37), [41](#item-41)–[67](#item-67), [69](#item-69)–[72](#item-72), [74](#item-74), [75](#item-75) |

---

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

<a id="item-1"></a>

### 1. Eliminar `var` y usar `const`/`let` <sup>[↑](#prioridad-sugerida)</sup>

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

<a id="item-2"></a>

### 2. Simplificar `getImageUrl` con un mapa de URLs base <sup>[↑](#prioridad-sugerida)</sup>

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

<a id="item-3"></a>

### 3. Reducir duplicación en `drawAlternatives` <sup>[↑](#prioridad-sugerida)</sup>

La lógica de "si no existe la carta, crearla" y "si hay override, recalcular URL" se repite en 3-4 sitios. Extraer funciones auxiliares:

- `ensureCardExists(setId, cardId, slug)` — Inicializa la carta en `collection` si no existe.
- `resolveCardUrl(setElement, url, setId, cardId, parallel)` — Resuelve la URL final teniendo en cuenta overrides.

<a id="item-4"></a>

### 4. Reducir duplicación en `modalOk` <sup>[↑](#prioridad-sugerida)</sup>

La lógica de guardar el precio de Cardmarket se repite casi idéntica para `card` y `pack`. Extraer a una función:

```js
const updateCardmarketPrice = (target, price) => {
    target.price ??= [];
    if (target.price.length === 0 || target.price.slice(-1)[0] !== price) {
        target.price.push(price);
    }
};
```

<a id="item-5"></a>

### 5. Eliminar `innerHTML +=` para inyectar imágenes <sup>[↑](#prioridad-sugerida)</sup>

Cada vez que se hace `innerHTML +=` en `card_list`, el navegador re-parsea todo el HTML existente de esa celda, destruyendo event listeners y forzando re-renders innecesarios. Usar `insertAdjacentHTML('beforeend', ...)` o crear elementos con `document.createElement`.

<a id="item-6"></a>

### 6. Eliminar `onclick` inline en HTML <sup>[↑](#prioridad-sugerida)</sup>

Hay muchos `onclick="editSet()"`, `onclick="modalClose(this)"`, etc. en `index.html`. Usar `addEventListener` desde JS para mantener la separación HTML/JS y facilitar el testing.

<a id="item-7"></a>

### 7. Evitar `this.event` en `selectValue` <sup>[↑](#prioridad-sugerida)</sup>

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

<a id="item-8"></a>

### 8. Unificar la lógica de expansión de rangos <sup>[↑](#prioridad-sugerida)</sup>

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

<a id="item-9"></a>

### 9. Usar template literals consistentemente <sup>[↑](#prioridad-sugerida)</sup>

En `views.js` se usa concatenación con `+` para construir clases CSS:

```js
// ❌
setLists.classList.add('view--' + list);

// ✅
setLists.classList.add(`view--${list}`);
```

---

## 🏗️ Arquitectura

<a id="item-10"></a>

### 10. Migrar a módulos ES <sup>[↑](#prioridad-sugerida)</sup>

Actualmente se cargan 10+ scripts con `<script>` globales. Usar `type="module"` e `import`/`export` eliminaría la dependencia del orden de carga y las variables globales (`collection`, `cardmarket`, `editingSet`, etc.).

<a id="item-11"></a>

### 11. Separar datos de presentación <sup>[↑](#prioridad-sugerida)</sup>

`index.js` mezcla lógica de negocio (gestión de colección/localStorage) con generación de DOM. Separar en:

- `collection.js` — Solo gestiona el estado (CRUD sobre localStorage).
- `renderer.js` — Solo dibuja el DOM a partir del estado.

<a id="item-12"></a>

### 12. Sistema de versiones para migraciones <sup>[↑](#prioridad-sugerida)</sup>

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

<a id="item-13"></a>

### 13. Crear una clase `Card` <sup>[↑](#prioridad-sugerida)</sup>

Como indica el TODO en `index.js`, pasar a un modelo orientado a objetos para las cartas simplificaría mucho la lógica:

```js
class Card {
    constructor({ setId, cardId, slug, url, status, bought, rarity }) { ... }
    getImageUrl() { ... }
    toHTML() { ... }
    updateStatus(status, price) { ... }
}
```

<a id="item-14"></a>

### 14. Centralizar constantes <sup>[↑](#prioridad-sugerida)</sup>

Los mapas de estado (`0=falta, 1=obtenida, -1=reservada...`) se repiten en `modal.js` y `filters.js` con formatos distintos. Centralizar en un único archivo de constantes.

<a id="item-15"></a>

### 15. Separar los datos de sets en JSON <sup>[↑](#prioridad-sugerida)</sup>

Los archivos `data_*.js` son scripts que declaran variables globales. Si fueran archivos `.json`, podrían cargarse dinámicamente (fetch o import) y serían más fáciles de validar, generar automáticamente y versionar.

---

## 🎨 UX/UI

<a id="item-16"></a>

### 16. Feedback visual al guardar <sup>[↑](#prioridad-sugerida)</sup>

Cuando se pulsa "Guardar", no hay confirmación visual. Un toast/snackbar temporal ("Colección guardada ✓") daría confianza al usuario.

<a id="item-17"></a>

### 17. Confirmación antes de cancelar edición <sup>[↑](#prioridad-sugerida)</sup>

Si el usuario ha hecho cambios y pulsa "Cancelar", se pierden sin aviso. Un `confirm()` simple evitaría pérdidas accidentales.

<a id="item-18"></a>

### 18. Diseño responsive <sup>[↑](#prioridad-sugerida)</sup>

No hay media queries significativas fuera del modal. En móvil, la barra de filtros, botones de sets y la tabla se ven apretados. Considerar:

- Layout colapsable para filtros en pantallas pequeñas.
- Botones de sets en scroll horizontal.
- Vista grid como default en móvil.

<a id="item-19"></a>

### 19. Accesibilidad <sup>[↑](#prioridad-sugerida)</sup>

- `<html lang="en">` debería ser `lang="es"` ya que la UI está en español.
- Los botones `<` y `>` de navegación de sets no tienen texto accesible (solo `title`), añadir `aria-label`.
- Los radio buttons del modal usan solo iconos SVG sin texto visible; asegurar que los `title` en los `<label>` sean suficientes o añadir `aria-label`.
- Añadir `role="dialog"` y `aria-modal="true"` a los modales.
- Gestionar el foco al abrir/cerrar modales (focus trap).

<a id="item-20"></a>

### 20. Atajos de teclado en el modal <sup>[↑](#prioridad-sugerida)</sup>

- Cerrar con `Escape`.
- Confirmar con `Enter`.
- Navegar entre estados con flechas izquierda/derecha.

<a id="item-21"></a>

### 21. Indicador de progreso de colección <sup>[↑](#prioridad-sugerida)</sup>

Una barra o porcentaje por set (ej. "BT15: 87/112 — 78%") sería muy útil para ver de un vistazo cuánto falta. Podría mostrarse en los botones de set o como tooltip.

<a id="item-22"></a>

### 22. Tema oscuro <sup>[↑](#prioridad-sugerida)</sup>

Dado que es una app de coleccionismo que se usa mucho tiempo, un dark mode reduciría fatiga visual. Se puede implementar con CSS custom properties y un toggle.

<a id="item-23"></a>

### 23. Mejorar la vista grid <sup>[↑](#prioridad-sugerida)</sup>

Actualmente la vista grid solo oculta columnas de la tabla. Podría ser un layout CSS Grid real con las imágenes de cartas más grandes y con indicadores de estado superpuestos (badges).

<a id="item-24"></a>

### 24. Indicadores visuales en botones de set <sup>[↑](#prioridad-sugerida)</sup>

Mostrar en cada botón de set un indicador de completitud (ej. un punto verde si está completo, amarillo si está en progreso, rojo si no se ha empezado).

<a id="item-25"></a>

### 25. Mejorar la impresión <sup>[↑](#prioridad-sugerida)</sup>

El CSS de impresión es muy básico. Podría incluir:

- Resumen de colección por set.
- Lista de cartas que faltan.
- Totales de gasto por set.

<a id="item-26"></a>

### 26. Swipe en móvil para navegar entre sets <sup>[↑](#prioridad-sugerida)</sup>

En dispositivos táctiles, permitir deslizar izquierda/derecha para cambiar de set, similar a la navegación con los botones `<` y `>`.

---

## ⚡ Rendimiento

<a id="item-27"></a>

### 27. Carga diferida de sets (lazy rendering) <sup>[↑](#prioridad-sugerida)</sup>

Actualmente se generan TODAS las tablas de TODOS los sets al cargar la página. Con 20+ sets y cientos de cartas cada uno, el DOM inicial es enorme. Generar las tablas solo cuando el usuario selecciona un set.

<a id="item-28"></a>

### 28. Debounce en filtros <sup>[↑](#prioridad-sugerida)</sup>

Si el usuario cambia filtros rápidamente, cada cambio ejecuta `filterCards()` que recorre todo el DOM. Un debounce de ~150ms evitaría trabajo innecesario.

<a id="item-29"></a>

### 29. Reducir el tamaño de localStorage <sup>[↑](#prioridad-sugerida)</sup>

Como indica el TODO existente, no almacenar cartas con estado por defecto (`{status: 0, bought: 0}`) reduciría significativamente el JSON almacenado. Solo guardar las cartas que el usuario ha modificado.

<a id="item-30"></a>

### 30. Usar `DocumentFragment` para inserciones masivas <sup>[↑](#prioridad-sugerida)</sup>

En el bucle principal de `sets.forEach`, cada `setLists.appendChild(tableSet)` causa un reflow. Acumular en un `DocumentFragment` y hacer un solo append al final.

<a id="item-31"></a>

### 31. Optimizar `filterCards` <sup>[↑](#prioridad-sugerida)</sup>

`filterCards` limpia y re-aplica todos los filtros cada vez. Podría mantener un estado de filtros activos y solo recalcular lo que cambió. Además, usar `requestAnimationFrame` para agrupar cambios de DOM.

<a id="item-32"></a>

### 32. Considerar virtualización para "todas las colecciones" <sup>[↑](#prioridad-sugerida)</sup>

Cuando se muestra "todas las colecciones" a la vez, el DOM puede tener miles de filas. Una librería de virtualización (o implementación propia) renderizaría solo las filas visibles.

---

## 🔒 Robustez y datos

<a id="item-33"></a>

### 33. Importar colección desde JSON <sup>[↑](#prioridad-sugerida)</sup>

Hay exportación pero no importación. Si el usuario cambia de navegador o borra localStorage, pierde todo. Un botón "Importar colección" complementaría al de descarga.

<a id="item-34"></a>

### 34. Validación de datos importados <sup>[↑](#prioridad-sugerida)</sup>

Si se implementa importación, validar la estructura del JSON antes de escribir en localStorage para evitar corrupción de datos.

<a id="item-35"></a>

### 35. Manejo de errores en `getImageUrl` <sup>[↑](#prioridad-sugerida)</sup>

Si la URL no coincide con ningún patrón conocido, cae al `else` con `digimonFandom` por defecto, lo cual puede generar URLs rotas silenciosamente. Añadir un log de warning o un fallback visual.

<a id="item-36"></a>

### 36. Backup automático en localStorage <sup>[↑](#prioridad-sugerida)</sup>

Guardar una copia de seguridad periódica (ej. `collection_backup`) con timestamp. Si la colección principal se corrompe, poder restaurar desde el backup.

<a id="item-37"></a>

### 37. Detectar y avisar sobre límite de localStorage <sup>[↑](#prioridad-sugerida)</sup>

localStorage tiene un límite de ~5-10MB. Con una colección grande y muchos datos de Cardmarket, podría alcanzarse. Detectar el tamaño actual y avisar al usuario cuando se acerque al límite.

<a id="item-38"></a>

### 38. Proteger contra pérdida de datos al editar <sup>[↑](#prioridad-sugerida)</sup>

Actualmente, si el usuario cierra el navegador sin pulsar "Guardar", pierde los cambios de la sesión de edición. Considerar auto-guardado o guardar en cada `modalOk`.

<a id="item-39"></a>

### 39. Sanitizar URLs de Cardmarket <sup>[↑](#prioridad-sugerida)</sup>

El campo `cardmarketUrl` acepta cualquier URL. Validar que sea una URL de `cardmarket.com` para evitar inyección de contenido malicioso vía `data-cardmarketurl`.

---

## 🧪 Calidad y testing

<a id="item-40"></a>

### 40. Añadir un linter (ESLint) <sup>[↑](#prioridad-sugerida)</sup>

No hay configuración de linter. ESLint ayudaría a detectar problemas como el uso de `var`, variables no declaradas, etc.

<a id="item-41"></a>

### 41. Añadir tests unitarios <sup>[↑](#prioridad-sugerida)</sup>

Las funciones puras como `getCardsColor`, `getCardsRarity`, `expandRanges` (si se extrae) son candidatas perfectas para tests unitarios con un framework ligero como Vitest.

<a id="item-42"></a>

### 42. Validar la integridad de los datos de sets <sup>[↑](#prioridad-sugerida)</sup>

Crear un script que valide que todos los archivos `data_*.js` tienen la estructura correcta: campos obligatorios, rangos de cartas coherentes, URLs válidas, etc.

<a id="item-43"></a>

### 43. Añadir JSDoc a las funciones principales <sup>[↑](#prioridad-sugerida)</sup>

Algunas funciones ya tienen comentarios, pero la mayoría no. JSDoc mejoraría la documentación y el autocompletado en el IDE.

---

## 📦 Build y tooling

<a id="item-44"></a>

### 44. Migrar de Gulp a un bundler moderno <sup>[↑](#prioridad-sugerida)</sup>

Gulp solo se usa para compilar SASS. Un bundler como Vite o esbuild podría:

- Compilar SASS.
- Hacer bundle de los módulos JS.
- Minificar CSS y JS para producción.
- Hot reload en desarrollo.
- Tree-shaking para eliminar código muerto.

<a id="item-45"></a>

### 45. Minificar CSS y JS para producción <sup>[↑](#prioridad-sugerida)</sup>

Actualmente el CSS compilado no está minificado (el `style.css` generado tiene ~1200 líneas). Añadir un paso de minificación reduciría el tamaño de carga.

<a id="item-46"></a>

### 46. Añadir un `favicon.ico` <sup>[↑](#prioridad-sugerida)</sup>

No hay favicon definido en el HTML. Añadir uno con el logo de la app o un icono de Digimon.

<a id="item-47"></a>

### 47. Generar source maps <sup>[↑](#prioridad-sugerida)</sup>

Para facilitar el debugging en producción, generar source maps del CSS compilado.

---

## 🌐 SEO y PWA

<a id="item-48"></a>

### 48. Convertir en PWA (Progressive Web App) <sup>[↑](#prioridad-sugerida)</sup>

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

<a id="item-49"></a>

### 49. Añadir meta tags <sup>[↑](#prioridad-sugerida)</sup>

```html
<meta name="description" content="Gestiona tu colección de Digimon TCG">
<meta name="theme-color" content="#4285f4">
<link rel="manifest" href="manifest.json">
```

---

## 💡 Funcionalidades nuevas

<a id="item-50"></a>

### 50. Búsqueda por nombre de carta <sup>[↑](#prioridad-sugerida)</sup>

Actualmente solo se puede filtrar por set, color, estado y rareza. Buscar por nombre (ej. "Omnimon") sería muy práctico. Requeriría añadir el nombre de cada carta a los datos o al DOM.

<a id="item-51"></a>

### 51. Estadísticas de colección <sup>[↑](#prioridad-sugerida)</sup>

Un panel de estadísticas con:

- Total de cartas obtenidas vs total existente.
- Gasto total y por set.
- Distribución por estado (gráfico de tarta).
- Evolución del gasto en el tiempo (usando el historial de precios de Cardmarket).
- Set más completo / menos completo.

<a id="item-52"></a>

### 52. Historial de precios de Cardmarket <sup>[↑](#prioridad-sugerida)</sup>

Ya se almacena un array de precios en `cardmarket[set][id][slug].price`. Mostrar un mini-gráfico de evolución de precio al hacer hover o en el modal de visualización.

<a id="item-53"></a>

### 53. Lista de deseos / wishlist <sup>[↑](#prioridad-sugerida)</sup>

Permitir marcar cartas como "deseadas" para generar una lista de compra rápida con enlaces a Cardmarket.

<a id="item-54"></a>

### 54. Compartir colección <sup>[↑](#prioridad-sugerida)</sup>

Generar un enlace o código que permita compartir la colección (o una vista de solo lectura) con otros coleccionistas. Podría ser un JSON codificado en base64 en la URL o un servicio externo.

<a id="item-55"></a>

### 55. Comparar colecciones <sup>[↑](#prioridad-sugerida)</sup>

Permitir importar la colección de otro usuario y ver qué cartas tiene uno que le faltan al otro (y viceversa), útil para intercambios.

<a id="item-56"></a>

### 56. Notificaciones de nuevos sets <sup>[↑](#prioridad-sugerida)</sup>

Cuando se añade un nuevo set a los datos, mostrar un badge o notificación al usuario indicando que hay contenido nuevo.

<a id="item-57"></a>

### 57. Modo "deck builder" ligero <sup>[↑](#prioridad-sugerida)</sup>

Permitir seleccionar cartas de la colección para armar un deck de 50 cartas, con validación de reglas básicas (máximo 4 copias, etc.).

<a id="item-58"></a>

### 58. Integración con la API de Cardmarket <sup>[↑](#prioridad-sugerida)</sup>

En lugar de introducir manualmente URLs y precios, consultar la API de Cardmarket para obtener precios mínimos automáticamente (si la API lo permite).

<a id="item-59"></a>

### 59. Soporte multi-idioma <sup>[↑](#prioridad-sugerida)</sup>

La UI mezcla español e inglés. Implementar un sistema de i18n básico con un objeto de traducciones permitiría soportar ambos idiomas completamente.

<a id="item-60"></a>

### 60. Ordenación de cartas en la tabla <sup>[↑](#prioridad-sugerida)</sup>

Permitir ordenar las filas por: número, estado, precio de compra, precio de Cardmarket, rareza, etc.

<a id="item-61"></a>

### 61. Filtro combinado avanzado <sup>[↑](#prioridad-sugerida)</sup>

Permitir combinar filtros con operadores AND/OR. Por ejemplo: "Cartas que me faltan Y son Super Rare Y del color rojo".

<a id="item-62"></a>

### 62. Resumen de gasto por sesión de edición <sup>[↑](#prioridad-sugerida)</sup>

Al pulsar "Guardar", mostrar un resumen de los cambios realizados: cuántas cartas se marcaron, cuánto se gastó en total en esa sesión.

<a id="item-63"></a>

### 63. Soporte para tokens <sup>[↑](#prioridad-sugerida)</sup>

Algunos sets incluyen tokens (como se indica en los TODOs de `data_2025.js`). Añadir soporte para mostrarlos y trackearlos.

<a id="item-64"></a>

### 64. Caché de imágenes con fallback <sup>[↑](#prioridad-sugerida)</sup>

Si una imagen de carta no carga (404), mostrar un placeholder genérico en lugar de una imagen rota. Actualmente no hay manejo de errores de carga de imágenes.

```js
img.onerror = () => { img.src = noCardURL; };
```

<a id="item-65"></a>

### 65. Listado de sleeves <sup>[↑](#prioridad-sugerida)</sup>

Añadir las fundas (sleeves) como producto gestionable dentro de la sección Products, con el mismo sistema de estados y tracking que los sobres.

<a id="item-66"></a>

### 66. Listado de memory gauges <sup>[↑](#prioridad-sugerida)</sup>

Añadir los contadores de memoria (memory gauges) como producto gestionable dentro de la sección Products.

<a id="item-67"></a>

### 67. Listado de cajas <sup>[↑](#prioridad-sugerida)</sup>

Añadir las cajas (booster boxes, starter boxes, etc.) como producto gestionable dentro de la sección Products.

<a id="item-68"></a>

### 68. Filtrar cartas por datos de Cardmarket <sup>[↑](#prioridad-sugerida)</sup>

Nuevos filtros basados en los datos de Cardmarket almacenados:

- Con / sin URL de Cardmarket.
- Con / sin precio mínimo registrado.

Útil para identificar cartas que aún no se han vinculado a Cardmarket o que no tienen precio actualizado.

<a id="item-69"></a>

### 69. Conteo de imágenes por origen <sup>[↑](#prioridad-sugerida)</sup>

Herramienta o vista que muestre cuántas imágenes de cartas provienen de cada base de URL (bandaitcgplus, digimoncard, fandom, etc.). Útil para mantenimiento y para detectar dependencias de fuentes externas.

<a id="item-70"></a>

### 70. Filtrado por edición de Cardmarket <sup>[↑](#prioridad-sugerida)</sup>

Añadir un nuevo campo en los datos de set para indicar la edición con la que Cardmarket clasifica el producto. Permitiría filtrar cartas según la edición de Cardmarket, facilitando la búsqueda y vinculación de precios.

<a id="item-71"></a>

### 71. Tracking de mazos (fase 1) <sup>[↑](#prioridad-sugerida)</sup>

Permitir registrar mazos como un listado de cartas (identificador + cantidad) para llevar un control de qué cartas están en uso en qué mazo. Esto evita el descontrol entre lo que no se encuentra en el álbum y lo que aparece en los listados. Incluir alguna distinción visual en las cartas que están asignadas a un mazo.

En una segunda fase, esto podría evolucionar hacia un deck builder completo con validación de reglas (máximo 4 copias, 50 cartas, etc.).

<a id="item-72"></a>

### 72. Marcar cartas baneadas, limitadas o con límite de 50 <sup>[↑](#prioridad-sugerida)</sup>

Añadir soporte en los datos de sets para indicar el estado de regulación de cada carta:

- Baneada (no se puede usar en torneo).
- Limitada (máximo 1 copia en el deck).
- Límite de 50 (se pueden llevar hasta 50 copias).

Mostrar esta información visualmente en la tabla y/o en el modal de la carta.

<a id="item-73"></a>

### 73. Nuevo color de fondo para playset >4 <sup>[↑](#prioridad-sugerida)</sup>

Actualmente el input de cantidad usa verde (`--four-cards`) para 4 o más copias. Añadir un color diferenciado (azul) cuando la cantidad supera las 4 copias, para distinguir visualmente entre "playset completo" y "exceso de copias".

> **Nota:** El playset se calcula sobre la suma total de copias de todos los bloques. En modo visualización se muestra un único contador con la suma total y un desglose por bloque (tags). En modo edición se muestran los inputs individuales por bloque.



<a id="item-74"></a>

### 74. Soporte de prefijos de set en el mapa de bloques <sup>[↑](#prioridad-sugerida)</sup>

Cuando `block` es un mapa (bloque → cartas), permitir que los valores del array sean prefijos de set (ej. `"BT1"`, `"BT6"`) además de IDs completos de carta (ej. `"BT1-084"`). Esto simplifica la definición de bloques en sets con `id: null` que mezclan cartas de distintos sets.

Función de resolución acordada (busca primero por ID exacto, luego por prefijo de set):

```js
function getCardBlock(cardId, block) {
    if (typeof block === 'number') return block;
    const setPrefix = cardId.replace(/-\d+$/, '');
    for (const [b, entries] of Object.entries(block)) {
        if (entries.includes(cardId) || entries.includes(setPrefix)) return Number(b);
    }
    return null;
}
```

No separar en dos pasadas (IDs exactos vs prefijos): el coste es insignificante con arrays pequeños y una sola pasada es más legible.

Cuando un set mezcla cartas de distintos bloques y se quiere usar un prefijo general para el bloque mayoritario, colocar el prefijo en el bloque más alto y los IDs específicos en los bloques inferiores. Así los IDs exactos se encuentran antes en la iteración y el prefijo actúa como fallback. El orden inverso (prefijo en bloque bajo) requeriría dos pasadas.

> **Contexto:** Reprint = cualquier reimpresión posterior a la original (incluye alternativas y cambios de bloque). Se mantiene tracking por bloque para posible rotación futura. En la UI, el modo visualización muestra la suma total con desglose por bloque; el modo edición muestra inputs individuales por bloque.

<a id="item-75"></a>

### 75. `amount` como mapa por bloque <sup>[↑](#prioridad-sugerida)</sup>

Cambiar la estructura de `collection[setId][cardId].amount` de número a mapa por bloque, eliminando el campo `reprint`. Ver issue [#37](https://github.com/Vegekku/dtcg-web/issues/37).

```js
// Antes
{ amount: 4, reprint: { "0": 2, "1": 3 }, cards: { ... } }

// Después
{ amount: { "0": 4, "1": 2, "2": 3 }, cards: { ... } }
```

La suma total se calcula en runtime: `Object.values(amount).reduce((a, b) => a + b, 0)`. Cambio MAJOR — requiere migración de datos en localStorage.

