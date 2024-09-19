import { Avatar, Box, Card, Rating, Stack, Typography, useTheme } from "@mui/material"
import soulAvatar from '../../assets/images/soul-avatar.png';
import userAvatar from '../../assets/images/user-avatar.png';
import { format } from "date-fns";

const Row = ({ isQuestion, content, rating, time, feedback }) => {
    return (
        <Stack direction='row' spacing={2} sx={{ alignItems: 'start', p: 2 }}>
            <Avatar
                src={isQuestion ? userAvatar : soulAvatar}
                sx={{
                    width: 50,
                    height: 50
                }}
            />
            <Stack>
                <Typography variant="body1" fontWeight={700}>{isQuestion ? 'You' : 'Soul AI'}</Typography>
                <Typography variant="body1">{content}</Typography>
                <Stack direction='row' spacing={1} sx={{ alignItems: 'end', pt: 2 }}>
                    <Typography variant="body2" pr={1}>{time}</Typography>
                    {!isQuestion && rating &&
                        <Rating
                            value={rating}
                            sx={{ width: 'fit-content', fontSize: 16, color: 'black' }}
                            readOnly
                        />
                    }
                </Stack>
                {feedback && <Typography sx={{ mt: 2 }}><span style={{ fontWeight: 'bold' }}>Feedback:</span> {feedback}</Typography>}
            </Stack>
        </Stack>
    )
}

const HistoryCard = ({ chats }) => {

    const theme = useTheme();

    const formatDate = (dateJSON) => {
        const date = new Date(JSON.parse(`"${dateJSON}"`));
        const formatedDate = format(date, "h:m a")
        return formatedDate;
    }

    return (
        <Card sx={{
            borderRadius: 2,
            background: `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.main} 100%)`
        }}>
            {chats.map((chat, idx) => (
                <Box key={idx}>
                    <Row isQuestion={true} content={chat.question} time={formatDate(chat.time)} />
                    <Row isQuestion={false} content={chat.response} time={formatDate(chat.time)} rating={chat.rating} feedback={chat.feedback} />
                </Box>
            ))}
        </Card>
    )
}

export default HistoryCard