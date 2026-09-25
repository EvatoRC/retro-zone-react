import { useState } from 'react'
import ProductCard from './ProductCard'

/**
 * ProductList
 * Muestra el catálogo completo de productos.
 * - useState maneja el texto del buscador (estado local del componente).
 * - Renderizado condicional: si el filtro no encuentra resultados, se
 *   muestra un mensaje en vez del grid de productos.
 *
 * Props:
 * - productos: array de productos (viene de src/data/productos.js)
 * - onAgregarAlCarrito: función que se pasa hacia abajo a cada ProductCard
 */
function ProductList({ productos, onAgregarAlCarrito }) {
  const [busqueda, setBusqueda] = useState('')

  // Función reutilizable de filtrado: se recalcula en cada render según el estado "busqueda"
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  const manejarCambioBusqueda = (evento) => {
    setBusqueda(evento.target.value)
  }

  return (
    <section id="productos" className="container">
      <h2 className="section-title">Catálogo de juegos</h2>

      {/* Buscador controlado con useState + evento onChange */}
      <div className="d-flex gap-2 mb-3">
        <input
          type="search"
          className="form-control input-retro"
          placeholder="Buscar juego..."
          value={busqueda}
          onChange={manejarCambioBusqueda}
          aria-label="Buscar juego"
        />
        {busqueda && (
          <button type="button" className="btn btn-retro" onClick={() => setBusqueda('')}>
            Limpiar
          </button>
        )}
      </div>

      {/* Renderizado condicional: mensaje de "sin resultados" vs grid de productos */}
      {productosFiltrados.length === 0 ? (
        <p className="catalogo-estado">No se encontraron juegos que coincidan con "{busqueda}".</p>
      ) : (
        <div className="row g-4">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} onAgregar={onAgregarAlCarrito} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductList
