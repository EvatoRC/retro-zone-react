import { useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
import productos from './data/productos'

/**
 * App
 * Componente raíz de la aplicación. Aquí vive el estado del carrito
 * (cart), ya que tanto el Navbar (contador), el ProductList (botón
 * "Agregar") como el ShoppingCart (listado + total) necesitan
 * leerlo o modificarlo.
 */
function App() {
  // Estado del carrito: array de items. Cada item guarda los datos del
  // producto + un uniqueId propio, para poder agregar el mismo juego
  // varias veces y luego eliminar solo una de esas copias.
  const [cart, setCart] = useState([])

  // Agrega un producto al carrito. Usa el precio de oferta si el
  // producto está en oferta, o el precio normal en caso contrario.
  const addToCart = (producto) => {
    const precioUnitario = producto.enOferta ? producto.precioOferta : producto.precioNormal

    const nuevoItem = {
      uniqueId: `${producto.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      productoId: producto.id,
      nombre: producto.nombre,
      precioUnitario,
    }

    setCart((carritoActual) => [...carritoActual, nuevoItem])
  }

  // Elimina solo el item cuyo uniqueId coincide (no afecta a los demás)
  const removeFromCart = (uniqueId) => {
    setCart((carritoActual) => carritoActual.filter((item) => item.uniqueId !== uniqueId))
  }

  // Vacía el carrito completo
  const clearCart = () => setCart([])

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

        <ProductList productos={productos} onAgregarAlCarrito={addToCart} />

        <ShoppingCart cart={cart} onEliminar={removeFromCart} onVaciar={clearCart} />
      </main>

      <footer className="site-footer">
        <p className="mb-0">&copy; 2026 Retro Zone. Proyecto formativo — Desarrollo Frontend I.</p>
      </footer>
    </div>
  )
}

export default App
