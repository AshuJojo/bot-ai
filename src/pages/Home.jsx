import { useContext } from "react";

import { Box } from "@mui/material";
import Chats from "../components/Chats/Chats";
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import { ChatsContext, QueriesContext } from "../context/Contexts";

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