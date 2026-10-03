import { formatPrecio } from '../utils/formatPrecio'

/**
 * ProductCard
 * Componente funcional que recibe un producto (props), si ya está en el
 * carrito (enCarrito) y una función "onAgregar" para agregarlo.
 *
 * Renderizado condicional:
 * - Si el producto está en oferta se muestra la etiqueta "OFERTA" y el
 *   precio normal tachado + el precio de oferta.
 * - Si el producto ya está en el carrito, el botón cambia de
 *   "Agregar al carrito" a "En el carrito" (y cambia de color).
 */
function ProductCard({ producto, enCarrito, onAgregar }) {
  const { nombre, precioNormal, precioOferta, enOferta, imagen, descripcion } = producto

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card h-100 product-card">
        {/* Renderizado condicional con && : la etiqueta OFERTA solo aparece si enOferta es true */}
        {enOferta && <span className="badge-oferta">OFERTA</span>}

        {/* La imagen está en public/, por eso se arma la ruta con BASE_URL */}
        <img
          src={`${import.meta.env.BASE_URL}${imagen}`}
          className="card-img-top"
          alt={`Portada de ${nombre}`}
        />

        <div className="card-body d-flex flex-column">
          <h3 className="h6 card-title">{nombre}</h3>
          <p className="small card-text flex-grow-1">{descripcion}</p>

          {/* Renderizado condicional con operador ternario para el bloque de precios */}
          <div className="precios mb-2">
            {enOferta ? (
              <>
                <span className="precio-normal-tachado">{formatPrecio(precioNormal)}</span>{' '}
                <span className="precio-oferta">{formatPrecio(precioOferta)}</span>
              </>
            ) : (
              <span className="precio-normal">{formatPrecio(precioNormal)}</span>
            )}
          </div>

          {/* Renderizado condicional del botón según el estado del carrito */}
          {enCarrito ? (
            <button type="button" className="btn btn-retro btn-en-carrito mt-auto" disabled>
              ✔ En el carrito
            </button>
          ) : (
            <button type="button" className="btn btn-retro mt-auto" onClick={() => onAgregar(producto)}>
              🛒 Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
