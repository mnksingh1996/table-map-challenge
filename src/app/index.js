import React, { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import uuid from "uuid/v4";

import Theme from "../constants/Theme";

import MapComponent from "../shared/map";
import TableComponent from "../shared/table";

import GlobalStyles from "../constants/GlobalStyles";
import MapDarkStyle from "../constants/MapDarkStyle";

import {
  Header,
  Main,
  Footer,
  Nav,
  TableContainer,
  AddTableButton
} from "./styles";

import Sprite from "../assets/sprite.svg";

const theme_options = Object.keys(Theme);

const dummy_data = () => ({
  meta: {
    region: "NCR",
    id: uuid()
  },
  data: [
    {
      id: uuid(),
      lat: 28.7041,
      lng: 77.1025,
      volume: "delhi volume",
      name: "Delhi",
      disabled: false
    },
    {
      id: uuid(),
      lat: 28.4595,
      lng: 77.0266,
      volume: "gurgaon volume",
      name: "Gurgaon",
      disabled: false
    },
    {
      id: uuid(),
      lat: 28.5355,
      lng: 77.391,
      volume: "noida volume",
      name: "Noida",
      disabled: false
    },
    {
      id: uuid(),
      lat: 28.4089,
      lng: 77.3178,
      volume: "faridabad volume",
      name: "faridabad",
      disabled: false
    }
  ]
});

const initial_table_data = [dummy_data()];

function App() {
  const navRef = useRef(null);

  const [current_theme, setTheme] = useState(theme_options[0]);
  const [table_data, setTableData] = useState(initial_table_data);
  const [show_menu, setShowMenu] = useState(false);

  const handleClickOutside = event => {
    if (navRef && !navRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ThemeProvider theme={Theme[current_theme]}>
      <GlobalStyles />

      <Header>
        <svg onClick={() => setShowMenu(true)}>
          <use xlinkHref={`${Sprite}#icon-menu`} />
        </svg>
      </Header>

      <Nav show={show_menu} ref={navRef}>
        <button onClick={() => setShowMenu(false)}>
          <svg>
            <use xlinkHref={`${Sprite}#icon-arrow-left`} />
          </svg>
          BACK
        </button>
      </Nav>
      <Main>
        <MapComponent
          options={{
            styles: current_theme === theme_options[0] ? {} : MapDarkStyle
          }}
          table_data={table_data}
        />

        <br />

        <hr />

        <br />

        <AddTableButton
          type="button"
          onClick={() => setTableData([...table_data, dummy_data()])}
        >
          Add Table
        </AddTableButton>

        <br />

        <TableContainer>
          {table_data.map(data => (
            <TableComponent
              key={data.meta.id}
              table_data={data.data}
              all_table_data={table_data}
              meta={data.meta}
              setTableData={setTableData}
            />
          ))}
        </TableContainer>
      </Main>

      <Footer>
        <select value={current_theme} onChange={e => setTheme(e.target.value)}>
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
