// Función reutilizable: formatea un número como precio en pesos
// Se usa en ProductCard, CartItem y CartTotal para no repetir la lógica
export function formatPrecio(valor) {
  return valor.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  })
}
