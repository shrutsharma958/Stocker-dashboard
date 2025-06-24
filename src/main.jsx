import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'

import App from './App'
import { GeneralContextProvider } from './components/GeneralContext';

import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { CookiesProvider } from "react-cookie"; // ✅ import


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>

    </BrowserRouter>
  </StrictMode>,
)
