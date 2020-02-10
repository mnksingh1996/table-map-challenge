import React, { Component } from "react";
import { cloneDeep } from "lodash";
// import { fitBounds } from "google-map-react/utils";
import {
  TableWrapper,
  Table,
  Row,
  TableHead,
  TableBody,
  TableHeadCell,
  TableCell,
  PreTableContent
} from "./styles";

class TableComponent extends Component {
  handleChange = (e, key, current_table_index, type) => {
    const { all_table_data, table_data, meta, setTableData } = this.props;
    const tableIndex = all_table_data.findIndex(
      data => data.meta.id === meta.id
    );

    const new_table_data = cloneDeep(table_data);

    const new_meta = cloneDeep(meta);

    if (type === "meta") {
      new_meta[key] = e.target.value;
    }

    if (type === "data") {
      new_table_data[current_table_index] = {
        ...new_table_data[current_table_index],
        [key]:
          key === "disabled"
            ? !new_table_data[current_table_index][key]
            : e.target.value
      };
    }

    const new_all_table_data = Object.assign([], all_table_data, {
      [tableIndex]: {
        meta: new_meta,
        data: new_table_data
      }
    });

    setTableData(new_all_table_data);

    // Tried zooming out to show all pin in frame on value change of lat/lng after referencing stackoverflow but none was working. Will work on this afte basic functionalies are working.

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
  };

  clearSelected = () => {
    const { all_table_data, meta, setTableData } = this.props;

    const tableIndex = all_table_data.findIndex(
      data => data.meta.id === meta.id
    );

    const new_table_data = all_table_data[tableIndex].data.map(data =>
      data.disabled
        ? {
            id: data.id,
            lat: 0,
            lng: 0,
            volume: "",
            name: "",
            disabled: false
          }
        : data
    );

    const new_all_table_data = Object.assign([], all_table_data, {
      [tableIndex]: {
        meta,
        data: new_table_data
      }
    });

    setTableData(new_all_table_data);
  };

  render() {
    const { table_data, meta } = this.props;

    return (
      <TableWrapper>
        <PreTableContent>
          <input
            value={meta.region}
            placeholder="Enter your region"
            onChange={e => this.handleChange(e, "region", null, "meta")}
          />
          <button type="button" onClick={this.clearSelected}>
            Delete Selected
          </button>
        </PreTableContent>

        <Table>
          <TableHead>
            <Row>
              <TableHeadCell></TableHeadCell>

              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Long/Lat</TableHeadCell>
              <TableHeadCell>Volume</TableHeadCell>
            </Row>
          </TableHead>
          <TableBody>
            {table_data.map((data, i) => (
              <Row key={data.id}>
                <TableCell>
                  <input
                    type="checkbox"
                    checked={data.disabled}
                    onChange={e => this.handleChange(e, "disabled", i, "data")}
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="text"
                    placeholder="Name"
                    value={data.name}
                    onChange={e => this.handleChange(e, "name", i, "data")}
                  />
                </TableCell>
                <TableCell>
                  <div className="two">
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
                  </div>
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
