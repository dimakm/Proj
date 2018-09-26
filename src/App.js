import React, { Component } from "react";
import "./App.css";
import TheMap from "./TheMap";


class App extends Component {
  constructor() {
    super();
    this.state = {
      center: { lat: 45.530369, lng: -122.672111 },
      zoom: 14
    };
  }

  render() {
    return (
      <div className="App">
      <div className="list">
       <ul>
       <li>hi</li></ul>
      </div>
        <div className="mapContainer">
          <TheMap
            center = {this.state.center}
            zoom = {this.state.zoom}
            defaultZoom={this.state.zoom}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCElDPaTh_n-WGrsOONc-2eR6eleOkoI-U&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
