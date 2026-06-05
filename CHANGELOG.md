# Changelog

Todos los cambios notables de este proyecto se documentan aquí.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).
Versionado según [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

## [1.5.0] - 2026-06-05

### Added

- Imagen de error dedicada (`/sources/error_card.png`) cuando falla la carga de una carta (#47)
- Transición hover con scale y sombra en miniaturas de carta en vista grid (#48)
- Contador de cartas visibles en la barra de filtros, con animación de pulso al cambiar (#50)
- Función `updateFilterCount()` en `utils.js` para contar cartas visibles
- Set Promo February Events (`promo_feb2026`) con P-213
- Sets OST 2026 Vol.3 (`otp22`, `wp22`) con P-239–P-244
- Archivo `data_2027.js` con el set PB-24 Nexus of Digimon
- Migración v2: elimina slugs `otp22`/`wp22` incorrectamente asignados a P-139–P-144
- Propuesta 2.9 (panel de filtros colapsable con chips) en `UI_REDESIGN.md`

### Changed

- Bordes de tabla suavizados a `#e0e0e0` y sombra en `.content` (#49)
- `border-radius: 4px` en tablas de vista grid (#49)
- Contador de filtros con estilo pill (fondo `#f0f4f8`, `border-radius: 12px`) (#50)
- URLs de Evolution Cup 2026 Vol.2 actualizadas
- Fecha de última consulta actualizada a June 5, 2026

### Fixed

- Visibilidad de conjuntos cuando se combinan filtros de rareza y color
- Visibilidad del block badge al filtrar por bloque

## [1.4.0] - 2026-05-27

### Added

- Función `getCardBlock(cardId, block)` para resolver el bloque de una carta dado su ID y el campo `block` del set
- Atributo `data-block` en todas las imágenes de carta (sets base y variantes)
- Inputs de cantidad por bloque en `drawAlternatives`: un input por cada bloque distinto que tenga la carta
- Sets sin `block` definido (Promos) reciben `data-block` dinámicamente al procesar sus variantes
- Filtro por bloque en la barra de filtros (después de rareza)
- Al filtrar por bloque, se ocultan también los inputs de cantidad que no correspondan al bloque seleccionado

## [1.3.0] - 2026-05-25

### Added

- Sets de 2026: Evolution Cup 2026 Vol.1 y Vol.2, World Championship 2025, Regionals 2026/27 Season 1, Ultimate Cup 2026 Vol.1, OTP21/WP21, Judge Pack 9, ST-23, ST-24, LM Memory Boost, BT-25, EX-12, LM-09 y sus variantes
- Nuevos colores CSS: `green-white`, `purple-red-green`
- Nueva rareza `ur` (Ultimate Rare) en datos, filtro y estilos

## [1.2.0] - 2026-05-25

### Added

- Campo `block` asignado a todos los sets en todos los archivos `data_*.js`
- Soporte de `block` como mapa bloque → cartas para sets con cartas de distintos bloques

## [1.1.1] - 2025-01-01

### Estado base

- Navegación por categorías: Boosters (BT), Starters (ST), Extras (EX) y otros productos
- Edición de colección con modal: estado, precio y URL de Cardmarket por carta
- Filtros combinados por estado, color primario, set y rareza
- Vista en tabla o grid
- Soporte para arts alternativos, reprints y gold foil
- Exportación de colección y datos de Cardmarket como JSON
- Datos persistidos en localStorage
- Soporte de impresión con CSS dedicado
- Migraciones de datos en localStorage (`updates.js`)

[Unreleased]: https://github.com/Vegekku/dtcg-web/compare/v1.5.0...HEAD
[1.5.0]: https://github.com/Vegekku/dtcg-web/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/Vegekku/dtcg-web/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/Vegekku/dtcg-web/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/Vegekku/dtcg-web/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/Vegekku/dtcg-web/releases/tag/v1.1.1
