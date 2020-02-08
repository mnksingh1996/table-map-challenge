import React, { Component } from "react";
import {
  TableContainer,
  Table,
  Row,
  TableHead,
  TableBody,
  TableHeadCell,
  TableCell
} from "./styles";

class TableComponent extends Component {
  render() {
    return (
      <TableContainer>
        {/* <div>
        <div classname="round">
          <input type="checkbox" id="value" />
          <label for="value"></label>
        </div>
      </div> */}
        <Table>
          <TableHead>
            <Row>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Long/Lat</TableHeadCell>
              <TableHeadCell>Volume</TableHeadCell>
            </Row>
          </TableHead>
          <TableBody>
            <Row>
              <TableCell>Value 1</TableCell>
              <TableCell>Value 2</TableCell>
              <TableCell>Value 3</TableCell>
            </Row>
            <Row>
              <TableCell>Value 1</TableCell>
              <TableCell>Value 2</TableCell>
              <TableCell>Value 3</TableCell>
            </Row>

            <Row>
              <TableCell>Value 1</TableCell>
              <TableCell>Value 2</TableCell>
              <TableCell>Value 3</TableCell>
            </Row>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default TableComponent;
