import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';

// Prevent the browser from restoring scroll position on refresh/navigation
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
  window.addEventListener('beforeunload', () => window.scrollTo(0, 0));
  window.addEventListener('load', () => window.scrollTo(0, 0));
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 
   <Routes>
        <Route path="/" element={<App />} />
      </Routes>
  </BrowserRouter>
)
