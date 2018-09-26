import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import TheMarker from './TheMarker';

const TheMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  ><TheMarker center={props.center}/>}
  </GoogleMap>
))

export default TheMap;