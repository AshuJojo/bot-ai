import { Box, Stack } from "@mui/material";
import ChatCard from "../ChatCard/ChatCard";
import soulAvatar from '../../assets/images/soul-avatar.png';
import userAvatar from '../../assets/images/user-avatar.png';
import { format } from "date-fns";

const Chats = ({ chats, setChats }) => {
    console.log('chats', chats);

    const handleRating = (newValue, idx) => {
        const newChats = [...chats];
        newChats[idx] = { ...chats[idx], rating: newValue }
        setChats(newChats)
    }
    const handleFeedback = (newValue, idx) => {
        const newChats = [...chats];
        newChats[idx] = { ...chats[idx], feedback: newValue }
        setChats(newChats)
    }

    const formatDate = (dateJSON) => {
        const date = new Date(JSON.parse(`"${dateJSON}"`));
        const formatedDate = format(date, "h:m a")
        console.log('date', date)
        return formatedDate;
    }

    return (
        <>
            {
                chats.length > 0 ?
                    <Stack width='100%' spacing={2}>
                        {chats.map((item, idx) => (
                            <Box key={idx} sx={{ display: 'flex', width: '100%', flexDirection: 'column', gap: 2 }}>
                                <ChatCard isQuestion={true} content={item.question} avatar={userAvatar} time={formatDate(item.time)} />
                                <ChatCard
                                    isQuestion={false}
                                    content={item.response}
                                    avatar={soulAvatar}
                                    time={formatDate(item.time)}
                                    rating={item.rating || 0}
                                    feedback={item.feedback || ''}
                                    handleRating={(e, newValue) => { handleRating(newValue, idx) }}
                                    handleFeedback={(newValue) => { handleFeedback(newValue, idx) }}
                                />
                            </Box>
                        ))}
                    </Stack>
                    :
                    <></>
            }
        </>
    )
}

export default Chats