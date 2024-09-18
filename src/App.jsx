import { Box } from "@mui/material"
import Navbar from "./components/Navbar/Navbar"
import QueryForm from "./components/QueryForm/QueryForm"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Navbar>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Home />
          <QueryForm />
        </Box>
      </Navbar>
    </>
  )
}

export default App
