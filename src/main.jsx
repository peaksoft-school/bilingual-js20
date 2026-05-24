import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { Themes } from './components/ui/Themes.jsx'
import { Notification } from './components/ui/toast/Notification.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>

    <Notification />
  </Themes>
)
