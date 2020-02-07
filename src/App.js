import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Theme from "./Constants/Theme";

const TR = styled.tr`
  background-color: ${props => props.theme.dark__grey};
`;

function App() {
  return (
    <main>
      <ThemeProvider theme={Theme.primary}>
        Table Map Challenge
        <table>
          <thead>
            <TR>
              <td>Hi</td>
              <td>Hi</td>
              <td>Hi</td>
              <td>Hi</td>
            </TR>
          </thead>
        </table>
      </ThemeProvider>
    </main>
  );
}

export default App;
