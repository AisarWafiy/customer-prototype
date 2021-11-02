import { createTheme } from "@material-ui/core";
import { blue, green, grey, orange, red } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      contrastText: "#fff",
      light: "#060b71",
      main: "#060b71",
      dark: "#060b71",
    },
    secondary: {
      contrastText: "#000",
      light: "#9ab6da",
      main: "#9ab6da",
      dark: "#9ab6da",
    },
    success: {
      contrastText: "#fff",
      dark: green[900],
      main: green[600],
      light: green[400],
    },
    info: {
      contrastText: "#fff",
      dark: blue[900],
      main: blue[600],
      light: blue[400],
    },
    warning: {
      contrastText: "#fff",
      dark: orange[900],
      main: orange[600],
      light: orange[400],
    },
    error: {
      contrastText: "#fff",
      dark: red[900],
      main: red[600],
      light: red[400],
    },
    text: {
      primary: "#212121",
      secondary: "#878787",
      link: "#2F53E6",
    },
    background: {
      default: "#212121",
      paper: "#fff",
    },
    icon: "#0000",
    divider: grey[200],
  },
  typography: {
    fontFamily: ["Open Sans"].join(","),
    body1: {
      fontSize: "14px",
      fontFamily: "Open Sans",
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
    modal: 1300,
  },
  overrides: {
    MuiAppBar: {
      root: {
        width: "100%",
        display: "flex",
        zIndex: 1200,
        boxSizing: "border-box",
        flexShrink: 0,
        flexDirection: "column",
      },
    },
    MuiToolbar: {
      regular: {
        minHeight: "64px",
        "@media (min-width: 600px)": {
          minHeight: "72px",
        },
      },
    },
    MuiDialogActions: {
      root: {
        flex: "0 0 auto",
        display: "flex",
        padding: "8px",
        alignItems: "center",
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        padding: "8px 8px",
        width: "168px",
        textTransform: "unset",
        fontSize: "16px",
        lineHeight: 1.5,
        fontWeight: "bold",
      },
      contained: {
        padding: "8px 8px",
      },
      containedPrimary: {
        backgroundColor: "#0521d8",
        "&:hover": {
          backgroundColor: "#ffff",
          color: "#0521d8",
          border: "solid 1px #0521d8",
        },
      },
      outlined: {
        padding: "8px 8px",
      },
      outlinedPrimary: {
        color: "#0521d8",
        border: "solid 1px #0521d8",
        "&:hover": {
          backgroundColor: "#0521d8",
          color: "#ffff",
        },
      },
    },
  },
});
