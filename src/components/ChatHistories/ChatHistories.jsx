import { Box, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { format, isToday, isYesterday } from "date-fns";
import { useEffect, useState } from "react";
import HistoryCard from "../HistoryCard/HistoryCard";

const ChatHistories = ({ pastConversations }) => {
    const [filterRating, setFilterRating] = useState(0);
    const [filteredList, setFilteredList] = useState([]);

    const getChatDateTitle = (timestamp) => {
        const date = new Date(JSON.parse(`"${timestamp}"`));

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

    const filterConversations = (e) => {
        const { value } = e.target;
        if (value === 0) {
            setFilteredList(pastConversations);
            return;
        }

        setFilterRating(value);
        let data = [...pastConversations];

        data = data.filter((item) => (item.chats.findIndex(elm => elm.rating === value) !== -1));

        setFilteredList(data);
    }

    useEffect(() => {
        const sortedList = pastConversations.sort(
            (a, b) => (
                new Date(JSON.parse(`"${b.timestamp}"`)) - new Date(JSON.parse(`"${a.timestamp}"`))
            )
        );
        setFilteredList(sortedList);
    }, [pastConversations]);

    return (
        <Stack spacing={4} sx={{ pt: 4 }}>
            <FormControl fullWidth>
                <InputLabel>Filter Rating</InputLabel>
                <Select
                    value={filterRating}
                    label="Filter Rating"
                    onChange={filterConversations}
                >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>1 Star</MenuItem>
                    <MenuItem value={2}>2 Star</MenuItem>
                    <MenuItem value={3}>3 Star</MenuItem>
                    <MenuItem value={4}>4 Star</MenuItem>
                    <MenuItem value={5}>5 Star</MenuItem>
                </Select>
            </FormControl>
            {filteredList.length > 0 && filteredList.map((conversation, idx) => (
                <Stack key={idx} spacing={1}>
                    <Typography variant="h4" fontWeight={500}>
                        {getChatDateTitle(conversation.timestamp)}
                    </Typography>
                    <HistoryCard chats={conversation.chats} />
                </Stack>
            ))}
            {filteredList.length === 0 &&
                <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3">No Results Found!</Typography>
                </Box>
            }
        </Stack>
    )
}

export default ChatHistories