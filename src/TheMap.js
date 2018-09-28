import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const TheMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}>
  </GoogleMap>
))

export default TheMap;

