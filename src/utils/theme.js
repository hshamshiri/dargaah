import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";


const theme = createTheme({
    typography: {
        fontFamily: [
            'Vazirmatn'
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    padding: "50px 20px",
                    fontSize: "20px",
                    fontWeight: "500"
                }
            }
        }
    },
    palette: {
        main: {
            light: "#0277bd",// indigo[400],
            mid: "#01579b",
            dark: "#0E3151",
        },
        disable: {
            light: "#eeeeee",//grey[200]
            mid: "#e0e0e0",
            dark: "#bdbdbd"
        },
    },
});


export { theme }