import { useContext } from "react"

import { QueriesContext } from "../context/Contexts"
import WelcomeScreen from "../components/WelcomeScreen/WelcomeScreen";
import Chats from "../components/Chats/Chats";
import { Box } from "@mui/material";

const Home = ({ chats, setChats }) => {
  const { queries } = useContext(QueriesContext);

  console.log('queries', queries)

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