import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import { Pin } from "./styles";

import Sprite from "../../assets/sprite.svg";

const Marker = ({ text, tooltip, region }) => (
  <Pin title={tooltip}>
    <p>
      {text} ({region})
    </p>
    <svg>
      <use xlinkHref={`${Sprite}#icon-location2`} />
    </svg>
  </Pin>
);

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 28.7041,
      lng: 77.1025
    },
    zoom: 11,
    options: {
      styles: {}
    },
    table_data: []
  };

  render() {
    return (
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.props.options}
        >
          {this.props.table_data.map(data =>
            data.data.map(item => (
              <Marker
                key={item.id}
                lat={item.lat}
                lng={item.lng}
                region={data.meta.region}
                text={item.name}
                tooltip={item.volume}
              />
            ))
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;
