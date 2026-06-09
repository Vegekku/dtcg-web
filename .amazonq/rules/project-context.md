# Contexto del proyecto DTCG Web Collection

## Qué es

Aplicación web vanilla (HTML + JS + SASS) para gestionar una colección personal de cartas Digimon TCG. Sin framework, sin backend. Datos persistidos en localStorage. Servida con http-server en localhost:3000.

## Stack

- JS vanilla con scripts globales (sin módulos ES aún)
- SASS compilado con Gulp + autoprefixer
- http-server para desarrollo local

## Estructura clave

- `js/data/data_*.js` — Datos estáticos de sets organizados por año
- `js/sets.js` — Concatena todos los datos en un array `sets`
- `js/index.js` — Lógica principal: genera DOM, gestiona localStorage
- `js/modal.js` — Modal de edición/visualización de cartas
- `js/filters.js` — Filtros por estado, color, set y rareza
- `js/views.js` — Cambio de vista (tabla/grid) y descarga JSON
- `js/updates.js` — Migraciones de datos en localStorage
- `sass/` — Estilos fuente, compilados a `css/`

## Modelo de datos (resumen)

- Sets con `id` (ej. `"BT1"`) → generan tabla HTML con sus cartas
- Sets con `id: null` → variantes (alts, reprints, limited, special) que se inyectan en filas de sets existentes
- `slug` vincula un set al producto/release donde se comercializó
- `url: null` → explícitamente sin URL automática (set base sin imágenes o URLs dentro de `cards`)
- `rarity` → rareza única o mapa por carta. `rarities` → mapa por setId (multi-set)
- `block` → periodo temporal de impresión. Presente en todos los sets con `id` (sets base). También en sets con `"reprint": true` (ambos campos obligatorios para generar el input de reprint en la UI). En Promos (`"id": "P"`) y en sets que contengan cartas de distintos bloques, `block` es un mapa bloque → cartas. Todas las cartas deben tener bloque asignado para permitir filtrado por bloque y mostrar solo el input de cantidad correspondiente
  - `0` (sin icono) → hasta BT-05 (2020)
  - `1` → ST-7 hasta BT-09 (2021)
  - `2` → ST-12 hasta BT-13 (2022)
  - `3` → ST-15 hasta BT-17 (2023)
  - `4` → ST-18 hasta BT-20 (2024)
  - `5` → ST-20 hasta EX-11 (2025-2026)
  - `6` → ST-23 en adelante (2026)
  - **Decisión tomada:** reprint = cualquier reimpresión posterior a la original, incluyendo alternativas y cambios de bloque. Se mantiene tracking por bloque para posible rotación futura
  - Cuando `block` es un mapa y se usa un prefijo de set como fallback, colocar el prefijo en el bloque más alto y los IDs específicos en los bloques inferiores. Así la función `getCardBlock` los encuentra por ID exacto antes de llegar al prefijo general
- `override` → URLs alternativas para cartas puntuales (erratas)
- `parallel` → string (una variante) o array (múltiples variantes) en el campo `cards`

## Estados de carta

- `-1` = Reservada, `0` = Falta, `1` = Obtenida, `2` = Comprada, `3` = Proxy
- `status > 1` determina si tiene precio asociado

## localStorage

- `collection` → `{ [setId]: { [cardId]: { amount, cards: { [slug]: { status, bought } }, reprint?: { [block]: qty } } }, products: { packs: { ... } } }`
- `cardmarket` → misma estructura pero con `{ url, price: number[] }` (historial de precios)

## Documentación extendida

Para más detalle, consultar estos archivos del proyecto:
- `README.md` — Instalación, uso y estructura
- `DATA_MODEL.md` — Modelo de datos completo con ejemplos
- `UI.md` — Descripción de la interfaz
- `IMPROVEMENTS.md` — 64 sugerencias de mejora priorizadas
- `FRAMEWORKS.md` — Análisis de componentización y frameworks

## Versionado y CHANGELOG

Usar **Semantic Versioning**: `MAJOR.MINOR.PATCH`

- `PATCH` → bugfixes, correcciones de datos
- `MINOR` → nuevas funcionalidades (cada mejora de IMPROVEMENTS.md)
- `MAJOR` → cambios que rompen compatibilidad con localStorage

Al terminar cada mejora, Amazon Q debe:
1. Añadir entrada en `CHANGELOG.md` con la nueva versión, fecha y secciones `Added/Changed/Fixed/Removed` según corresponda
2. Actualizar `version` en `package.json`
3. Actualizar los enlaces de comparación al final del `CHANGELOG.md`

El usuario se encarga de los commits y tags de git.

## Instrucciones para sugerencias de datos

Cuando se sugiera el campo `block` como mapa (bloque → cartas) para un set con `id: null`:

1. **Mirar el campo `cards` del mismo set** para saber exactamente qué cartas contiene.
2. **Determinar el bloque de cada carta** a partir del prefijo de set (ej. `"BT6-012"` → BT6 → bloque 1, `"BT14-055"` → BT14 → bloque 3).
3. **Agrupar las cartas por bloque** usando los IDs reales del campo `cards`, no inventar ni asumir cartas que no estén en el set. **Nunca sugerir bloques para IDs que no aparezcan en `cards`.**
4. **Si una carta fue reimpresa y cambió de bloque**, usar el bloque de la última reimpresión, no el original. Las reimpresiones posteriores también deben apuntar a ese bloque actualizado.

Referencia rápida de prefijo → bloque:
- Bloque 0: ST1–ST6, BT1–BT5
- Bloque 1: ST7–ST10, BT6–BT9, EX1–EX2
- Bloque 2: ST12–ST14, BT10–BT13, EX3–EX4
- Bloque 3: ST15–ST17, BT14–BT17, EX5–EX6, RB1, LM
- Bloque 4: ST18–ST19, BT18–BT20, EX7–EX8
- Bloque 5: ST20–ST22, BT21–BT24, EX9–EX11, AD1
- Bloque 6: ST23+, BT25+, EX12+

## Flujo de trabajo con Git, issues y PRs

### Ramas

- `main` → producción, solo recibe merges desde `develop`
- `develop` → integración, solo recibe merges desde ramas de feature/data
- Ramas de trabajo con prefijos: `feat/`, `data/`, `fix/`, `refactor/`
- Siempre se crean desde `develop`
- Push directo a `develop` y `main` está bloqueado por reglas de protección

### Issues

- Cada mejora de `IMPROVEMENTS.md` o `UI_REDESIGN.md` tendrá su issue en GitHub
- Se crea el issue cuando se va a abordar la mejora, no antes
- Sin milestones de momento. Se usan labels para organizar:
  - `bug` → algo no funciona
  - `enhancement` → nueva funcionalidad
  - `data` → añadir o corregir datos de sets
  - `ui` → cambios visuales o de UX
  - `refactor` → mejoras de código sin cambio funcional
  - `blocked` → bloqueado por información o dependencia externa

### Flujo completo

1. Crear issue en GitHub con el label correspondiente
2. Crear rama desde `develop` con el prefijo adecuado
3. Desarrollar la mejora en la rama
4. Cuando el desarrollo esté terminado y validado:
   - Actualizar documentación relevante (`IMPROVEMENTS.md`, `UI_REDESIGN.md`, `DATA_MODEL.md`) con todos los cambios implementados
   - Amazon Q crea el PR con `Closes #XX` apuntando a `develop`
5. Mergear con **squash and merge**
6. El issue se cierra automáticamente al mergear
7. Ejecutar `git clean-merged` en local para limpiar ramas mergeadas

### Merge de develop a main

Cuando haya un conjunto de features listas para release, seguir el flujo Gitflow:

0. **ANTES de crear la rama de release:** verificar que `develop` tiene el sync de la release anterior (PR de sync mergeada). Si no, sincronizar primero para evitar conflictos con `main`.
1. Crear rama `release/vX.Y.Z` desde `develop`
2. Actualizar `CHANGELOG.md` y `version` en `package.json` en esa rama
3. Pushear la rama
4. Amazon Q crea PR de `release/vX.Y.Z` → `main` con `Closes #XX` para todos los issues incluidos en el release
5. El usuario revisa y mergea (o Amazon Q si se lo pide)
6. Amazon Q crea rama `chore/sync-vX.Y.Z` desde `release/vX.Y.Z` y PR → `develop` (squash merge, porque `develop` no permite merge commits)
7. Mergear la PR de sync
8. El tag se crea automáticamente via GitHub Action
9. Limpiar ramas: `release/vX.Y.Z` y `chore/sync-vX.Y.Z`

## Orden cronológico en archivos de datos

Dentro de cada archivo `data_*.js`, los sets se ordenan cronológicamente siguiendo estas reglas:

1. **Mes genérico** (ej. `// January 2026`) → siempre el primero de su mes
2. **Rangos que empiezan el mismo día** → ordenados por duración, el más corto primero (ej. `January 1 – February 28` antes que `January 1 – March 31`)
3. **Rangos** (ej. `// March 1 – April 30`) → después del mes genérico, antes de fechas exactas del mismo mes
4. **Fechas exactas** (ej. `// March 15`) → después de los rangos, en orden ascendente

## Creación de sets — plantillas y patrones

Cuando el usuario quiera añadir un nuevo set, Amazon Q genera el esqueleto completo a partir de los datos mínimos. El usuario solo necesita proporcionar:

### Booster/Starter/Extra principal (sets con `id`)

Datos mínimos necesarios:
- ID del set (ej. `BT24`, `ST23`, `EX11`)
- Nombre completo
- Fecha de release
- Total de cartas
- Bloque

Amazon Q genera automáticamente:
- `slug` → ID en minúsculas (ej. `BT24` → `bt24`)
- `url` → `bandaitcgplusURL/SETID/e_setID-cardID_d.png` (con el ID del set en mayúsculas sin ceros, ej. `BT24`, `EX11`)
- `add_zero` → 3 para BT/EX, 2 para ST
- Estructura vacía de `color`, `rarity`, `override`
- Variantes asociadas vacías (ver abajo)

### Variantes asociadas a un booster (orden estándar)

1. `{slug}_alts` — Alternatives
2. `{slug}_limited` — Limited Cards
3. `{slug}_special` — Special Cards
4. `{slug}_boxtopper` — Box Promotion Pack
5. `{slug}_prerelease` — Release Event

No todos los sets tienen todas las variantes. Amazon Q pregunta cuáles aplican o el usuario las indica.

### Promos de torneo (patrones repetitivos)

- `otp{N}` + `wp{N}` — Official Store Tournament Vol.N (Participation + Winner), siempre en pareja
- `regional{año}_{temporada}_{0/1/2}` — Regionals (Participation, Finalist, Champion)
- `evolution_cup_{año}_{vol}_{participant/top4/winner}` — Evolution Cup
- `championship_{temporada}_finals_{N}_{tamers/top32/top16/3rd/2nd/1st}` — Championship Finals
- `judgepack{N}` — Judge Pack
- `rb_{N}` — Regulation Battle

Para estos, Amazon Q genera el grupo completo a partir del nombre del evento, número de vol/temporada y fecha.

## Consideraciones sobre Ultimate Cup y eventos con múltiples premios

Algunos eventos tienen múltiples premios (Participation, Top 16, Top 4, Champion) pero se representan como un único set con todas las cartas juntas (patrón Ultimate Cup). En ese caso:
- Usar un único set con todas las cartas
- Añadir comentario en línea indicando el premio de cada carta: `"RB1-001": "", // Participation`

Esto contrasta con los Regionals, que sí se separan en sets distintos por premio.

## Issues pendientes destacados

(Ninguno actualmente)

## Campos pendientes de implementar en el modelo de datos

- `sleeve` — URL de imagen de funda/sleeve asociada a un set de evento. Documentar como `// TODO: sleeve: "url"` hasta que se implemente en el modelo.

## Fecha de última consulta

En `index.html` hay un campo `Last update: [fecha]` que indica la última vez que se consultó `world.digimoncard.com` para actualizar los datos. Actualizarlo cada vez que se añadan sets nuevos.

## Idioma

El usuario habla en español. La UI de la app está en español. Los datos y nombres de sets están en inglés.

## Instrucciones para Amazon Q

- **Nunca hacer anotaciones mentales.** Toda decisión, recordatorio o instrucción debe persistirse en este archivo u otro documento del proyecto.
- **Siempre crear la rama desde `develop` ANTES de hacer cualquier cambio en código.** Nunca trabajar directamente en `develop` ni en `main`.
- **Issues pendientes destacados:** al mergear una PR de feature/fix a `develop`, añadir el issue a la sección "Issues pendientes destacados" con nota de que está pendiente de cerrar en próxima release. Al mergear la PR de release a `main`, eliminar esos issues de la sección (ya se cierran automáticamente con `Closes #XX`).
- **PRs:** solo crear la PR cuando el usuario confirme que el desarrollo en la rama está completo. Antes de crearla, revisar el código modificado en la rama para optimizar o refactorizar si es posible.
- **Docs en release:** al crear la rama `release/vX.Y.Z`, eliminar de `IMPROVEMENTS.md` y `UI_REDESIGN.md` los ítems que se hayan implementado en esa release (para histórico ya están issues, PRs, changelog y control de versiones).
