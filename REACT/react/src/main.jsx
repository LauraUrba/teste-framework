import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <h1> Olá, Mundo! Testando o react.js</h1>
  </StrictMode>,
)
