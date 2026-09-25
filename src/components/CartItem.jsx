import { formatPrecio } from '../utils/formatPrecio'

/**
 * CartItem
 * Representa una fila dentro del carrito de compras.
 */
function CartItem({ item, onEliminar }) {
  return (
    <tr>
      <td>{item.nombre}</td>
      <td>{formatPrecio(item.precioUnitario)}</td>
      <td>
        <button
          type="button"
          className="btn btn-retro btn-sm"
          onClick={() => onEliminar(item.uniqueId)}
          aria-label={`Eliminar ${item.nombre} del carrito`}
        >
          🗑️ Eliminar
        </button>
      </td>
    </tr>
  )
}

export default CartItem
