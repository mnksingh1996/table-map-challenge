import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
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
