import { createTheme, responsiveFontSizes } from "@mui/material";
import { indigo, purple } from "@mui/material/colors";



const theme = createTheme({
    typography: {
        fontFamily: [
            'Vazirmatn'
        ].join(','),
        button: {
            fontSize: 12,
            fontWeight: 800,
            '@media only screen and (min-width: 420px) and (max-width: 980px)': {
                fontSize: 12,
            },
            '@media only screen and (max-width:420px)': {
                fontSize: 8,
            }
            // [theme.breakpoints.up('md')]: {
            //     fontSize: '2.4rem',
            // },
        },

        body2: {
            fontSize: 16,
        }
    },
    components: {
        MuiCard: {
            variants: [{
                props: { variant: 'dashed' },
                style: {
                    textTransform: 'none',
                    border: `2px dashed ${purple[500]}`,
                },

            }]
        }
    },
    palette: {
        base: {
            main: "#0E3151",
            light: "#0277bd",// indigo[400],
            mid: "#01579b",

        },
        disable: {
            main: "#eeeeee",//grey[200]
            light: "#e0e0e0",
            dark: "#bdbdbd"
        },


    },
});



export { theme }