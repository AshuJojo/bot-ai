import { Box } from "@mui/material"
import Navbar from "./components/Navbar/Navbar"
import QueryForm from "./components/QueryForm/QueryForm"
import Home from "./pages/Home"
import { useEffect, useState } from "react"
import { QueriesContext } from "./context/Contexts";
import data from './data/queries.json';

function App() {
  const [queries, setQueries] = useState(data || []);
  const [chats, setChats] = useState([
    {
      question: "Hi",
      response: "Hi There. How can I assist you today",
      time: '10:34 AM'
    }
  ]);
  const [query, setQuery] = useState({
    question: '',
    response: '',
  });
  const [isMounted, setIsMounted] = useState(false);

  const getResponse = (que) => {
    const res = queries.find((item) => item.question.toLowerCase() === que.toLowerCase());


    if (res && res.response) {
      return res.response;
    } else {
      return 'As an AI Language Model, I don’t have the details';
    }
  }

  useEffect(() => {
    if (isMounted) {
      const res = getResponse(query.question);
      const newQueryObj = { ...query, response: res };
      setQuery(newQueryObj);
      setChats([...chats, newQueryObj]);
    }

    setIsMounted(true)
  }, [query.question]);

  return (
    <>
      <QueriesContext.Provider value={{ queries, setQueries }}>
        <Navbar>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '90vh'
          }}>
            <Home chats={chats} setChats={setChats} />
            <QueryForm query={query} setQuery={setQuery} />
          </Box>
        </Navbar>
      </QueriesContext.Provider>
    </>
  )
}

export default App
