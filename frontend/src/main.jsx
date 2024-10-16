import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './router/Router'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router = {router} />
  </AuthProvider>,
)
