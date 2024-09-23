import { Card, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { QueryContext } from "../../context/Contexts";

const SuggestionCard = ({ suggestion }) => {
    const { query, setQuery } = useContext(QueryContext);

    const handleClick = () => {
        const newQuery = { ...query, question: suggestion };
        setQuery(newQuery);
    }

    return (
        <Card sx={{ height: '100%' }} onClick={handleClick}>
            <CardContent>
                <Typography variant="h4" fontWeight={700}>{suggestion}</Typography>
                <Typography variant="body1">Get immediate AI generated response</Typography>
            </CardContent>
        </Card>
    )
}

export default SuggestionCard