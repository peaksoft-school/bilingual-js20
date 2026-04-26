import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { Themes } from './components/ui/Themes.jsx'
import Notification from './components/ui/toast/Notification.jsx'

createRoot(document.getElementById('root')).render(
  <Themes>
    <App />
    <Notification />
  </Themes>
)
