import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9D1D27",
    },
    sysgrey: {
      main: "#303030",
      secondary: "#6F6F6F",
      dark: "#101010",
    },
    background: {
      default: "#0E0E0E",
      paper: "#464646",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A6A6A6",
    },
  },
  typography: {
    fontFamily: '"Red Hat Display",  sans-serif',
    fontSize: 16,
    "32-700": {
      fontWeight: 700,
      fontSize: "32px",
    },

    "28-700": {
      fontWeight: 700,
      fontSize: "28px",
    },
    
    "25-700": {
      fontWeight: 700,
      fontSize: "25px",
    },
    "25-600": {
      fontWeight: 600,
      fontSize: "25px",
    },


    "24-700": {
      fontWeight: 700,
      fontSize: "24px",
    },

    

    "20-700": {
      fontWeight: 700,
      fontSize: "20px",
    },
    "20-600": {
      fontWeight: 600,
      fontSize: "20px",
    },
    "20-500": {
      fontWeight: 500,
      fontSize: "20px",
    },
    "20-300": {
      fontWeight: 300,
      fontSize: "20px",
    },
    "18-500": {
      fontWeight: 500,
      fontSize: "18px",
    },
    "18-400": {
      fontWeight: 400,
      fontSize: "18px",
    },
    "16-400": {
      fontWeight: 400,
      fontSize: "16px",
    },
    "14-500": {
      fontWeight: 500,
      fontSize: "14px",
    },
    "14-400": {
      fontWeight: 400,
      fontSize: "14px",
    },
    "12-400": {
      fontWeight: 400,
      fontSize: "12px",
    },
    "10-500": {
      fontWeight: 500,
      fontSize: "10px",
    },
    "10-300": {
      fontWeight: 300,
      fontSize: "10px",
    },
    h1: {
      fontWeight: 700,
      fontSize: "30px",
    },
    h2: {
      fontWeight: 600,
      fontSize: "30px",
    },
    button: {
      fontWeight: 500,
      fontSize: "16px",
    },
    h3: {
      fontWeight: 600,
      fontSize: "20px",
    },
    h4: {
      fontWeight: 700,
      fontSize: "20px",
    },
    h5: {
      fontWeight: 600,
      fontSize: "20px",
    },
    h6: {
      fontWeight: 600,
      fontSize: "12px",
    },
    subtitle1: {
      fontSize: "50px",
      fontWeight: 900,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    body1: {
      fontWeight: 600,
      fontSize: "16px",
    },
    body2: {
      fontWeight: 600,
      fontSize: "16px",
    },
  },
});

export const theme = baseTheme;
