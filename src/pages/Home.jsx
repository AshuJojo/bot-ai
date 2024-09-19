import { useContext } from "react"

import { ChatsContext, QueriesContext } from "../context/Contexts"
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import Chats from "../components/Chats/Chats";
import { Box } from "@mui/material";

const Home = () => {
  const { queries } = useContext(QueriesContext);
  const { chats, setChats } = useContext(ChatsContext);

  return (
    <Box sx={{ mx: 2, mb: 10, flexGrow: 1, display: 'flex'}}>
      {
        chats.length === 0 ?
          <WelcomeScreen queries={queries} /> :
          <Chats chats={chats} setChats={setChats} />
      }
    </Box>
  )
}

export default Home