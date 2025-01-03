import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './components/Greeting.jsx'
import Test from './components/test.jsx'
import Render_app from './components/Render_app.jsx'
import Conditional_render from './components/Conditional_render.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Conditional_render />
  </StrictMode>,
)
