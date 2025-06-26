import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import 'primereact/resources/themes/lara-light-blue/theme.css'  // theme
import 'primeicons/primeicons.css'  // icons
import 'primereact/resources/primereact.min.css'

import "./index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
