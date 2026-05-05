# Modelo de datos — DTCG Web Collection

Documentación del modelo de datos utilizado en los archivos `js/data/data_*.js` y en localStorage.

## Índice

- [Sets (datos estáticos)](#sets-datos-estáticos)
  - [Sets con ID (sets base)](#sets-con-id-sets-base)
  - [Sets sin ID (variantes)](#sets-sin-id-variantes)
  - [Campos comunes](#campos-comunes)
  - [Campos exclusivos de sets base](#campos-exclusivos-de-sets-base)
  - [Campos exclusivos de variantes](#campos-exclusivos-de-variantes)
- [Sistema de URLs e imágenes](#sistema-de-urls-e-imágenes)
  - [Placeholders en URLs](#placeholders-en-urls)
  - [Bases de URL](#bases-de-url)
  - [Override](#override)
  - [Parallel](#parallel)
- [Color](#color)
- [Rareza](#rareza)
- [Bloques y reprints](#bloques-y-reprints)
- [Slug y relación set-producto](#slug-y-relación-set-producto)
- [Productos](#productos)
- [Estados de carta](#estados-de-carta)
- [localStorage: collection](#localstorage-collection)
- [localStorage: cardmarket](#localstorage-cardmarket)
- [Decisiones de diseño](#decisiones-de-diseño)

---

## Sets (datos estáticos)

Todos los sets se definen como objetos en los archivos `js/data/data_*.js` y se concatenan en un único array `sets` en `js/sets.js`.

Existen dos tipos de sets según el valor de `id`:

### Sets con ID (sets base)

Representan un conjunto de cartas con identidad propia (ej. `"BT1"`, `"ST7"`, `"EX8"`). Generan una tabla HTML con todas sus cartas numeradas del 1 al `total`.

```js
{
    "id": "BT21",           // Identificador del set
    "block": 5,             // Bloque temporal
    "slug": "bt21",         // Identificador del producto/release
    "name": "Booster World Convergence [BT21]",
    "release": "April 2025",
    "total": 102,           // Número total de cartas
    "url": "bandaitcgplusURL/BT21/e_setID-cardID_d.png",
    "add_zero": 3,          // Padding de ceros en el ID (3 → "001", 2 → "01")
    "color": { ... },
    "rarity": { ... },
    "override": { ... },    // Opcional
    "pack": "https://...",  // Opcional: imagen del sobre
    "playmat": "https://...", // Opcional
    "info_url": "https://..."
}
```

### Sets sin ID (variantes)

Representan variantes de cartas existentes: arts alternativos, reprints, limited cards, special cards, box toppers, promos de eventos, etc. No generan tabla propia; sus cartas se inyectan en las filas de los sets base correspondientes.

```js
{
    "id": null,
    "slug": "bt21_alts",
    "name": "Booster World Convergence [BT21] - Alternatives",
    "release": "April 2025",
    "url": "bandaitcgplusURL/BT21/e_setID-cardIDp_dparallel.png",
    "cards": {              // Mapa de cardNumber → parallel
        "BT21-008": "",
        "BT21-029": "",
    },
    "rarity": { ... },      // Opcional
    "rarities": { ... },    // Opcional (cuando inyecta en múltiples sets)
    "reprint": true,         // Opcional
    "block": 5,              // Opcional (solo con reprint)
    "info_url": "https://..."
}
```

### Campos comunes

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` | `string \| null` | ID del set (`"BT1"`) o `null` para variantes |
| `slug` | `string` | Identificador del producto/release al que pertenece |
| `name` | `string` | Nombre completo del set o variante |
| `release` | `string \| null` | Fecha de lanzamiento |
| `url` | `string \| null` | Plantilla de URL para las imágenes. `null` indica que no se debe generar URL automáticamente: bien porque es un set base sin imágenes propias (ej. `P`, `BT1`), o bien porque las URLs vienen indicadas directamente como valores dentro de `cards` |
| `info_url` | `string \| null` | URL con información oficial del set |
| `rarity` | `string \| object` | Rareza de las cartas (ver [Rareza](#rareza)) |
| `pack` | `string \| string[]` | Opcional. URL(s) de imagen del sobre/producto |
| `playmat` | `string` | Opcional. URL de imagen del playmat |

### Campos exclusivos de sets base

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `total` | `number` | Número total de cartas en el set |
| `block` | `number` | Bloque temporal al que pertenece el set (ver [Bloques](#bloques-y-reprints)) |
| `add_zero` | `number` | Dígitos de padding para el ID de carta (2 → `"01"`, 3 → `"001"`) |
| `color` | `string \| object` | Color(es) de las cartas (ver [Color](#color)) |
| `override` | `object` | Opcional. URLs alternativas para cartas específicas (ver [Override](#override)) |

### Campos exclusivos de variantes

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `cards` | `object` | Mapa `{ "SET-ID": parallel }` de cartas incluidas (ver [Parallel](#parallel)) |
| `rarities` | `object` | Opcional. Rarezas por set cuando la variante inyecta en múltiples sets |
| `reprint` | `boolean` | Opcional. Indica que las cartas son reimpresas de otro bloque |
| `block` | `number` | Opcional. Bloque temporal al que pertenece el reprint (ver [Bloques](#bloques-y-reprints)) |

---

## Sistema de URLs e imágenes

### Placeholders en URLs

Las URLs de imágenes usan placeholders que se reemplazan dinámicamente:

| Placeholder | Se reemplaza por | Ejemplo |
|-------------|-----------------|---------|
| `setID` | ID del set | `BT21` |
| `cardID` | ID numérico de la carta (con padding) | `008` |
| `parallel` | Sufijo de variante paralela | `P1`, `_d`, `SP` |

Ejemplo: `"bandaitcgplusURL/BT21/e_setID-cardIDp_dparallel.png"` → `"https://files.bandai-tcg-plus.com/card_image/DG-EN/BT21/e_BT21-008p_d.png"`

### Bases de URL

Las URLs usan alias que se resuelven a URLs completas:

| Alias | URL real |
|-------|---------|
| `bandaitcgplusURL` | `https://files.bandai-tcg-plus.com/card_image/DG-EN` |
| `digimoncardURL` | `https://world.digimoncard.com/images/cardlist/card` |
| `digimoncardjpURL` | `https://digimoncard.com/images/cardlist/card` |
| `digimonCardDev` | `https://assets.cardlist.dev/images/communitycards` |
| `digimonFandom` | `https://static.wikia.nocookie.net/digimoncardgame/images` |
| `noCardURL` | `https://assets.cardlist.dev/other/2020_card_backstage_design.jpg` (placeholder) |

Si la URL no contiene ningún alias, se usa como URL absoluta directamente.

### Override

Permite especificar una URL alternativa para cartas puntuales cuya imagen no sigue el patrón general del set (típicamente erratas):

```js
"override": {
    "url": "bandaitcgplusURL/BT21/e_setID-cardID_d_errata.png",
    "cards": {
        "BT21-023": "",  // El valor puede ser un parallel alternativo o vacío
    }
}
```

### Parallel

En los sets con `id: null`, el campo `cards` mapea cada número de carta a su valor de parallel:

| Valor | Significado |
|-------|-------------|
| `""` | Sin sufijo parallel en la URL |
| `"P1"`, `"_d"`, `"SP"`, etc. | Sufijo que se inserta en el placeholder `parallel` de la URL |
| `["P1", "P2"]` | Múltiples variantes paralelas de la misma carta (ej. foil y no foil). Genera una imagen por cada elemento del array |

---

## Color

Define el color primario (y secundario/terciario) de cada carta. Se usa para el fondo visual de la celda de ID y para el filtro de color.

**Si es un `string`:** Todas las cartas del set tienen ese color.

```js
"color": "red"
```

**Si es un `object`:** Mapa de color → array de IDs de carta.

```js
"color": {
    "red": [1, 8, 10, 13, 65],
    "red-blue": [73],
    "blue": [2, 17, 18, 20],
    "yellow-purple": [62, 64],
}
```

Los IDs pueden ser números individuales o rangos como strings: `"30-32"` se expande a `[30, 31, 32]`.

Colores soportados: `red`, `blue`, `yellow`, `green`, `black`, `purple`, `white`. Los multicolor se separan con guión: `"red-blue"`, `"yellow-purple-black"`.

---

## Rareza

Define la rareza de cada carta. Funciona igual que el color.

**Si es un `string`:** Todas las cartas del set tienen esa rareza.

```js
"rarity": "p"  // Todas son promos
```

**Si es un `object`:** Mapa de rareza → array de IDs.

```js
"rarity": {
    "c": [3, 8, 10, 12],
    "u": [1, 2, "4-7"],
    "r": [9, 11],
    "sr": [16, 26],
    "sec": [73, 74],
}
```

Rarezas soportadas:

| Código | Nombre |
|--------|--------|
| `c` | Common |
| `u` | Uncommon |
| `r` | Rare |
| `sr` | Super Rare |
| `sec` | Secret Rare |
| `p` | Promo |
| `aa` | Alternative Art (valor por defecto si no se especifica) |
| `sp` | Special |
| `t` | Token |

### `rarities` (multi-set)

Cuando un set con `id: null` inyecta cartas en múltiples sets base, se usa `rarities` en lugar de `rarity`:

```js
"rarities": {
    "BT19": "sp",           // Todas las de BT19 son SP
    "BT20": {               // Las de BT20 tienen rarezas individuales
        "sp": [21, 45, 60]
    }
}
```

---

## Bloques y reprints

### Concepto de bloque

Un bloque (`block`) representa el periodo temporal en el que se imprimieron las cartas:

| Bloque | Periodo | Sets de referencia |
|--------|---------|-------------------|
| 0 | 2020 (sin icono) | ST1–ST6, BT1–BT5 |
| 1 | 2021 | ST7–ST10, BT6–BT9, EX1–EX2 |
| 2 | 2022 | ST12–ST14, BT10–BT13, EX3–EX4 |
| 3 | 2023 | ST15–ST17, BT14–BT17, EX5–EX6, RB1, LM |
| 4 | 2024 | ST18–ST19, BT18–BT20, EX7–EX8 |
| 5 | 2025 | ST20–ST22, BT21–BT23, EX9–EX10, AD1 |
| 6 | 2026 | ST23+, BT24+, EX11+ |

### Objetivo

Todas las cartas deben tener un bloque asignado. Esto permite:

- **Filtrar por bloque:** Mostrar solo las cartas de un periodo concreto.
- **Inputs de cantidad por bloque:** Al filtrar por bloque X, se muestran las cartas de ese bloque y solo el input de cantidad correspondiente a ese bloque.

### Block en sets base

Todos los sets con `id` llevan `"block"` indicando a qué periodo pertenecen:

```js
{
    "id": "BT21",
    "block": 5,
    "slug": "bt21",
    "name": "Booster World Convergence [BT21]",
    ...
}
```

### Block en sets con cartas de distintos bloques

Cuando un set contiene cartas de distintos bloques (ej. Promos, o productos que mezclan sets de distintos periodos), `block` se define como un mapa bloque → cartas:

```js
"block": {
    "0": ["1-20"],
    "1": ["21-50"],
    "2": ["51-80"],
    ...
}
```

Esto aplica a:
- **Promos** (`"id": "P"`) — cada carta puede pertenecer a un bloque distinto.
- **Sets sin ID** que inyectan cartas de distintos periodos en un mismo producto.

### Diferencia entre alternativa y reprint

- **Alternativa:** Mismo ID de carta pero con arte diferente. Pertenece al mismo bloque que la carta original.
- **Reprint:** Misma carta reimpresa en un producto posterior. Cambia de bloque al del momento de la reimpresión.

> **Pendiente de decisión:** Si el cambio de bloque es condición suficiente para considerar una carta como reprint. A priori parece que sí, pero esto trataría como reprints a muchas cartas alternativas que se publican en bloques posteriores al original.

### Cómo se define un reprint

```js
{
    "id": null,
    "slug": "st22_reprint",
    "name": "Advanced Deck Amethyst Mandala [ST-22] - reprints",
    "url": "bandaitcgplusURL/ST22/e_setID-cardID_D.png",
    "cards": {
        "BT17-031": "",
        "BT17-035": "",
        "BT19-034": "",
    },
    "reprint": true,
    "block": 5,
}
```

En la UI, las cartas con reprints muestran inputs adicionales en la columna de cantidad, uno por cada bloque de reprint, para trackear cuántas copias se tienen de cada impresión.

---

## Slug y relación set-producto

El `slug` identifica el producto o release al que pertenece un set. Es la conexión entre los datos estáticos y la colección del usuario.

### Casos especiales

Algunos sets base (`id` no nulo) no tienen `slug` porque sus cartas no se vendieron directamente en un producto propio:

| Set | Motivo |
|-----|--------|
| `P` (Promos) | Las promos se distribuyen en muchos productos distintos (torneos, eventos, packs). No hay un producto "Promos". |
| `BT1`, `BT2`, `BT3` | Se comercializaron mezclados en dos productos: Special Booster Ver.1.0 (`sbt10`) y Special Booster Ver.1.5 (`sbt15`). |
| `LM` | Se publica en distintos productos a lo largo del tiempo (Limited Card Packs). |
| `BT18`, `BT19`, `BT20` | Se aunaron en dos productos mezclando cartas de los tres: Special Booster Ver.2.0 y Ver.2.5. |

En estos casos, los sets con `id: null` que inyectan sus cartas sí tienen `slug` apuntando al producto concreto.

---

## Productos

Los productos (sobres, cajas, etc.) se definen mediante el campo `pack` en los sets:

```js
// Un solo sobre
"pack": "https://...imagen_sobre.png"

// Múltiples variantes de sobre
"pack": [
    "https://...sobre_variante_1.png",
    "https://...sobre_variante_2.png",
]
```

Actualmente solo se gestionan sobres, pero la estructura está pensada para expandirse a: cajas, fundas, tapetes, contadores de memoria, deckbox y cualquier otro producto relacionado.

---

## Estados de carta

Cada variante de carta tiene un estado numérico:

| Valor | Estado | Descripción |
|-------|--------|-------------|
| `-1` | Reservada | Carta apartada/reservada pendiente de recibir |
| `0` | Falta | No se tiene (estado por defecto) |
| `1` | Obtenida | Se tiene la carta |
| `2` | Comprada | Se compró (requiere precio) |
| `3` | Proxy | Se tiene una copia proxy (requiere precio) |

### ¿Por qué `-1` para reservada?

El valor negativo permite usar `status > 1` como condición para determinar si una carta tiene precio asociado (comprada o proxy), excluyendo automáticamente falta (0), obtenida (1) y reservada (-1) sin necesidad de condiciones adicionales. También se aprovecha en el modal de visualización, donde el array `['Falta', 'Obtenida', 'Comprada', 'Proxy']` no tiene índice `-1`, cayendo al fallback `'Reservada'`.

> **Nota:** Esta lógica está en consideración de cambio. Cuando se reserva una carta normalmente ya se conoce el precio, por lo que tendría sentido permitir registrar un precio en estado reservada. Sin embargo, si la carta se obtiene por intercambio no habría precio, similar a "obtenida". Por esta ambigüedad, la lógica se ha mantenido así hasta ahora.

---

## localStorage: collection

Estructura del objeto `collection` almacenado en localStorage:

```json
{
    "BT21": {
        "001": {
            "amount": 4,
            "cards": {
                "bt21": { "status": 1, "bought": 0 },
                "bt21_alts": { "status": 2, "bought": 3.50 },
                "bt21_special": { "status": 0, "bought": 0 }
            },
            "reprint": {
                "5": 2
            }
        },
        "002": {
            "amount": 0,
            "cards": {
                "bt21": { "status": 0, "bought": 0 }
            }
        }
    },
    "products": {
        "packs": {
            "bt21": { "status": 1, "bought": 0 },
            "sbt10_0": { "status": 2, "bought": 15.00 }
        }
    }
}
```

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `[setId][cardId].amount` | `number` | Cantidad total de copias de esa carta (todas las variantes) |
| `[setId][cardId].cards[slug]` | `object` | Estado y precio de cada variante, indexado por `slug` del set de origen |
| `[setId][cardId].cards[slug].status` | `number` | Estado de la carta (-1, 0, 1, 2, 3) |
| `[setId][cardId].cards[slug].bought` | `number` | Precio de compra (solo si status > 1) |
| `[setId][cardId].reprint` | `object` | Opcional. Cantidad de copias por bloque de reprint: `{ "5": 2 }` |
| `products.packs[slug]` | `object` | Estado y precio de cada sobre/producto |

---

## localStorage: cardmarket

Estructura del objeto `cardmarket` almacenado en localStorage:

```json
{
    "BT21": {
        "001": {
            "bt21_alts": {
                "url": "https://www.cardmarket.com/en/DigimonCardGame/Products/...",
                "price": [4.50, 3.80, 3.20]
            }
        }
    },
    "products": {
        "packs": {
            "bt21": {
                "url": "https://...",
                "price": [89.99]
            }
        }
    }
}
```

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `[setId][cardId][slug].url` | `string` | URL de la carta en Cardmarket |
| `[setId][cardId][slug].price` | `number[]` | Historial de precios mínimos. Cada vez que se introduce un precio distinto al último, se añade al array. Permite ver la evolución del precio en el tiempo. |
| `products.packs[slug]` | `object` | Misma estructura para productos |

---

## Decisiones de diseño

| Decisión | Motivo |
|----------|--------|
| Datos en JS en lugar de JSON | Permite declararlos como variables globales sin necesidad de fetch/import. Simplifica el setup sin bundler. |
| localStorage como persistencia | Sin backend, sin cuentas. Los datos son del usuario y viven en su navegador. |
| `id: null` para variantes | Permite reutilizar la misma tabla HTML del set base, inyectando imágenes adicionales en las filas existentes. |
| Historial de precios como array | Permite trackear la evolución del precio de Cardmarket sin complejidad adicional. Solo se añade un nuevo valor si difiere del último. |
| Separación `collection` / `cardmarket` | Son datos con ciclos de vida distintos: la colección cambia cuando el usuario edita, los precios de Cardmarket cambian con el mercado. Permite exportarlos/importarlos por separado. |
| Reprints indexados por bloque | Una misma carta puede tener reprints en distintos bloques temporales. Indexar por bloque permite saber cuántas copias se tienen de cada impresión. |
