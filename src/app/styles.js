import styled, { css } from "styled-components";

// Utilities start

const showMenuStyle = css`
  transform: translateX(0);
  box-shadow: 3px 0 5px -2px ${props => props.theme.black};
`;

// Utilities end

// Layout Start

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  background-color: ${props => props.theme.dark__yellow};
  z-index: 1000;

  svg {
    fill: ${props => props.theme.black};
  }
`;

export const Nav = styled.nav`
  position: fixed;
  width: 150px;
  top: 0;
  left: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: all 0.3s ease-in;
  background: ${props => props.theme.white};
  z-index: 10000;
  button {
    width: 100%;
    padding: 5px 20px;
    background: transparent;
    font-size: 16px;
    border: 0;
    color: ${props => props.theme.black};
    border-bottom: 1px solid ${props => props.theme.black};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      margin-right: 15px;
      fill: ${props => props.theme.black};
    }
  }

  ${props => (props.show ? showMenuStyle : "")}
`;

export const Main = styled.main`
  margin-top: 50px;
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

// Top level elements stlying start

export const AddTableButton = styled.button`
  padding: 5px 10px;
  background: ${props => props.theme.dark__blue};
  color: ${props => props.theme.white};
  border: 0;
  weight: bold;
  margin-bottom: 20px;
`;

// Top level elements styling end
