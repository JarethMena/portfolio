import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/App.tsx'
import './tailwind/output.css'
import '../i18n.js'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
