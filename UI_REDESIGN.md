# Propuestas de rediseño UI — DTCG Web Collection

Propuestas ordenadas de menor a mayor esfuerzo. Cada nivel se puede implementar de forma independiente.

## Prioridad sugerida

| Prioridad | Propuestas | Motivo |
|-----------|-----------|--------|
| 🔴 Alta | [2.1](#prop-21), [2.2](#prop-22), [2.3](#prop-23), [2.7](#prop-27), [2.8](#prop-28) | Resuelven directamente los pain points: búsqueda flexible, filtros combinables, edición multi-set, cantidad compacta en visualización, filtro sin playset real |
| 🟠 Media | [1.1](#prop-11)–[1.5](#prop-15), [2.4](#prop-24), [2.6](#prop-26), [3.2](#prop-32), [3.3](#prop-33), [3.6](#prop-36) | Mejoran la percepción visual, velocidad de edición y cantidad en grid |
| 🟡 Baja | [2.5](#prop-25), [2.9](#prop-29), [3.1](#prop-31), [3.4](#prop-34)–[3.5](#prop-35), [4.x](#nivel-4-redise%C3%B1o-de-layout-completo) | Mejoras de calidad de vida y rediseño mayor, para cuando las prioridades altas estén resueltas |

---

## Índice

- [Nivel 1: Ajustes rápidos (CSS + HTML mínimo)](#nivel-1-ajustes-rápidos)
- [Nivel 2: Mejoras funcionales (JS moderado)](#nivel-2-mejoras-funcionales)
- [Nivel 3: Rediseño parcial de componentes](#nivel-3-rediseño-parcial-de-componentes)
- [Nivel 4: Rediseño de layout completo](#nivel-4-rediseño-de-layout-completo)

---

## Nivel 1: Ajustes rápidos

Cambios cosméticos que mejoran la percepción visual sin tocar la estructura.

<a id="prop-11"></a>

### 1.1 Tipografía y espaciado <sup>[↑](#prioridad-sugerida)</sup>

La fuente actual (Arial/Helvetica) y la falta de espaciado entre secciones contribuyen al aspecto "tosco". Cambios mínimos:

- Usar una fuente con más personalidad pero igual de legible: `Inter`, `Nunito` o `Rubik` (Google Fonts, una línea de import).
- Añadir `gap`/`margin` consistente entre la barra de acordeones, los filtros y el contenido.
- Aumentar ligeramente el `padding` de los botones de set y los filtros.

<a id="prop-12"></a>

### 1.2 Suavizar bordes y sombras <sup>[↑](#prioridad-sugerida)</sup>

- Los bordes de la tabla son `1px solid black`. Cambiar a un gris suave (`#e0e0e0`) y añadir `border-radius` sutil a la tabla.
- Añadir una sombra ligera (`box-shadow`) al contenedor de contenido para dar profundidad.
- Los botones de acordeón no tienen fondo visible en estado inactivo. Darles un fondo sutil (`#f5f5f5`) para que se perciban como elementos interactivos.

<a id="prop-13"></a>

### 1.3 Paleta de colores más cohesiva <sup>[↑](#prioridad-sugerida)</sup>

Los colores de estado (verde, azul, teal, amarillo, rojo) están bien elegidos pero el resto de la UI no tiene una paleta definida. Definir:

- Un color primario para acciones principales (ya usas `--blue-card` en el botón confirmar).
- Un gris neutro para fondos y bordes.
- Reducir el contraste del footer (actualmente texto negro sobre blanco, se puede suavizar).

<a id="prop-14"></a>

### 1.4 Mejorar los botones de set <sup>[↑](#prioridad-sugerida)</sup>

Actualmente son botones planos sin mucha identidad. Mejoras rápidas:

- Fondo con el color predominante del set (o un gradiente sutil).
- Indicar visualmente cuál está activo (no solo con la clase CSS, sino con un estilo más marcado: borde inferior, fondo más oscuro).
- Tooltip más informativo: además del nombre, mostrar "BT21 — 45/102" (progreso).

<a id="prop-15"></a>

### 1.5 Hover y transiciones en las cartas <sup>[↑](#prioridad-sugerida)</sup>

Las miniaturas de cartas no tienen feedback visual al pasar el ratón. Añadir:

- `transform: scale(1.05)` con `transition` al hacer hover.
- `cursor: pointer` (ya lo tiene) + un ligero `box-shadow` al hover.

---

## Nivel 2: Mejoras funcionales

Cambios que mejoran la usabilidad basándose en los pain points descritos.

<a id="prop-21"></a>

### 2.1 Búsqueda de set flexible (fuzzy search) <sup>[↑](#prioridad-sugerida)</sup>

El buscador actual requiere coincidencia exacta con el datalist. Reemplazar por una búsqueda que:

- Filtre mientras se escribe (no solo al seleccionar del datalist).
- Busque en el nombre completo del set, no solo en el valor exacto del option.
- Permita búsquedas parciales: escribir "reprint" mostraría todos los sets cuyo nombre contenga "reprint".
- Mostrar los resultados como un dropdown custom en lugar del datalist nativo (que es limitado y feo).

<a id="prop-22"></a>

### 2.2 Filtros combinables (multi-select) <sup>[↑](#prioridad-sugerida)</sup>

El filtro de estado actual es un select simple. Reemplazar por un sistema que permita selección múltiple:

- Seleccionar múltiples estados a la vez: "Reservada + Comprada".
- Seleccionar múltiples rarezas: "SR + SEC".

**Decisión tomada:** Reemplazar los `<select>` actuales por checkboxes. Permite selección múltiple de forma visual y directa, sin interacciones extra. Ocupa más espacio horizontal, pero encaja bien si se combina con el panel de filtros colapsable (propuesta 3.4).

Opciones descartadas:
- **Select con checkboxes dentro** (dropdown) — Más compacto pero requiere JS adicional y oculta las opciones activas.
- **Multi-select nativo** (`<select multiple>`) — UX pobre (Ctrl+click), inconsistente entre navegadores.

<a id="prop-23"></a>

### 2.3 Edición multi-set sin cambiar de vista <sup>[↑](#prioridad-sugerida)</sup>

Cuando compras cartas de varios sets, actualmente tienes que navegar entre sets uno a uno. Opciones:

- **Barra de búsqueda rápida de carta**: Un input donde escribes "BT21-029" y te abre directamente el modal de esa carta, sin necesidad de navegar al set.
- **Modo "edición rápida"**: Al activar edición, mostrar un input de búsqueda prominente arriba que permita saltar entre cartas de cualquier set.

<a id="prop-24"></a>

### 2.4 Contador de resultados en filtros <sup>[↑](#prioridad-sugerida)</sup>

Cuando aplicas filtros, no sabes cuántas cartas coinciden. Mostrar un contador:

```
Filtros: Estado[Comprada] Color[Rojo] → 23 cartas encontradas
```

Relacionado: ocultar automáticamente las tablas de sets que no tengan resultados tras aplicar filtros, para no mostrar tablas vacías.

<a id="prop-25"></a>

### 2.5 Persistir filtros y vista en la URL <sup>[↑](#prioridad-sugerida)</sup>

Actualmente solo el set activo se guarda en el hash de la URL. Guardar también los filtros activos y el tipo de vista como query params:

```
#BT21?status=bought_it&color=red&view=grid
```

Esto permite compartir enlaces con filtros aplicados y que al recargar la página se mantengan.

<a id="prop-26"></a>

### 2.6 Mejorar el flujo de edición de cantidad <sup>[↑](#prioridad-sugerida)</sup>

Los inputs de cantidad requieren hacer click, escribir y salir del campo. Para edición rápida de varias cartas seguidas, añadir botones `+` / `-` a los lados del input (visibles solo en modo edición):

```
[-] [ 3 ] [+]
```

<a id="prop-27"></a>

### 2.7 Columna de cantidad compacta en modo visualización <sup>[↑](#prioridad-sugerida)</sup>

El problema: la columna `card_amount` tiene un ancho uniforme para todas las filas (comportamiento de `<table>`). Las filas con inputs de reprint ensanchan la columna, dejando un hueco en las filas que solo tienen el input principal.

El flujo de edición actual (inputs directamente editables sin modal ni despliegue extra) es bueno y no debe cambiar. El problema es solo en modo visualización, donde los inputs ocupan demasiado espacio para mostrar un número del 0 al 4.

Propuesta principal: **en modo visualización, reemplazar todos los inputs (principal + reprints) por una representación compacta**. Al activar edición, se muestran los inputs reales.

**Decisión tomada:** En modo visualización se muestra un único contador con la **suma total** de copias de todos los bloques, acompañado de un desglose por bloque a modo de "tags" dentro del contador. En modo edición se muestran los inputs individuales por bloque.

Esto combina las opciones A y D: el número principal es la suma total (como D), pero el desglose por bloque es visible de un vistazo sin interacción (como A), usando tags compactos.

```
┌─────────────┐
│ 4           │  ← carta sin reprints: solo el total
└─────────────┘

┌─────────────────────────┐
│ 6  [●4] [●2]           │  ← carta con reprints: total + tags por bloque
└─────────────────────────┘
```

> **Nota:** El diseño exacto de los tags (icono de bloque, color, forma) está pendiente de definir. La idea es que sean lo suficientemente compactos para no ensanchar la columna pero informativos de un vistazo.

> **Parcialmente implementado:** En modo edición ya se muestran inputs individuales por bloque con badge de número de bloque (hexágono). La parte de visualización compacta (suma total + tags en modo no edición) está pendiente.

<a id="prop-28"></a>

### 2.8 Filtro "Sin playset" basado en inputs <sup>[↑](#prioridad-sugerida)</sup>

El filtro actual (`no_pull`) oculta filas donde `data-pull="true"` (cantidad principal ≥ 4). Esto solo evalúa el input de cantidad global de la carta, sin tener en cuenta los inputs individuales de cada variante (original, reprints por bloque).

Comportamiento deseado: mostrar la fila completa (todos los inputs + todas las imágenes) siempre que **al menos un input** de esa carta no tenga playset. El filtro opera a nivel de fila, no de input individual.

> **Nota:** Dado que en modo visualización se muestra la suma total de todos los bloques, el filtro "sin playset" debe evaluar cada bloque individualmente (no la suma). Una carta con 6 copias totales (4 del bloque original + 2 de un reprint) no tiene playset en el bloque de reprint, por lo que debe mostrarse.

Esto implica:

- Evaluar todos los inputs `.amount-card` de cada fila (cada uno corresponde a un bloque).
- Si todos los inputs de la fila tienen valor ≥ 4, la fila se oculta.
- Si al menos uno tiene valor < 4, la fila se muestra entera.

Evolución futura (por fases):

1. **Filtrar por playset específico**: Permitir seleccionar qué tipo de playset evaluar (original, reprint bloque N, etc.).
2. **Mostrar solo inputs sin playset**: Dentro de una fila visible, resaltar u ocultar los inputs que ya tienen playset, mostrando solo los que faltan.
3. **Filtrar imágenes por bloque**: Mostrar solo las imágenes de las cartas que pertenezcan al input sin playset, usando el bloque (original vs reprint) para vincular cada imagen con su input correspondiente.

<a id="prop-29"></a>

### 2.9 Panel de filtros colapsable con chips <sup>[↑](#prioridad-sugerida)</sup>

Rediseñar el panel de filtros para mostrar solo los filtros activos como "chips" (etiquetas con botón de cerrar). El resto de filtros se ocultan tras un desplegable "Más filtros" o "Búsqueda avanzada".

Ventajas:
- Menos ruido visual cuando no se filtran muchas dimensiones
- Los filtros activos son más evidentes de un vistazo
- Escala mejor si se añaden más filtros en el futuro

Ejemplo:

```
[Estado: Comprada ✕] [Color: Rojo ✕]  [+ Más filtros]
```

---

## Nivel 3: Rediseño parcial de componentes

Rediseño visual de partes específicas de la UI manteniendo la estructura general.

<a id="prop-31"></a>

### 3.1 Rediseño de la barra de navegación <sup>[↑](#prioridad-sugerida)</sup>

Reemplazar los acordeones por una barra de navegación con tabs:

```
┌─────────┬──────────┬────────┬────────┬──────────┐
│Boosters │ Starters │ Extras │ Others │ Products │
└─────────┴──────────┴────────┴────────┴──────────┘
  1  2  3  4  5  6  7  8  9  10 ... 21  22  23
```

- Los tabs de categoría siempre visibles (no acordeón que colapsa).
- Los botones de set en scroll horizontal debajo del tab activo.
- El tab activo con un indicador visual claro (borde inferior coloreado).

<a id="prop-32"></a>

### 3.2 Rediseño del modal de edición <sup>[↑](#prioridad-sugerida)</sup>

El modal actual funciona pero se puede mejorar:

- **Navegación entre cartas dentro del modal**: Flechas izquierda/derecha (o swipe) para ir a la carta anterior/siguiente sin cerrar el modal. Esto acelera mucho la edición de varias cartas seguidas.
- **Preview del estado actual**: Mostrar el estado actual de la carta antes de editarlo (actualmente hay que mirar qué radio está seleccionado).
- **Historial de precios visible**: Si hay historial de Cardmarket, mostrar los últimos 3-5 precios como sparkline o lista.
- **Atajos de teclado**: `1-5` para seleccionar estado, `Enter` para confirmar, `Escape` para cerrar, `←`/`→` para navegar.

<a id="prop-33"></a>

### 3.3 Rediseño de la vista grid <sup>[↑](#prioridad-sugerida)</sup>

La vista grid actual simplemente oculta columnas de la tabla. Rediseñarla como un grid CSS real:

- Cartas más grandes que en la vista tabla.
- Badge de estado superpuesto en la esquina (icono pequeño: ✓, €, 🖨, 🔒).
- Badge de cantidad superpuesto en la otra esquina (resuelve el problema de no ver la cantidad al filtrar por "Sin playset" en grid).
- Agrupación visual por rareza o color (separadores).

<a id="prop-36"></a>

### 3.6 Vista álbum <sup>[↑](#prioridad-sugerida)</sup>

Nueva vista que muestra las cartas en formato álbum de colección:

- Layout 3×3 (9 cartas por página) o 3×4 (12 cartas por página), configurable.
- Cartas a tamaño mayor que en tabla/grid.
- Pensada para visualización y consulta, no para edición.
- Ideal para impresión.

<a id="prop-34"></a>

### 3.4 Panel de filtros colapsable <sup>[↑](#prioridad-sugerida)</sup>

En lugar de una línea de filtros siempre visible, un panel que se despliega:

- Botón "Filtros" con badge indicando cuántos filtros activos.
- Al expandir, muestra todos los filtros con más espacio.
- Permite añadir los filtros combinables (nivel 2.2) sin saturar la cabecera.
- En móvil, se abre como panel lateral (drawer).

<a id="prop-35"></a>

### 3.5 Barra de acciones contextual <sup>[↑](#prioridad-sugerida)</sup>

Cuando estás en modo edición, reemplazar la barra actual (Editar/Guardar/Cancelar) por una barra fija en la parte inferior de la pantalla (sticky bottom bar):

```
┌──────────────────────────────────────────────────┐
│  Editando BT21  │  3 cambios  │ [Cancelar] [Guardar] │
└──────────────────────────────────────────────────┘
```

- Muestra qué set estás editando.
- Contador de cambios realizados.
- Siempre visible aunque hagas scroll.

---

## Nivel 4: Rediseño de layout completo

Repensar la estructura de la página desde cero.

<a id="prop-41"></a>

### 4.1 Layout con sidebar <sup>[↑](#prioridad-sugerida)</sup>

Reemplazar los acordeones + botones por un sidebar lateral fijo:

```
┌──────────┬───────────────────────────────────────────┐
│          │  Filtros + controles                      │
│ Boosters │  ─────────────────────────────────────    │
│  BT1     │                                           │
│  BT2     │  ┌─────┬─────┬──────────────────────┐    │
│  ...     │  │ ID  │ Qty │ Cards                │    │
│  BT23    │  ├─────┼─────┼──────────────────────┤    │
│          │  │ 001 │ [4] │ [img][img][img]      │    │
│ Starters │  │ 002 │ [0] │ [img][img]           │    │
│  ST7     │  │ ... │     │                      │    │
│  ...     │  └─────┴─────┴──────────────────────┘    │
│          │                                           │
│ Extras   │  footer                                   │
│ Others   │                                           │
│ Products │                                           │
└──────────┴───────────────────────────────────────────┘
```

- Sidebar colapsable en móvil (hamburger menu).
- Categorías como secciones expandibles dentro del sidebar.
- El set activo resaltado en el sidebar.
- Más espacio horizontal para la tabla de cartas.

<a id="prop-42"></a>

### 4.2 Dashboard con resumen <sup>[↑](#prioridad-sugerida)</sup>

Añadir una vista "Home" que se muestre al abrir la app (antes de seleccionar un set):

- Resumen general: total de cartas, porcentaje de completitud, gasto total.
- Top 5 sets más completos / menos completos.
- Últimas cartas editadas.
- Acceso rápido a los sets recientes.
- Gráfico simple de distribución por estado (barras CSS, sin librería).

<a id="prop-43"></a>

### 4.3 Vista de carta expandida <sup>[↑](#prioridad-sugerida)</sup>

Al hacer click en una carta (en modo no edición), en lugar de un modal, expandir la fila de la tabla para mostrar la información inline:

```
├─────┼─────┼──────────────────────────────────────┤
│ 029 │ [2] │ [img][img][img]                      │
│(sr) │     │                                      │
│     │     │ ┌──────────────────────────────────┐ │
│     │     │ │  [imagen grande]                 │ │
│     │     │ │  Obtenida | Cardmarket: 3,20€    │ │
│     │     │ └──────────────────────────────────┘ │
├─────┼─────┼──────────────────────────────────────┤
```

Esto evita el cambio de contexto del modal para consultas rápidas.

<a id="prop-44"></a>

### 4.4 Modo "lista de compra" <sup>[↑](#prioridad-sugerida)</sup>

Una vista dedicada que muestra solo las cartas con estado "Reservada" o "Falta" que el usuario quiere comprar:

- Agrupadas por set o por vendedor (si se añade ese dato).
- Con precio de Cardmarket y enlace directo.
- Total estimado de la compra.
- Checkbox para marcar como comprada directamente desde esta vista.

<a id="prop-45"></a>

### 4.5 Tema visual completo <sup>[↑](#prioridad-sugerida)</sup>

Definir un sistema de diseño mínimo pero cohesivo:

- Paleta de 5-6 colores (primario, secundario, éxito, peligro, neutros).
- Escala tipográfica (3-4 tamaños con jerarquía clara).
- Espaciado consistente (múltiplos de 4px u 8px).
- Componentes reutilizables: botón, input, select, badge, card, modal.
- Dark mode como variante de la misma paleta.

