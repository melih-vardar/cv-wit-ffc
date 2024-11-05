import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { LangContextProvider } from './context/LangContext.jsx'

createRoot(document.getElementById('root')).render(
  <LangContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </LangContextProvider>
)
