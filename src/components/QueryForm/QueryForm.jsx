import { Button, Stack, TextField } from "@mui/material";
import styles from './QueryForm.module.css';

const QueryForm = () => {
    return (
        <Stack
            className={styles.container} sx={{
                width: {
                    xs: '100%',
                    sm: `calc(100% - 240px)`
                }
            }}
            direction='row'
            spacing={2}
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
            />
            <Button>Ask</Button>
            <Button>Save</Button>
        </Stack >
    )
}

export default QueryForm