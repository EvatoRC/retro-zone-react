import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite para el proyecto Retro Zone (React)

export default defineConfig({
  plugins: [react()],
  base: '/retro-zone-react/',
})
