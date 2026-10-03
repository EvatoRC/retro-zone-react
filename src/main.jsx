import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Bootstrap 5 instalado con npm (va antes de styles.css para que mis estilos lo puedan sobrescribir)
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

// Renderiza la aplicación principal dentro del <div id="root"> de index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
