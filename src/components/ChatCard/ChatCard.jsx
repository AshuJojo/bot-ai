import { alpha, Avatar, Card, Rating, Stack, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import { PiThumbsUpBold } from "react-icons/pi";
import FeedbackModal from "../FeedbackModal/FeedbackModal";

const ChatCard = ({ isQuestion, content, avatar, time, rating, feedback, handleRating, handleFeedback }) => {
    const [isRatingShown, setIsRatingShown] = useState(false);
    const [showLikeDislike, setShowLikeDislike] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const theme = useTheme();

    const showRating = () => {
        setIsRatingShown(true);
    }

    return (
        <Card sx={{
            py: 1,
            px: 2,
            borderRadius: 3,
            background: alpha(theme.palette.secondary.main, 0.13)
        }} onMouseEnter={() => { setShowLikeDislike(true) }} onMouseLeave={() => setShowLikeDislike(false)}>
            <Stack direction='row' spacing={2} sx={{ alignItems: 'start' }}>
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
                    <Stack direction='row' spacing={1} sx={{ alignItems: 'end', pt: 2 }}>
                        <Typography variant="body2" pr={1}>{time}</Typography>
                        {!isQuestion &&
                            <>
                                {isRatingShown && <Rating
                                    value={rating}
                                    onChange={handleRating}
                                    sx={{ width: 'fit-content', fontSize: 16 }}
                                />}
                                {showLikeDislike &&
                                    <>

                                        <PiThumbsUpBold style={{
                                            marginBottom: 1,
                                            fontSize: 16
                                        }} onClick={showRating} />
                                        <PiThumbsUpBold
                                            style={{
                                                marginBottom: 1,
                                                transform: 'scale(-1, -1)',
                                                fontSize: 16
                                            }}
                                            onClick={() => { setShowFeedbackModal(true) }}
                                        />
                                    </>
                                }
                            </>
                        }
                    </Stack>
                    {feedback && <Typography sx={{ mt: 2 }}><span style={{ fontWeight: 'bold' }}>Feedback:</span> {feedback}</Typography>}
                </Stack>
            </Stack>
            <FeedbackModal isOpen={showFeedbackModal} handleClose={() => { setShowFeedbackModal(false) }} handleFeedback={handleFeedback} />
        </Card >
    )
}

export default ChatCard