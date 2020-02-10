import styled, { css } from "styled-components";
import mediaQuery from "../../constants/viewports";

// Utilities Start

const border_collapse = css`
  border: 2px solid ${props => props.theme.medium__green};
  border-collapse: collapse;
`;

const cellPadding = css`
  padding: 10px;
  input {
    width: 100%;
  }

  input[type="checkbox"] {
    width: auto;
  }
`;

// Utilities End

// Table Start

export const TableWrapper = styled.div`
  background: ${props => props.theme.dark__yellow};
  padding: 5px;
  margin-top: 20px;
  width: 48%;

  @media ${mediaQuery.largeMobile} {
    width: 100%;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  text-align: left;
  ${border_collapse};
`;

export const Row = styled.tr``;

export const TableHead = styled.thead`
  color: white;
  background-color: ${props => props.theme.medium__green};
`;

export const TableBody = styled.tbody`
  ${Row} {
    &:nth-child(odd) {
      background-color: ${props => props.theme.light__yellow};
    }

    &:nth-child(even) {
      background-color: ${props => props.theme.light__green};
    }
  }
`;

export const TableHeadCell = styled.th`
  ${border_collapse};
  ${cellPadding};
`;

export const TableCell = styled.td`
  ${border_collapse};
  ${cellPadding};

  .two {
    display: flex;
    input:first-child {
      margin-right: 10px;
    }
  }
`;

export const PreTableContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: 0;
    padding: 2px;
  }

  button {
    padding: 5px 10px;
    background: ${props => props.theme.light__blue};
    color: ${props => props.theme.black};
    border: 0;
    weight: bold;
  }
`;

// Table End
