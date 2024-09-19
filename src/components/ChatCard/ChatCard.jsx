import { alpha, Avatar, Card, Stack, Typography, useTheme } from "@mui/material"

const ChatCard = ({ isQuestion, content, avatar, time }) => {
    const theme = useTheme();

    return (
        <Card sx={{
            py: 1,
            px: 2,
            borderRadius: 3,
            background: alpha(theme.palette.secondary.main, 0.13)
        }}>
            <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
                <Avatar
                    src={avatar}
                    sx={{
                        width: 50,
                        height: 50
                    }}
                />
                <Stack>
                    <Typography variant="body1" fontWeight={700}>{isQuestion ? 'You' : 'Soul AI'}</Typography>
                    <Typography variant="body1">{content}</Typography>
                    <Typography variant="body2" sx={{ pt: 2 }}>{time}</Typography>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ChatCard