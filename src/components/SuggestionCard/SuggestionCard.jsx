import { Card, CardContent, Typography } from "@mui/material"

const SuggestionCard = () => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h4" fontWeight={700}>Hi, what is the weather</Typography>
                <Typography variant="body1">Get immediate AI generated response</Typography>
            </CardContent>
        </Card>
    )
}

export default SuggestionCard