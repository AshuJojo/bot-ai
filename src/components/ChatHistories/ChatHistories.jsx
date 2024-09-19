import { Stack, Typography } from "@mui/material";
import { format, isToday, isYesterday } from "date-fns";
import HistoryCard from "../HistoryCard/HistoryCard";
import { useEffect, useState } from "react";

const ChatHistories = ({ pastConversations }) => {
    const [filteredList, setFilteredList] = useState([]);
    console.log('pastConversations', pastConversations);

    const getChatDateTitle = (timestamp) => {
        console.log('timestamp', timestamp);
        const date = new Date(JSON.parse(`"${timestamp}"`));
        console.log('date', date);

        let dateTitle = '';
        if (isToday(date))
            dateTitle = "Today's Chats";
        else if (isYesterday(date))
            dateTitle = "Yesterday's Chats";
        else {
            const formatedDate = format(date, 'dd MMM yyyy');
            dateTitle = `${formatedDate}'s Chats`;
        }

        return dateTitle
    }

    useEffect(() => {
        const sortedList = pastConversations.sort(
            (a, b) => (
                new Date(JSON.parse(`"${b.timestamp}"`)) - new Date(JSON.parse(`"${a.timestamp}"`))
            )
        );
        setFilteredList(sortedList);
    }, [pastConversations])

    return (
        <Stack spacing={4}>
            
            {filteredList.map((conversation, idx) => (
                <Stack direction='column' key={idx} spacing={1}>
                    <Typography variant="h4" fontWeight={500}>
                        {getChatDateTitle(conversation.timestamp)}
                    </Typography>
                    <HistoryCard chats={conversation.chats} />
                </Stack>
            ))}
        </Stack>
    )
}

export default ChatHistories