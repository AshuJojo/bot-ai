import { Button, Stack, TextField } from "@mui/material";
import styles from './QueryForm.module.css';
import { useState } from "react";

const QueryForm = ({ query, setQuery, handleSave }) => {
    const [question, setQuestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form Submitted', question);
        setQuery({ ...query, question: question });
        setQuestion('');
    }

    return (
        <Stack
            component={'form'}
            className={styles.container} sx={{
                width: {
                    xs: '100%',
                    sm: `calc(100% - 240px)`
                }
            }}
            direction='row'
            spacing={2}
            onSubmit={handleSubmit}
        >
            <TextField
                variant="outlined"
                sx={{
                    backgroundColor: 'white',
                    width: '100%',
                    '& input': {
                        padding: '0.4rem 0.5rem'
                    }
                }}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <Button type="submit" disabled={!question}>Ask</Button>
            <Button type="button" onClick={handleSave}>Save</Button>
        </Stack >
    )
}

export default QueryForm