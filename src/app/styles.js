import styled, { css } from "styled-components";

// Utilities start

const showMenuStyle = css`
  transform: translateX(0);
`;

// Utilities end

// Layout Start

export const Header = styled.header`
  padding: 10px 20px;
  background-color: ${props => props.theme.dark__yellow};
`;

export const Nav = styled.nav`
  position: fixed;
  width: 250px;
  top: 0;
  left: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: all 0.3s ease-in;
  background: white;
  z-index: 1;

  button {
    width: 100%;
    padding: 5px 8px;
    backgroud: transparent;
    font-size: 16px;
    border: 1px solid ${props => props.theme.back};
  }

  ${props => (props.showMenu ? showMenuStyle : "")}
`;

export const Main = styled.main`
  padding: 10px 20px;
`;

export const Footer = styled.footer`
  padding: 10px 20px;
`;

// Layout End

export const TableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
