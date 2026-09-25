/**
 * Navbar
 * Barra superior con el contador de productos en el carrito.
 * "totalItems" se calcula en App.jsx a partir del length del array cart
 * y se pasa como prop (dato derivado del estado, no un estado propio).
 */
function Navbar({ totalItems }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-retro sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#inicio">
          💾 Retro Zone
        </a>
        <ul className="navbar-nav ms-auto flex-row gap-2">
          <li className="nav-item">
            <a className="nav-link" href="#productos">
              🎮 Catálogo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-carrito" href="#carrito" aria-label="Ir al carrito de compras">
              🛒 Carrito <span className="contador-carrito">{totalItems}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
