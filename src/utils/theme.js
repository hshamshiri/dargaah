import { createTheme, responsiveFontSizes } from "@mui/material";
import { indigo, purple, blueGrey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: ["Vazirmatn"].join(","),
    fontSize: 12,

    small: {
      fontSize: 10
    },
    medium: {
      fontSize: 12
    },
    tab: {
      fontSize: 11,
      fontWeight: 800,
      "@media only screen and (min-width: 420px) and (max-width: 980px)": {
        fontSize: 10,
      },
      "@media only screen and (max-width:420px)": {
        fontSize: 8,
      },
    },
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: [16, "!important"],
    },
    item: {
      fontSize: 12,
      fontWeight: 200,
    },
  },
  components: {
    MuiCard: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${purple[500]}`,
          },
        },
      ],
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${purple[500]}`,
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `1px dashed ${blueGrey[500]}`,
          },
        },
      ],
    },
  },
  palette: {
    base: {
      main: "#0E3151",
      light: "#0277bd", // indigo[400],
      mid: "#01579b",
    },
    disable: {
      main: "#eeeeee", //grey[200]
      light: "#e0e0e0",
      dark: "#bdbdbd",
    },
    drawer: { main: "#27327a" },
    drawerItem: { main: "#35b4cf" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export { theme };
