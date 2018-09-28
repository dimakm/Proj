import React, { Component } from "react";
import "./App.css";
import TheMap from "./TheMap";
import Axios from "axios";

class App extends Component {

  constructor() {
      super();
      this.state = {
        center: { lat: 28.417839, lng: -81.581235 },
        zoom: 14,
        venues: []      };
    }
  
  componentDidMount() {
    this.getVenues("food", "Lake Buena Vista");
  }

  //get the places from FourSquare
  getVenues = (query, location) => {
      const endPoint = "https://api.foursquare.com/v2/venues/explore?"
      const parameters = {
          client_id: "TPY3XVOLGRYJPBQXQLDFP4XYNUT1SWHPXAYNE43TAN0AQIMI",
          client_secret: "JLL03C4BYHQ2QNFKJE5H31WWDPWUPJPMMNGJOQBJBS5DKEZG",
          query: query,
          near: location,
          v: "20182509"
      }

      //Fetch data with axios
      Axios.get(endPoint + new URLSearchParams(parameters))
        .then(response => {
          this.setState({
            venues: response.data.response.groups[0].items
          },  console.log(response.data.response.groups[0].items) )
        })
        .catch(error => {
             if (error.response) {
              // The request was made and the server responded with a status out of the range 
               console.log(error.response.data);
               console.log(error.response.status);
               console.log(error.response.headers);

          } else if (error.request) {
              // The request was made but didn't get a response
              console.log(error.request);
          } else {
              // A problem in setting up the request 
              console.log('There is an ERROR', error.message);
          } 
          console.log("ERROR! " + error )

        })
  }


  render() {
    return (
      <div className="App">
       
        <div className="mapContainer">
          <TheMap
            center = {this.state.center}
            zoom = {this.state.zoom} 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=[KEY]&v=3.exp&libraries=geometry,places"
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
