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
            contrastText: '#000000',
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
            fontWeight: 400
        },
        h3: {
            fontSize: '24px',
            lineHeight: 1.724,
        },
        h4: {
            fontSize: '20px',
            lineHeight: 1.724,
        },
        body1: {
            fontFamily: 'Open Sans',
            fontSize: '16px',
            lineHeight: 1.362,
        },
        body2: {
            fontFamily: 'Open Sans',
            fontSize: '12px',
            lineHeight: 1.362,
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    }
});

theme.components.MuiButton = {
    defaultProps: {
        variant: 'contained'
    },
    styleOverrides: {
        contained: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
        }
    }
}

export default responsiveFontSizes(theme);