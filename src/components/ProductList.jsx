import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

// Pequeña espera para simular que los datos vienen de un servidor externo
// (y así se alcanza a ver el mensaje "Cargando..."). Poner 0 para quitarla.
const DEMORA_SIMULADA_MS = 600

/**
 * ProductList
 * Muestra el catálogo de productos.
 *
 * useState maneja:
 * - productos: la lista del catálogo (parte vacía y se llena al cargar el JSON)
 * - cargando / error: para el renderizado condicional según el estado de la carga
 * - intento: se incrementa con el botón "Reintentar" para volver a ejecutar el useEffect
 * - busqueda: el texto del buscador
 *
 * useEffect carga los productos desde public/data/productos.json con fetch.
 *
 * Props:
 * - idsEnCarrito: ids de los productos que ya están en el carrito
 * - onAgregarAlCarrito: función que se pasa hacia abajo a cada ProductCard
 */
function ProductList({ idsEnCarrito, onAgregarAlCarrito }) {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)
  const [busqueda, setBusqueda] = useState('')

  // Efecto secundario: cargar los datos al montar el componente (y al reintentar)
  useEffect(() => {
    const controlador = new AbortController()
    setCargando(true)
    setError(null)

    const cargarProductos = async () => {
      try {
        // BASE_URL hace que la ruta funcione tanto en local como en gh-pages
        const respuesta = await fetch(`${import.meta.env.BASE_URL}data/productos.json`, {
          signal: controlador.signal,
        })
        if (!respuesta.ok) {
          throw new Error(`Error HTTP ${respuesta.status}`)
        }
        const datos = await respuesta.json()

        await new Promise((resolver) => setTimeout(resolver, DEMORA_SIMULADA_MS))
        if (controlador.signal.aborted) return // el componente se desmontó mientras esperaba

        setProductos(datos) // actualiza el estado con los datos cargados
        setCargando(false)
      } catch (err) {
        if (controlador.signal.aborted) return
        console.error(err)
        setError('No se pudo cargar el catálogo de juegos.')
        setCargando(false)
      }
    }

    cargarProductos()

    // Limpieza: si el componente se desmonta se cancela la petición
    return () => controlador.abort()
  }, [intento])

  // Filtro del buscador: se recalcula en cada render según el estado "busqueda"
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  // Renderizado condicional: según el estado se muestra cargando, error, sin resultados o el grid
  let contenido
  if (cargando) {
    contenido = (
      <div className="catalogo-estado text-center py-4" role="status">
        <div className="spinner-border spinner-border-sm me-2" aria-hidden="true"></div>
        Cargando catálogo...
      </div>
    )
  } else if (error) {
    contenido = (
      <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
        <span>{error}</span>
        <button type="button" className="btn btn-retro btn-sm" onClick={() => setIntento(intento + 1)}>
          Reintentar
        </button>
      </div>
    )
  } else if (productosFiltrados.length === 0) {
    contenido = (
      <p className="catalogo-estado">No se encontraron juegos que coincidan con "{busqueda}".</p>
    )
  } else {
    contenido = (
      <div className="row g-4">
        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            enCarrito={idsEnCarrito.includes(producto.id)}
            onAgregar={onAgregarAlCarrito}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="productos" className="container">
      <h2 className="section-title">Catálogo de juegos</h2>

      {/* Buscador controlado con useState + evento onChange (solo cuando ya hay productos cargados) */}
      {!cargando && !error && (
        <div className="d-flex gap-2 mb-3">
          <input
            type="search"
            className="form-control input-retro"
            placeholder="Buscar juego..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            aria-label="Buscar juego"
          />
          {busqueda && (
            <button type="button" className="btn btn-retro" onClick={() => setBusqueda('')}>
              Limpiar
            </button>
          )}
        </div>
      )}

      {contenido}
    </section>
  )
}

export default ProductList
