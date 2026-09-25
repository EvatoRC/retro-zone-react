import { formatPrecio } from '../utils/formatPrecio'

/**
 * ProductCard
 * Componente funcional que recibe un producto (props) y una función
 * "onAgregar" para agregarlo al carrito.
 *
 * Renderizado condicional: si el producto está en oferta (enOferta === true)
 * se muestra el precio normal tachado + el precio de oferta + una etiqueta
 * "OFERTA". Si no está en oferta, solo se muestra el precio normal.
 */
function ProductCard({ producto, onAgregar }) {
  const { nombre, precioNormal, precioOferta, enOferta, imagen, descripcion } = producto

  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card h-100 product-card">
        {/* Renderizado condicional con && : la etiqueta OFERTA solo aparece si enOferta es true */}
        {enOferta && <span className="badge-oferta">OFERTA</span>}

        <img src={imagen} className="card-img-top" alt={`Portada de ${nombre}`} />

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

          <button
            type="button"
            className="btn btn-retro mt-auto"
            onClick={() => onAgregar(producto)}
          >
            🛒 Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
