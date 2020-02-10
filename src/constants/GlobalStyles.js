import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    font-family: 'Lato', sans-serif;
  }

  body {
    box-sizing: border-box;
  }

  svg {
    height: 25px;
    width: 25px;
  }
`;

export default GlobalStyles;
