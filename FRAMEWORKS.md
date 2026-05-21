# Análisis de componentización y frameworks — DTCG Web Collection

## Índice

- [Estado actual del proyecto](#estado-actual-del-proyecto)
- [¿Componentizar? Sí, pero no necesariamente con un framework](#componentizar-sí-pero-no-necesariamente-con-un-framework)
- [Opción 1: Componentizar en vanilla JS (recomendada ahora)](#opción-1-componentizar-en-vanilla-js-recomendada-ahora)
- [Opción 2: Migrar a un framework (futuro)](#opción-2-migrar-a-un-framework-futuro)
- [Comparativa de frameworks](#comparativa-de-frameworks)
- [Cuándo reconsiderar la migración](#cuándo-reconsiderar-la-migración)
- [Conclusión](#conclusión)

---

## Estado actual del proyecto

El proyecto tiene una ventaja enorme: **cero dependencias de runtime**. Es HTML + JS vanilla + SASS. Se sirve con un `http-server` y los datos viven en localStorage.

Eso es muy valioso:

- ✅ Simplicidad — No hay build complejo ni abstracciones innecesarias.
- ✅ Velocidad de carga — Sin bundle de framework (~0KB de JS de terceros).
- ✅ Sin lock-in — No estás atado a ningún ecosistema.
- ✅ Fácil de desplegar — Cualquier servidor estático sirve.

---

## ¿Componentizar? Sí, pero no necesariamente con un framework

Se puede obtener el 80% de los beneficios de un framework sin migrar. La clave está en aplicar patrones de componentización sobre vanilla JS.

---

## Opción 1: Componentizar en vanilla JS (recomendada ahora)

### 1.1 Módulos ES

El primer paso y el más impactante. Pasar de scripts globales a `import`/`export`:

```
js/
├── data/                  # Sin cambios
├── store/
│   ├── collection.js      # CRUD sobre localStorage (collection)
│   └── cardmarket.js      # CRUD sobre localStorage (cardmarket)
├── components/
│   ├── card-item.js       # Genera el HTML de una carta
│   ├── card-modal.js      # Lógica del modal de edición/visualización
│   ├── set-table.js       # Genera la tabla de un set
│   ├── set-buttons.js     # Botones de navegación de sets
│   ├── filters.js         # Barra de filtros
│   └── toast.js           # Notificaciones tipo snackbar
├── utils/
│   ├── url-resolver.js    # getImageUrl y lógica de URLs
│   ├── range-expander.js  # Expandir rangos "1-5" a [1,2,3,4,5]
│   └── constants.js       # Estados, colores, rarezas
├── app.js                 # Punto de entrada (importa todo)
└── sets.js                # Concatena datos (sin cambios)
```

```html
<!-- index.html — un solo script -->
<script type="module" src="js/app.js"></script>
```

### 1.2 Web Components (opcional)

Encapsular piezas reutilizables como Custom Elements:

```js
// components/card-item.js
class CardItem extends HTMLElement {
    static observedAttributes = ['status', 'bought'];

    connectedCallback() {
        this.render();
        this.addEventListener('click', () => this.openModal());
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const status = this.getAttribute('status');
        // ...
    }
}

customElements.define('card-item', CardItem);
```

```html
<!-- Uso en el DOM -->
<card-item
    card-id="BT15-042"
    slug="bt15"
    status="1"
    bought="3.50"
    src="https://...">
</card-item>
```

**Ventajas:**

- Encapsulación nativa del navegador.
- Sin dependencias.
- Compatible con cualquier framework futuro.

**Desventajas:**

- Más verboso que un framework.
- Sin reactividad automática (hay que gestionar manualmente los re-renders).

### 1.3 Store reactivo simple

Un patrón pub/sub ligero para gestionar el estado sin framework:

```js
// store/collection.js
const listeners = new Set();

const store = {
    data: JSON.parse(localStorage.getItem('collection') || '{}'),

    get(setId, cardId) {
        return this.data[setId]?.[cardId];
    },

    update(setId, cardId, slug, changes) {
        Object.assign(this.data[setId][cardId].cards[slug], changes);
        this.notify({ setId, cardId, slug, changes });
    },

    save() {
        localStorage.setItem('collection', JSON.stringify(this.data));
    },

    subscribe(fn) {
        listeners.add(fn);
        return () => listeners.delete(fn);
    },

    notify(event) {
        listeners.forEach(fn => fn(event));
    }
};

export default store;
```

Esto permite que cualquier componente reaccione a cambios sin acoplamiento directo.

### 1.4 Hoja de ruta para componentizar en vanilla

| Paso | Descripción | Impacto |
|------|-------------|---------|
| 1 | Migrar a módulos ES (`import`/`export`) | 🔴 Alto |
| 2 | Extraer `constants.js` y `url-resolver.js` | 🟠 Medio |
| 3 | Crear `store/collection.js` y `store/cardmarket.js` | 🟠 Medio |
| 4 | Separar la generación de DOM en `components/` | 🟠 Medio |
| 5 | (Opcional) Migrar componentes clave a Web Components | 🟡 Bajo |

---

## Opción 2: Migrar a un framework (futuro)

### Cuándo tendría sentido

Solo si el proyecto evoluciona hacia alguno de estos escenarios:

- **Cuentas de usuario** — Sincronización entre dispositivos, login.
- **Compartir colecciones** — URLs públicas con vista de solo lectura.
- **API de Cardmarket** — Consulta automática de precios.
- **Colaboración** — Comparar colecciones entre usuarios, proponer intercambios.

### Framework recomendado: Vue 3 + Vite

Si llegara el momento de migrar, **Vue 3** es la opción más natural para este proyecto:

- **Templates HTML** — La filosofía de Vue (templates declarativos) encaja con cómo ya está estructurado el proyecto. No hay que aprender JSX.
- **Reactividad declarativa** — `ref()`, `computed()`, `watch()` reemplazan toda la manipulación manual del DOM.
- **Componentes `.vue`** — Template + script + style en un archivo, mapea directamente a la separación actual.
- **Vite** — Resuelve SASS, HMR, build y minificación de golpe (adiós Gulp).
- **Curva de aprendizaje** — Más suave desde vanilla JS que React o Angular.

#### Ejemplo de cómo se vería un componente

```vue
<!-- components/CardItem.vue -->
<template>
    <img
        loading="lazy"
        class="card"
        :src="url"
        :title="name"
        :alt="name"
        :data-status="card.status"
        @click="$emit('open', cardId)"
    />
</template>

<script setup>
defineProps({
    cardId: String,
    name: String,
    url: String,
    card: Object,
});

defineEmits(['open']);
</script>

<style scoped>
.card[data-status="1"] {
    padding-right: 7px;
    background-color: var(--correct-card);
}
</style>
```

---

## Comparativa de frameworks

| Criterio | Vanilla + Módulos | Vue 3 | React | Svelte | Angular |
|----------|:-:|:-:|:-:|:-:|:-:|
| Curva desde el código actual | ✅ Nula | ✅ Baja | 🟡 Media | ✅ Baja | 🔴 Alta |
| Peso del bundle | ✅ 0KB | 🟡 ~33KB | 🟡 ~40KB | ✅ ~5KB | 🔴 ~80KB+ |
| Reactividad | ❌ Manual | ✅ Nativa | ✅ Nativa | ✅ Nativa | ✅ Nativa |
| Ecosistema/plugins | ❌ Limitado | ✅ Amplio | ✅ Muy amplio | 🟡 Creciendo | ✅ Muy amplio |
| Complejidad de setup | ✅ Ninguna | 🟡 Vite | 🟡 Vite/CRA | 🟡 Vite | 🔴 CLI propio |
| SSR/SSG (si se necesita) | ❌ No | ✅ Nuxt | ✅ Next.js | ✅ SvelteKit | ✅ Angular Universal |
| Afinidad con el proyecto | ✅ Total | ✅ Alta | 🟡 Media | ✅ Alta | 🟡 Baja |

### ¿Por qué no React?

- JSX requiere un cambio de mentalidad respecto a templates HTML.
- El modelo de hooks y re-renders es más complejo para un proyecto de este tamaño.
- No aporta ventajas significativas sobre Vue para este caso de uso.

### ¿Por qué no Angular?

- Demasiado pesado y opinionado para una app de coleccionismo personal.
- TypeScript obligatorio, decoradores, inyección de dependencias... overhead innecesario aquí.

### ¿Por qué no Svelte?

- Sería una buena opción (bundle mínimo, sintaxis simple).
- Pero el ecosistema es más pequeño y la comunidad hispanohablante es reducida.
- Si el proyecto crece, Vue tiene más recursos y plugins disponibles.

---

## Cuándo reconsiderar la migración

Checklist para saber si ha llegado el momento:

- [ ] El código vanilla componentizado se vuelve difícil de mantener (>2000 líneas en un solo archivo).
- [ ] Necesitas routing real (múltiples páginas/vistas).
- [ ] Necesitas un backend con autenticación.
- [ ] Necesitas SSR para compartir colecciones con preview en redes sociales.
- [ ] La manipulación manual del DOM se convierte en el cuello de botella del desarrollo.
- [ ] Quieres contribuciones de otros desarrolladores (un framework estandariza patrones).

Si marcas 3+ de estos puntos, es momento de migrar.

---

## Conclusión

**Ahora:** Invertir en las mejoras del [IMPROVEMENTS.md](IMPROVEMENTS.md), especialmente en modularizar con ES modules y separar responsabilidades. Esto ya es componentizar, solo que sin framework.

**Futuro:** Si el proyecto crece hacia funcionalidades sociales (compartir, cuentas, API), migrar a **Vue 3 + Vite** sería la transición más natural y menos dolorosa desde el código actual.

La mejor migración es la que no necesitas hacer. Y ahora mismo, no la necesitas.
