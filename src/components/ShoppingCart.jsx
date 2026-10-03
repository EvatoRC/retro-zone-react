import CartItem from './CartItem'
import CartTotal from './CartTotal'

/**
 * ShoppingCart
 * Muestra el resumen del carrito de compras.
 * Renderizado condicional: mensaje de "carrito vacío" o la tabla con los productos.
 */
function ShoppingCart({ cart, onEliminar, onVaciar }) {
  return (
    <section id="carrito" className="container">
      <h2 className="section-title">Tu carrito</h2>

      <div className="panel-retro">
        {cart.length === 0 ? (
          <p className="mb-0">Todavía no agregas juegos al carrito.</p>
        ) : (
          <>
            {/* Mensaje dinámico con la cantidad de juegos (singular/plural) */}
            <p>
              Tienes <strong>{cart.length}</strong> {cart.length === 1 ? 'juego' : 'juegos'} en el carrito.
            </p>

            <table className="table table-retro">
              <thead>
                <tr>
                  <th>Juego</th>
                  <th>Precio</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <CartItem key={item.productoId} item={item} onEliminar={onEliminar} />
                ))}
              </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <CartTotal cart={cart} />
              <button type="button" className="btn btn-retro btn-sm" onClick={onVaciar}>
                🗑️ Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ShoppingCart
