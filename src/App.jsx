import { Box } from "@mui/material"
import Navbar from "./components/Navbar/Navbar"
import QueryForm from "./components/QueryForm/QueryForm"
import Home from "./pages/Home"
import { useState } from "react"
import { QueriesContext } from "./context/Contexts";
import data from './data/queries.json';

function App() {
  const [queries, setQueries] = useState(data || []);

  return (
    <>
      <QueriesContext.Provider value={{ queries, setQueries }}>
        <Navbar>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '90vh'
          }}>
            <Home />
            <QueryForm />
          </Box>
        </Navbar>
      </QueriesContext.Provider>
    </>
  )
}

export default App
