# Retro Zone — eCommerce en React (Vite)

Proyecto de la actividad formativa **"Construyendo componentes funcionales en React
para un eCommerce interactivo"** — Desarrollo Frontend I (PFY2201), Semana 7.

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
| vite                   | ^5.0.0    |
| @vitejs/plugin-react   | ^5.0.3    |
| gh-pages (dev)         | ^6.0.0    |


## Estructura del proyecto

```
ecommerce-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # punto de entrada, renderiza <App />
    ├── App.jsx                # componente raíz: guarda el estado del carrito
    ├── styles.css              # estilos (tema retro heredado del proyecto base)
    ├── data/
    │   └── productos.js        # catálogo de productos (nombre, precios, imagen, descripción)
    ├── utils/
    │   └── formatPrecio.js     # función reutilizable para formatear precios en CLP
    ├── assets/img/              # imágenes de los productos
    └── components/
        ├── Navbar.jsx           # barra superior con contador del carrito
        ├── ProductList.jsx      # listado de productos + buscador (useState)
        ├── ProductCard.jsx      # tarjeta de un producto individual
        ├── ShoppingCart.jsx     # resumen del carrito de compras
        ├── CartItem.jsx         # una fila del carrito
        └── CartTotal.jsx        # cálculo y visualización del total
```

## Funcionalidades implementadas

- **Listado de productos**: nombre, precio normal, precio oferta (cuando aplica),
  descripción corta e imagen, para cada juego del catálogo.
- **Carrito de compras**:
  - Agregar un producto al carrito (`onClick` en `ProductCard`).
  - Eliminar un producto específico del carrito sin afectar a los demás
    (cada ítem tiene un `uniqueId`).
  - Vaciar el carrito completo.
  - Contador de productos en el carrito, visible en el `Navbar`.
  - Total del carrito, calculado con `reduce()` en `CartTotal`.
- **Hooks**: `useState` se usa en `App.jsx` (estado del carrito) y en
  `ProductList.jsx` (estado del texto de búsqueda).
- **Renderizado condicional**:
  - En `ProductCard`, se muestra la etiqueta "OFERTA" y el precio tachado
    solo si el producto está en oferta (operador `&&` y ternario).
  - En `ProductList`, se muestra un mensaje de "sin resultados" cuando el
    filtro de búsqueda no encuentra productos.
  - En `ShoppingCart`, se muestra un mensaje de "carrito vacío" o la tabla
    con los productos, según corresponda.
- **Componentes funcionales modulares**: cada pieza de la UI (tarjeta de
  producto, ítem del carrito, total, navbar) es un componente independiente
  y reutilizable que recibe datos y funciones mediante **props**.
