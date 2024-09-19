import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PastConversations from './pages/PastConversations.jsx'

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
