import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'

/**
 * App
 * Componente raíz de la aplicación. Aquí vive el estado del carrito
 * (cart), ya que el Navbar (contador), el ProductList (botón
 * "Agregar") y el ShoppingCart (listado + total) necesitan
 * leerlo o modificarlo.
 *
 * El catálogo de productos NO vive aquí: lo carga ProductList con
 * useEffect desde public/data/productos.json.
 */
function App() {
  // Estado del carrito: array de items { productoId, nombre, precioUnitario }.
  // Cada juego se puede tener una sola vez en el carrito (son juegos digitales).
  const [cart, setCart] = useState([])

  // Agrega un producto al carrito. Usa el precio de oferta si el
  // producto está en oferta, o el precio normal en caso contrario.
  const addToCart = (producto) => {
    const precioUnitario = producto.enOferta ? producto.precioOferta : producto.precioNormal

    setCart((carritoActual) => {
      // Si ya está en el carrito no lo agregamos de nuevo
      if (carritoActual.some((item) => item.productoId === producto.id)) {
        return carritoActual
      }
      return [...carritoActual, { productoId: producto.id, nombre: producto.nombre, precioUnitario }]
    })
  }

  // Elimina del carrito solo el item con ese productoId (no afecta a los demás)
  const removeFromCart = (productoId) => {
    setCart((carritoActual) => carritoActual.filter((item) => item.productoId !== productoId))
  }

  // Vacía el carrito completo
  const clearCart = () => setCart([])

  // Ids de los productos que ya están en el carrito (sirve para cambiar el botón de cada tarjeta)
  const idsEnCarrito = cart.map((item) => item.productoId)

  return (
    <div className="window" id="app-window">
      <Navbar totalItems={cart.length} />

      <main>
        <section id="inicio" className="container">
          <h1 className="section-title">Bienvenidos a Retro Zone</h1>
          <p className="fs-5">
            Encuentra videojuegos <strong>Oldies</strong> de PC y disfruta de tus aventuras
            favoritas de los 90, remasterizadas para correr en cualquier equipo moderno.
          </p>
        </section>

        <ProductList idsEnCarrito={idsEnCarrito} onAgregarAlCarrito={addToCart} />

        <ShoppingCart cart={cart} onEliminar={removeFromCart} onVaciar={clearCart} />
      </main>

      <footer className="site-footer">
        <p className="mb-0">&copy; 2026 Retro Zone. Proyecto formativo — Desarrollo Frontend I.</p>
      </footer>
    </div>
  )
}

export default App
