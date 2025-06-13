import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    primary: "#f55252",
    secondary: "#d04242",
    primaryButton: "#f57e68",
    secondaryButton: "#c36554",
  },
  fonts: ["sans-serif"],
};

export const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
