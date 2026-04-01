# DTCG Web Collection

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16-green.svg)](https://nodejs.org/)
[![GitHub last commit](https://img.shields.io/github/last-commit/Vegekku/dtcg-web)](https://github.com/Vegekku/dtcg-web/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/Vegekku/dtcg-web)](https://github.com/Vegekku/dtcg-web)

Aplicación web para gestionar tu colección personal del juego de cartas **Digimon TCG**.

Permite llevar un seguimiento del estado de cada carta (obtenida, reservada, comprada, proxy...), registrar precios, consultar datos de Cardmarket y exportar tu colección como JSON.

## Funcionalidades

- Navegación por categorías: Boosters (BT), Starters (ST), Extras (EX) y otros productos
- Edición de colección con modal: estado, precio y URL de Cardmarket por carta
- Filtros combinados por estado, color primario, set y rareza
- Vista en tabla o grid
- Soporte para arts alternativos, reprints y gold foil
- Exportación de colección y datos de Cardmarket como JSON
- Datos persistidos en localStorage
- Soporte de impresión con CSS dedicado

## Requisitos

- [Node.js](https://nodejs.org/)

## Instalación

```bash
npm install
```

## Uso

Compilar SASS y activar watch:

```bash
npm run gulp
```

Iniciar el servidor local:

```bash
npm run start-server
```

La aplicación estará disponible en [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Estructura del proyecto

```
dtcg-web/
├── css/                  # CSS compilado (generado por Gulp)
├── js/
│   ├── data/
│   │   ├── data_norelease.js   # Sets base sin fecha (Promos, BT1-BT3)
│   │   ├── data_2021.js        # Sets de 2021
│   │   ├── ...                 # Sets por año hasta 2026
│   │   └── data_year.js        # Plantilla/test de datos
│   ├── sets.js           # Concatena todos los datos en un único array
│   ├── index.js          # Lógica principal: genera UI, gestiona localStorage
│   ├── modal.js          # Modal de edición/visualización de cartas
│   ├── filters.js        # Filtros por estado, color, set y rareza
│   ├── views.js          # Cambio de vista (tabla/grid) y descarga JSON
│   └── updates.js        # Migraciones de datos en localStorage
├── sass/                 # Fuentes SASS
├── sources/              # Assets (iconos SVG)
├── gulpfile.js           # Compilación SASS + autoprefixer
├── index.html            # Punto de entrada
└── package.json
```

## Modelo de datos

Cada set se define como un objeto en los archivos `js/data/data_*.js`:

- Sets con `id` (ej. `"BT1"`, `"ST7"`): generan una tabla HTML con todas sus cartas.
- Sets con `id: null`: representan variantes (arts alternativos, reprints, gold foil) que se inyectan en las filas de sets existentes.

La colección del usuario se almacena en localStorage con la siguiente estructura por carta:

- `amount`: cantidad de copias
- `cards`: objeto con cada variante y su `status` (0=falta, 1=obtenida, -1=reservada, 2=comprada, 3=proxy) y `bought` (precio)

## Autor

[Vegekku](https://github.com/Vegekku)

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
