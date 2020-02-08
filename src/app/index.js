import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Theme from "../constants/Theme";

import MapComponent from "../shared/Map";
import TableComponent from "../shared/Table";

import GlobalStyles from "../constants/GlobalStyles";
import MapDarkStyle from "../constants/MapDarkStyle";

import { Header, Main, Footer } from "./styles";

import Sprite from "../assets/sprite.svg";

const theme_options = Object.keys(Theme);

function App() {
  const [current_theme, set_theme] = useState(theme_options[0]);

  return (
    <ThemeProvider theme={Theme[current_theme]}>
      <GlobalStyles />

      <Header>
        <svg>
          <use xlinkHref={`${Sprite}#icon-menu`} />
        </svg>
      </Header>
      <Main>
        <MapComponent
          options={{
            styles: current_theme === theme_options[0] ? {} : MapDarkStyle
          }}
        />

        <TableComponent />
      </Main>

      <Footer>
        <select value={current_theme} onChange={e => set_theme(e.target.value)}>
          {theme_options.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
