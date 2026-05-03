# Propuestas de rediseño UI — DTCG Web Collection

Propuestas ordenadas de menor a mayor esfuerzo. Cada nivel se puede implementar de forma independiente.

## Índice

- [Nivel 1: Ajustes rápidos (CSS + HTML mínimo)](#nivel-1-ajustes-rápidos)
- [Nivel 2: Mejoras funcionales (JS moderado)](#nivel-2-mejoras-funcionales)
- [Nivel 3: Rediseño parcial de componentes](#nivel-3-rediseño-parcial-de-componentes)
- [Nivel 4: Rediseño de layout completo](#nivel-4-rediseño-de-layout-completo)

---

## Nivel 1: Ajustes rápidos

Cambios cosméticos que mejoran la percepción visual sin tocar la estructura.

### 1.1 Tipografía y espaciado

La fuente actual (Arial/Helvetica) y la falta de espaciado entre secciones contribuyen al aspecto "tosco". Cambios mínimos:

- Usar una fuente con más personalidad pero igual de legible: `Inter`, `Nunito` o `Rubik` (Google Fonts, una línea de import).
- Añadir `gap`/`margin` consistente entre la barra de acordeones, los filtros y el contenido.
- Aumentar ligeramente el `padding` de los botones de set y los filtros.

### 1.2 Suavizar bordes y sombras

- Los bordes de la tabla son `1px solid black`. Cambiar a un gris suave (`#e0e0e0`) y añadir `border-radius` sutil a la tabla.
- Añadir una sombra ligera (`box-shadow`) al contenedor de contenido para dar profundidad.
- Los botones de acordeón no tienen fondo visible en estado inactivo. Darles un fondo sutil (`#f5f5f5`) para que se perciban como elementos interactivos.

### 1.3 Paleta de colores más cohesiva

Los colores de estado (verde, azul, teal, amarillo, rojo) están bien elegidos pero el resto de la UI no tiene una paleta definida. Definir:

- Un color primario para acciones principales (ya usas `--blue-card` en el botón confirmar).
- Un gris neutro para fondos y bordes.
- Reducir el contraste del footer (actualmente texto negro sobre blanco, se puede suavizar).

### 1.4 Mejorar los botones de set

Actualmente son botones planos sin mucha identidad. Mejoras rápidas:

- Fondo con el color predominante del set (o un gradiente sutil).
- Indicar visualmente cuál está activo (no solo con la clase CSS, sino con un estilo más marcado: borde inferior, fondo más oscuro).
- Tooltip más informativo: además del nombre, mostrar "BT21 — 45/102" (progreso).

### 1.5 Hover y transiciones en las cartas

Las miniaturas de cartas no tienen feedback visual al pasar el ratón. Añadir:

- `transform: scale(1.05)` con `transition` al hacer hover.
- `cursor: pointer` (ya lo tiene) + un ligero `box-shadow` al hover.

---

## Nivel 2: Mejoras funcionales

Cambios que mejoran la usabilidad basándose en los pain points descritos.

### 2.1 Búsqueda de set flexible (fuzzy search)

El buscador actual requiere coincidencia exacta con el datalist. Reemplazar por una búsqueda que:

- Filtre mientras se escribe (no solo al seleccionar del datalist).
- Busque en el nombre completo del set, no solo en el valor exacto del option.
- Permita búsquedas parciales: escribir "reprint" mostraría todos los sets cuyo nombre contenga "reprint".
- Mostrar los resultados como un dropdown custom en lugar del datalist nativo (que es limitado y feo).

### 2.2 Filtros combinables (multi-select)

El filtro de estado actual es un select simple. Reemplazar por un sistema que permita selección múltiple:

- Seleccionar múltiples estados a la vez: "Reservada + Comprada".
- Seleccionar múltiples rarezas: "SR + SEC".

Opciones de implementación (a decidir):

- **Checkboxes directos** — Más visual, todo visible de un vistazo. Ocupa más espacio horizontal, encajaría bien si se implementa el panel de filtros colapsable (propuesta 3.4).
- **Select con checkboxes dentro** (dropdown con checkboxes) — Compacto como un select, pero al desplegarlo muestra checkboxes. Patrón habitual en apps modernas. Requiere algo más de JS.
- **Multi-select nativo** (`<select multiple>`) — Descartado: UX pobre (Ctrl+click), inconsistente entre navegadores.

### 2.3 Edición multi-set sin cambiar de vista

Cuando compras cartas de varios sets, actualmente tienes que navegar entre sets uno a uno. Opciones:

- **Barra de búsqueda rápida de carta**: Un input donde escribes "BT21-029" y te abre directamente el modal de esa carta, sin necesidad de navegar al set.
- **Modo "edición rápida"**: Al activar edición, mostrar un input de búsqueda prominente arriba que permita saltar entre cartas de cualquier set.

### 2.4 Contador de resultados en filtros

Cuando aplicas filtros, no sabes cuántas cartas coinciden. Mostrar un contador:

```
Filtros: Estado[Comprada] Color[Rojo] → 23 cartas encontradas
```

Relacionado: ocultar automáticamente las tablas de sets que no tengan resultados tras aplicar filtros, para no mostrar tablas vacías.

### 2.5 Persistir filtros y vista en la URL

Actualmente solo el set activo se guarda en el hash de la URL. Guardar también los filtros activos y el tipo de vista como query params:

```
#BT21?status=bought_it&color=red&view=grid
```

Esto permite compartir enlaces con filtros aplicados y que al recargar la página se mantengan.

### 2.6 Mejorar el flujo de edición de cantidad

Los inputs de cantidad requieren hacer click, escribir y salir del campo. Para edición rápida de varias cartas seguidas, añadir botones `+` / `-` a los lados del input (visibles solo en modo edición):

```
[-] [ 3 ] [+]
```

### 2.7 Columna de cantidad compacta en modo visualización

El problema: la columna `card_amount` tiene un ancho uniforme para todas las filas (comportamiento de `<table>`). Las filas con inputs de reprint ensanchan la columna, dejando un hueco en las filas que solo tienen el input principal.

El flujo de edición actual (inputs directamente editables sin modal ni despliegue extra) es bueno y no debe cambiar. El problema es solo en modo visualización, donde los inputs ocupan demasiado espacio para mostrar un número del 0 al 4.

Propuesta principal: **en modo visualización, reemplazar todos los inputs (principal + reprints) por una representación compacta**. Al activar edición, se muestran los inputs reales.

**Opción A — Números compactos con color de fondo (recomendada)**: Sustituir los inputs por bloques pequeños con el número y el color de fondo correspondiente (`--zero-cards`, `--one-cards`, etc.). Todas las cantidades de una carta se muestran en línea, ocupando una fracción del espacio actual.

```
┌───┐
│ 4 │        ← carta sin reprints
└───┘

┌───┬───┬───┐
│ 4 │ 2 │ 0 │  ← carta con reprints: original + bloque 2 + bloque 5
└───┴───┴───┘
```

De un vistazo se ve el estado de cada tipo. Las cartas sin reprints se ven igual de bien pero más compactas. Las cartas con reprints muestran toda la información sin ensanchar la columna para las demás filas.

**Opción B — Tooltip al hacer hover**: En modo visualización, mostrar solo el input principal compacto. Al pasar el ratón, un tooltip muestra el desglose: "Original: 4 | ST17 Reprint: 2 | RB01 Reprint: 0". Contra: requiere interacción, la información no es visible de un vistazo.

**Opción C — Mini barras de progreso**: Reemplazar los inputs por barras horizontales apiladas (tipo stacked bar) donde cada segmento representa un tipo (original + cada bloque de reprint). El ancho indica la cantidad (0-4). Contra: menos legible que un número directo, más complejo de implementar.

**Opción D — Indicador único con total**: Mostrar un solo número con la suma de todas las copias (original + reprints), con un indicador visual (punto, borde) que señale que hay reprints. Al hacer click o hover, se desglosa. Contra: se pierde el detalle por tipo a primera vista.

### 2.8 Filtro "Sin playset" basado en inputs

El filtro actual (`no_pull`) oculta filas donde `data-pull="true"` (cantidad principal ≥ 4). Esto solo evalúa el input de cantidad global de la carta, sin tener en cuenta los inputs individuales de cada variante (original, reprints por bloque).

Comportamiento deseado: mostrar la fila completa (todos los inputs + todas las imágenes) siempre que **al menos un input** de esa carta no tenga playset. El filtro opera a nivel de fila, no de input individual.

Esto implica:

- Evaluar el input principal (`amount-card`) y los inputs de reprint (`amount-card--reprint`) de cada fila.
- Si todos los inputs de la fila tienen valor ≥ 4, la fila se oculta.
- Si al menos uno tiene valor < 4, la fila se muestra entera.

Evolución futura (por fases):

1. **Filtrar por playset específico**: Permitir seleccionar qué tipo de playset evaluar (original, reprint bloque N, etc.).
2. **Mostrar solo inputs sin playset**: Dentro de una fila visible, resaltar u ocultar los inputs que ya tienen playset, mostrando solo los que faltan.
3. **Filtrar imágenes por bloque**: Mostrar solo las imágenes de las cartas que pertenezcan al input sin playset, usando el bloque (original vs reprint) para vincular cada imagen con su input correspondiente.

---

## Nivel 3: Rediseño parcial de componentes

Rediseño visual de partes específicas de la UI manteniendo la estructura general.

### 3.1 Rediseño de la barra de navegación

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

### 3.2 Rediseño del modal de edición

El modal actual funciona pero se puede mejorar:

- **Navegación entre cartas dentro del modal**: Flechas izquierda/derecha (o swipe) para ir a la carta anterior/siguiente sin cerrar el modal. Esto acelera mucho la edición de varias cartas seguidas.
- **Preview del estado actual**: Mostrar el estado actual de la carta antes de editarlo (actualmente hay que mirar qué radio está seleccionado).
- **Historial de precios visible**: Si hay historial de Cardmarket, mostrar los últimos 3-5 precios como sparkline o lista.
- **Atajos de teclado**: `1-5` para seleccionar estado, `Enter` para confirmar, `Escape` para cerrar, `←`/`→` para navegar.

### 3.3 Rediseño de la vista grid

La vista grid actual simplemente oculta columnas de la tabla. Rediseñarla como un grid CSS real:

- Cartas más grandes que en la vista tabla.
- Badge de estado superpuesto en la esquina (icono pequeño: ✓, €, 🖨, 🔒).
- Badge de cantidad superpuesto en la otra esquina (resuelve el problema de no ver la cantidad al filtrar por "Sin playset" en grid).
- Agrupación visual por rareza o color (separadores).

### 3.6 Vista álbum

Nueva vista que muestra las cartas en formato álbum de colección:

- Layout 3×3 (9 cartas por página) o 3×4 (12 cartas por página), configurable.
- Cartas a tamaño mayor que en tabla/grid.
- Pensada para visualización y consulta, no para edición.
- Ideal para impresión.

### 3.4 Panel de filtros colapsable

En lugar de una línea de filtros siempre visible, un panel que se despliega:

- Botón "Filtros" con badge indicando cuántos filtros activos.
- Al expandir, muestra todos los filtros con más espacio.
- Permite añadir los filtros combinables (nivel 2.2) sin saturar la cabecera.
- En móvil, se abre como panel lateral (drawer).

### 3.5 Barra de acciones contextual

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

### 4.1 Layout con sidebar

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

### 4.2 Dashboard con resumen

Añadir una vista "Home" que se muestre al abrir la app (antes de seleccionar un set):

- Resumen general: total de cartas, porcentaje de completitud, gasto total.
- Top 5 sets más completos / menos completos.
- Últimas cartas editadas.
- Acceso rápido a los sets recientes.
- Gráfico simple de distribución por estado (barras CSS, sin librería).

### 4.3 Vista de carta expandida

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

### 4.4 Modo "lista de compra"

Una vista dedicada que muestra solo las cartas con estado "Reservada" o "Falta" que el usuario quiere comprar:

- Agrupadas por set o por vendedor (si se añade ese dato).
- Con precio de Cardmarket y enlace directo.
- Total estimado de la compra.
- Checkbox para marcar como comprada directamente desde esta vista.

### 4.5 Tema visual completo

Definir un sistema de diseño mínimo pero cohesivo:

- Paleta de 5-6 colores (primario, secundario, éxito, peligro, neutros).
- Escala tipográfica (3-4 tamaños con jerarquía clara).
- Espaciado consistente (múltiplos de 4px u 8px).
- Componentes reutilizables: botón, input, select, badge, card, modal.
- Dark mode como variante de la misma paleta.

---

## Prioridad sugerida según el uso descrito

| Prioridad | Propuestas | Motivo |
|-----------|-----------|--------|
| 🔴 Alta | 2.1, 2.2, 2.3, 2.7, 2.8 | Resuelven directamente los pain points: búsqueda flexible, filtros combinables, edición multi-set, cantidad compacta en visualización, filtro sin playset real |
| 🟠 Media | 1.1-1.5, 2.4, 2.6, 3.2, 3.3, 3.6 | Mejoran la percepción visual, velocidad de edición y cantidad en grid |
| 🟡 Baja | 2.5, 3.1, 3.4-3.5, 4.x | Mejoras de calidad de vida y rediseño mayor, para cuando las prioridades altas estén resueltas |
