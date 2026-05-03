# Descripción de la interfaz — DTCG Web Collection

Reconstrucción de la UI a partir del código fuente, para referencia futura.

## Layout general (de arriba a abajo)

### 1. Barra de categorías (acordeones)

4-5 botones en fila horizontal: **Boosters (BT)**, **Starters (ST)**, **Extras (EX)**, **Others**, **Products**. Al hacer click en uno se despliega un panel debajo con botones numerados (ej. para Boosters: `1`, `2`, `3`... hasta `23`; para Starters: `7`, `8`... `22`). Solo un acordeón abierto a la vez.

### 2. Botones de edición y descarga (inline)

**Editar** (amarillo), y al activarlo aparecen **Guardar** (verde) y **Cancelar** (rojo). Junto a ellos, **Descargar collection** y **Descargar cardmarket**.

### 3. Barra de filtros

Una línea con:
- Select **Estado** (Cualquiera, Sin playset ni faltas, Sin playset, Falta, Obtenida, Reservada, Comprada, Proxy)
- Select **Color primario** (Todos, Rojo, Azul, Amarillo...)
- Botón `<` | Input de búsqueda de set con datalist | Botón `>`
- Select **Rareza** (Todos, AA, SP, SEC, SR, P, R, U, C, T)

### 4. Controles de vista

- Select **Listar como**: Tabla / Grid
- Select **Mostrar**: Colección individual / Todas las colecciones

### 5. Área de contenido principal (scrollable)

**En vista tabla** (por defecto): Una tabla por set con header sticky. Solo se ve el set activo.

| ID + Rareza | Cantidad | Cartas (imágenes) |
|:-:|:-:|:--|
| `001` con badge circular de rareza (coloreado según el color de la carta) | Uno o varios inputs de cantidad. El input principal muestra las copias totales. Si la carta tiene reprints en distintos bloques, se añaden inputs adicionales por cada bloque de reprint. El fondo del input varía por cantidad: rojo=0, naranja=1, amarillo=2, verde claro=3, verde=4+. | Fila horizontal de miniaturas (~79×111px). Cada carta tiene un indicador visual de estado: borde lateral verde=obtenida, azul=comprada, teal=proxy, blur=reservada, sin indicador=falta. Si es comprada/proxy sin precio registrado, borde amarillo de revisión. |

**En vista grid**: Se ocultan las columnas de ID y cantidad. Las cartas se muestran como un mosaico inline de miniaturas.

**En "Products > Sobres"**: Las imágenes de los sobres en flex-wrap, con los mismos indicadores de estado por color.

> **Nota sobre productos:** Actualmente solo se muestran sobres, pero la idea original es incluir de forma igualmente clasificada: cajas, fundas, tapetes, contadores de memoria, deckbox y cualquier otro producto relacionado con las cartas.

### 6. Footer

Enlace de donación PayPal | contador de resultados bandai | fecha de última actualización | enlace a GitHub.

### 7. Modal de edición (oculto por defecto, visible en modo edición)

Fondo oscuro semitransparente. Caja blanca centrada con bordes redondeados:
- Título: `BT15-042: Nombre del set`
- Imagen de la carta (grande, con border-radius y sombra)
- 5 radio buttons estilizados como botones con iconos SVG: ❌ Falta | ✅ Obtenida | 🔒 Reservada | 💶 Comprada | 🖨️ Proxy
- Campo de precio (aparece al seleccionar Comprada/Proxy)
- Sección Cardmarket: icono + input URL + input precio mínimo
- Botón azul grande "confirmar"
- Botón X rojo arriba a la derecha

### 8. Modal de visualización (modo no edición)

Similar pero sin radio buttons ni inputs editables. Muestra:
- Imagen de la carta (más grande)
- Estado en texto + precio si aplica
- Enlace a Cardmarket con precio mínimo

### Impresión

Al imprimir se oculta todo lo que tiene clase `no-print` (filtros, botones, footer) y el contenido se expande sin scroll, con colores exactos preservados.
