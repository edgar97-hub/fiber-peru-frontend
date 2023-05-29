import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./services.scss";

export class GoogleMap extends Component {
  state = {
    showingInfoWindow: true,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: true,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div className="wwww">
        <Map
          google={this.props.google}
          onClick={this.onMapClicked}
          style={{
            width: "100%",
            height: "60%",
            position: "relative",
          }}
          className={"map"}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807,
          }}
          zoom={15}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDt9BsWY6KS5a0d6JVHBfDhauYGOL1psYs",
})(GoogleMap);
