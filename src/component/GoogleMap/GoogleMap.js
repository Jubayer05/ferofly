import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class GoogleMap extends Component {
  render() {
    return (
      <Map className="googleMap" google={this.props.google} zoom={18}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyABTEYxQYw_UrQ4XpCuBV5NmeQr9-3vJFs",
})(GoogleMap);
