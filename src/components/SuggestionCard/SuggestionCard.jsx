import { Card, CardContent, Typography } from "@mui/material"

const SuggestionCard = ({ suggestion }) => {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h4" fontWeight={700}>{suggestion}</Typography>
                <Typography variant="body1">Get immediate AI generated response</Typography>
            </CardContent>
        </Card>
    )
}

export default SuggestionCard