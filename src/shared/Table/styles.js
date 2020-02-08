import styled, { css } from "styled-components";

// Utilities Start

const border_collapse = css`
  border: 2px solid ${props => props.theme.medium__green};
  border-collapse: collapse;
`;

const cellPadding = css`
  padding: 10px;
`;

// Utilities End

// Table Start

export const TableContainer = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 50%;
  margin-top: 20px;
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
`;

// Table End
