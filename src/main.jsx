import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/Routes.jsx'
import { RouterProvider } from "react-router/dom";
import AuthProvieder from './Provider/AuthProvieder.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvieder>
      <RouterProvider router={router} />
    </AuthProvieder>
  </StrictMode>,
)
