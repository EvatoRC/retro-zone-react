# Retro Zone — eCommerce en React (Vite)

Proyecto de la evaluación sumativa **"Mejorando funcionalidades clave en el eCommerce
con React"** — Desarrollo Frontend I (PFY2201), Semana 8. Continúa el proyecto de la
Semana 7 agregando carga de datos con `useEffect`, más estados con `useState` y
renderizado condicional.

## Requisitos previos

- Node.js (LTS recomendada) y npm instalados. Verifica con:
  ```bash
  node -v
  npm -v
  ```

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre el navegador en la URL que indica la terminal 

Otros scripts disponibles:

```bash
npm run build     # genera la versión de producción en /dist
npm run preview   # sirve localmente el build de producción
npm run deploy    # publica /dist en la rama gh-pages (ver sección de despliegue)
```

## Versiones usadas

| Paquete              | Versión   |
|-----------------------|-----------|
| react / react-dom      | ^19.0.0   |
| bootstrap              | ^5.3.3    |
| vite                   | ^5.0.0    |
| @vitejs/plugin-react   | ^5.0.3    |
| gh-pages (dev)         | ^6.0.0    |


## Estructura del proyecto

```
retro-zone-react/
├── index.html
├── package.json
├── vite.config.js            # base: '/retro-zone-react/' (necesario para gh-pages)
├── public/
│   ├── data/
│   │   └── productos.json     # catálogo (fuente de datos que carga useEffect con fetch)
│   └── img/                    # imágenes de los productos
└── src/
    ├── main.jsx                # punto de entrada, renderiza <App />
    ├── App.jsx                 # componente raíz: guarda el estado del carrito
    ├── styles.css              # estilos (tema retro heredado del proyecto base)
    ├── utils/
    │   └── formatPrecio.js     # función reutilizable para formatear precios en CLP
    └── components/
        ├── Navbar.jsx          # barra superior con contador del carrito
        ├── ProductList.jsx     # catálogo: carga con useEffect + buscador + estados de carga/error
        ├── ProductCard.jsx     # tarjeta de un producto (botón Agregar / En el carrito)
        ├── ShoppingCart.jsx    # resumen del carrito de compras
        ├── CartItem.jsx        # una fila del carrito
        └── CartTotal.jsx       # cálculo y visualización del total
```

## Funcionalidades implementadas

### useState (gestión de estados)
- **Catálogo** (`ProductList`): `productos` parte vacío y se llena al cargar el JSON.
  Junto a él hay estados `cargando`, `error` e `intento` para controlar la carga.
- **Carrito** (`App`): `cart` guarda los juegos seleccionados. Se puede agregar,
  eliminar un juego específico o vaciar el carrito completo.
- **Elementos interactivos**: texto del buscador (`busqueda`) y el botón de cada
  tarjeta, que cambia de "Agregar al carrito" a "✔ En el carrito" al hacer clic.

### useEffect (efectos secundarios)
- `ProductList` hace `fetch` a `public/data/productos.json` al montarse y guarda el
  resultado con `setProductos`. La ruta usa `import.meta.env.BASE_URL` para que
  funcione tanto en local como en gh-pages.
- Se simula una pequeña demora (`DEMORA_SIMULADA_MS`, 600 ms) para que se vea el
  mensaje de carga. Si el componente se desmonta se cancela la petición con `AbortController`.
- Si el `fetch` falla se muestra un error con un botón **Reintentar**
  (cambia el estado `intento`, que es la dependencia del efecto).

### Renderizado condicional
- Catálogo: "Cargando catálogo..." / mensaje de error con reintento / "sin resultados"
  del buscador / grid de productos.
- `ProductCard`: etiqueta "OFERTA" y precio tachado solo si el juego está en oferta, y
  botón "Agregar al carrito" o "En el carrito" según el estado del carrito.
- `ShoppingCart`: mensaje de "carrito vacío" o tabla con los juegos y el mensaje
  "Tienes N juego(s) en el carrito".
- `Navbar`: contador con el total de juegos en el carrito.

### Otros
- **Componentes funcionales modulares** que reciben datos y funciones mediante **props**.
- Cada juego se puede agregar una sola vez al carrito (son juegos digitales).

## Despliegue en GitHub Pages

El repositorio en GitHub debe llamarse `retro-zone-react` (coincide con `base` en `vite.config.js`).

```bash
npm run deploy    # hace build y publica /dist en la rama gh-pages
```

Luego en GitHub: Settings → Pages → Source: rama `gh-pages`, carpeta `/ (root)`.
