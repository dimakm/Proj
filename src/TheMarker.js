import React, { Component } from "react";
import {
  InfoWindow,
  Marker
} from "react-google-maps";

class TheMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      animation: 2
    };
    this.clickOpen = this.clickOpen.bind(this);
    this.clickClose = this.clickClose.bind(this);
  }

  clickOpen() {
    this.setState({
      opened: true,
      animation: 1
    });
  }

  clickClose() {
    this.setState({
      opened: false,
      animation: 4
    });
  }

  render() {
    return (
      <Marker
        position={this.props.center}
        onClick={this.clickOpen}
        animation={this.state.animation}
        title={'Happily Ever After'}
      >
        {this.state.opened && (
          <InfoWindow onCloseClick={this.clickClose}>
            <h3>Happily Ever After </h3>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default TheMarker;
