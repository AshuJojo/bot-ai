import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ChatHistories from "../components/ChatHistories/ChatHistories";
import { PastConversionContext } from "../context/Contexts";

const PastConversations = () => {
  const { pastConversations } = useContext(PastConversionContext);

  return (
    <Box sx={{ mx: 2, mb: 10, flexGrow: 1, display: 'flex' }}>
      {
        (pastConversations.length > 0) ?
          <Stack direction="column" spacing={2} width='100%'>
            <ChatHistories pastConversations={pastConversations}/>
          </Stack> :
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4">No Chat Here! Please <Link to="/">Start Your Chat</Link>.</Typography>
          </Box>
      }
    </Box>
  )
}

export default PastConversations