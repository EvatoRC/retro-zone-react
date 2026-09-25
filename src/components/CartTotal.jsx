import { formatPrecio } from '../utils/formatPrecio'

/**
 * CartTotal
 * Componente pequeño y reutilizable: recibe el array "cart" y calcula
 * el total sumando el precio unitario de cada ítem con reduce().
 */
function CartTotal({ cart }) {
  const total = cart.reduce((acumulado, item) => acumulado + item.precioUnitario, 0)

  return (
    <h3 className="h5 mb-0">
      Total: <span className="cart-total-valor">{formatPrecio(total)}</span>
    </h3>
  )
}

export default CartTotal
