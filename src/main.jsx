import { ThemeProvider } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import PastConversations from './pages/PastConversations.jsx'
import theme from './theme.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/past-conversations',
        element: <PastConversations />
      },
      {
        path: '/',
        element: <Home />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>

      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
