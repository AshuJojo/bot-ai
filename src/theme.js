import { createTheme, responsiveFontSizes } from "@mui/material/styles";


const theme = createTheme({
    palette: {
        primary: {
            main: '#9785BA',
            light: '#AF9FCD',
            contrastText: '#F9FAFA',
        },
        secondary: {
            main: '#D7C7F4',
            contrastText: '#FFFFFF',
        }
    },
    typography: {
        fontFamily: "Ubuntu, Open Sans",
        h1: {
            fontSize: '32px',
            fontWeight: 700,
            lineHeight: 2.298,
        },
        h2: {
            fontSize: '28px',
            lineHeight: 2.011,
        },
        h3: {
            fontSize: '24px',
            lineHeight: 1.724,
        },
        body1: {
            fontFamily: 'Open Sans',
            fontSize: '16px',
            lineHeight: 1.362,
        }
    },
});

export default responsiveFontSizes(theme);