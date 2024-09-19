import { Box, CssBaseline } from "@mui/material"
import Navbar from "./components/Navbar/Navbar"
import QueryForm from "./components/QueryForm/QueryForm"
import { useEffect, useState } from "react"
import { ChatsContext, PastConversionContext, QueriesContext, QueryContext } from "./context/Contexts";
import data from './data/queries.json';
import { Outlet, useLocation } from "react-router-dom"

function App() {
  const location = useLocation();
  const [queries, setQueries] = useState(data || []);
  const [pastConversations, setPastConversations] = useState([]);

  const [chats, setChats] = useState([]);

  const [query, setQuery] = useState({
    question: '',
    response: '',
  });

  console.log('chats', chats);
  console.log('pastConversations', pastConversations);

  const [isMounted, setIsMounted] = useState(false);

  const handleSave = () => {
    console.log('save Conversation');
    const data = [...pastConversations];

    const conversations = { chats, timestamp: new Date().toJSON() };
    data.push(conversations);

    setPastConversations(data);
    setChats([]);
    localStorage.setItem('pastConversations', JSON.stringify(data));
  }

  const getResponse = (que) => {
    const res = queries.find((item) => item.question.toLowerCase() === que.toLowerCase());

    if (res && res.response) {
      return res.response;
    } else {
      return "As an AI Language Model, I don't have the details";
    }
  }

  useEffect(() => {
    if (isMounted) {
      const res = getResponse(query.question);
      const newQueryObj = { ...query, response: res };
      setQuery(newQueryObj);

      const newChat = [...chats];

      newChat.push({ ...newQueryObj, time: new Date().toJSON() });

      setChats(newChat);
    }

    setIsMounted(true)
  }, [query?.question]);

  useEffect(() => {
    if (!isMounted) {
      const persistedConversations = JSON.parse(localStorage.getItem('pastConversations') || '[]');

      setPastConversations(persistedConversations);
    }
  }, [])

  return (
    <>
      <QueriesContext.Provider value={{ queries, setQueries }}>
        <PastConversionContext.Provider value={{ pastConversations, setPastConversations }}>
          <ChatsContext.Provider value={{ chats, setChats }}>
            <QueryContext.Provider value={{ query, setQuery }}>
              <CssBaseline />
              <Navbar>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '90vh'
                }}>
                  <Outlet />
                  {location.pathname === '/' && <QueryForm query={query} setQuery={setQuery} handleSave={handleSave} />}
                </Box>
              </Navbar>
            </QueryContext.Provider>
          </ChatsContext.Provider>
        </PastConversionContext.Provider>
      </QueriesContext.Provider>
    </>
  )
}

export default App
