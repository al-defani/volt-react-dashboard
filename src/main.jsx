import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css' // Jika ada CSS global

const root = createRoot(document.getElementById('root'))
root.render(<App />)
