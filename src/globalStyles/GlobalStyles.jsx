import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: clamp(1.3rem, 60%, 3rem);
},
  body {
   background-color: #8080801f;
  }
`;

export default GlobalStyles;
