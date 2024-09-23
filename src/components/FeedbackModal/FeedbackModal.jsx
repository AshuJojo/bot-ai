import { Box, Button, Modal, Stack, TextField, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbBulb } from "react-icons/tb";

const FeedbackModal = ({ isOpen, handleClose, handleFeedback }) => {
    const theme = useTheme();
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedback) {
            handleFeedback(feedback)
            handleClose();
        } else {
            setError('This field cannot be blank.')
        }
    }

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Stack direction="column" spacing={2}
                sx={{
                    background: theme.palette.secondary.light,
                    outline: 'none',
                    '&:focus': {
                        outline: 'none'
                    },
                    borderRadius: 2,
                    p: 1
                }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TbBulb fontSize={40} />
                        <Typography variant="h4">Provide Additional Feedback</Typography>
                    </Box>
                    <IoClose fontSize={30} onClick={handleClose} />
                </Box>
                <Stack component={'form'} direction='column' spacing={1} onSubmit={handleSubmit} sx={{ alignItems: 'end' }}>

                    <TextField
                        multiline
                        rows={4}
                        maxRows={4}
                        value={feedback}
                        onChange={(e) => { setFeedback(e.target.value) }}
                        sx={{
                            width: '100%',
                            '& .MuiInputBase-root': {
                                background: 'white',
                                borderRadius: 2,
                            }
                        }}
                    />

                    {error &&
                        <Typography variant="body1" color={theme.palette.primary.error} sx={{ width: '100%', textAlign: 'start' }}>
                            {error}
                        </Typography>
                    }

                    <Button type="submit" sx={{ width: 'fit-content' }}>Submit</Button>
                </Stack>
            </Stack>
        </Modal >
    )
}

export default FeedbackModal