import React, { Component } from "react";
// import { fitBounds } from "google-map-react/utils";
import {
  TableWrapper,
  Table,
  Row,
  TableHead,
  TableBody,
  TableHeadCell,
  TableCell
} from "./styles";

class TableComponent extends Component {
  handleChange = (e, key, current_table_index, type) => {
    if (type === "data") {
      const { all_table_data, table_data, meta, setTableData } = this.props;
      const tableIndex = all_table_data.findIndex(
        data => data.meta.id === meta.id
      );

      const new_table_data = [...table_data];

      new_table_data[current_table_index] = {
        ...new_table_data[current_table_index],
        [key]: e.target.value
      };

      const new_all_table_data = Object.assign([], all_table_data, {
        [tableIndex]: {
          meta,
          data: new_table_data
        }
      });

      setTableData(new_all_table_data);

      //   var bounds = new window.google.maps.LatLngBounds();

      //   new_all_table_data.forEach(element => {
      //     element.data.forEach(item => {
      //       console.log(item);
      //       bounds.extend(
      //         new window.google.maps.LatLng(+item.lat, +item.lng)
      //         //   {
      //         //   lat: +item.lat,
      //         //   lng: +item.lng
      //         // }
      //       );
      //     });
      //   });

      //   fitBounds(bounds, {
      //     width: 640, // Map width in pixels
      //     height: 380 // Map height in pixels
      //   });
    }
  };

  render() {
    const { table_data } = this.props;

    return (
      <TableWrapper>
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
            {table_data.map((data, i) => (
              <Row>
                <TableCell>
                  <input
                    type="text"
                    placeholder="Name"
                    value={data.name}
                    onChange={e => this.handleChange(e, "name", i, "data")}
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    value={data.lat}
                    placeholder="Latitude"
                    onChange={e => this.handleChange(e, "lat", i, "data")}
                  />
                  <input
                    type="number"
                    value={data.lng}
                    placeholder="Longitude"
                    onChange={e => this.handleChange(e, "lng", i, "data")}
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    placeholder="Volume"
                    value={data.volume}
                    onChange={e => this.handleChange(e, "volume", i, "data")}
                  />
                </TableCell>
              </Row>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    );
  }
}

export default TableComponent;
