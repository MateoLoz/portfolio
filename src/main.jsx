
import { createRoot } from 'react-dom/client'
import { CvProvider } from './context/CvContext.jsx'
import './index.css'
import '../assets/fonts/fonts.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CvProvider>
    <App />
  </CvProvider>,
)
