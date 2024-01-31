import { createTheme } from "@mui/material/styles";
import hatchPalltete from "./pallets";

const theme = createTheme({
  palette: {
    primary: {
      main: hatchPalltete.white,
    },
    secondary: {
      main: hatchPalltete.black,
    },
  },
  typography: {
    fontFamily: "Signika",
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#00AF51",
          },
          "& .MuiSvgIcon-root": { fontSize: 35 },
          label: {
            fontSize: "60px", // Specify your desired font size here
          },
        },
      },
    },
  },
});

export default theme;
