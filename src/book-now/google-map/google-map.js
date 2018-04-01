/* eslint-disable no-undef */ //added this so that new google below doesn't throw error.
import React , {Component} from 'react';
import {compose, withProps} from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";

import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

import './google-map.scss';

const __GOOGLE_KEY__ = 'AIzaSyCUBXD3LEXPdDjzwYgLFU-W5U-KaotcX_0';
// const MARKER_SIZE = 40;
// const greatPlaceStyle = {
//   position: 'absolute',
//   width: MARKER_SIZE,
//   height: MARKER_SIZE,
//   left: -MARKER_SIZE / 2,
//   top: -MARKER_SIZE / 2
// }
// var uluru = {
//   lat: 40.8197023,
//   lng: -74.48363269999999
// }

const GoogleMapWrapper = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${__GOOGLE_KEY__}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="google-map-wrapper" />,
    mapElement: <div className="google-map" />,
    center: { lat: 40.8197023, lng: -74.48363269999999},
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={props.center}
      >
      <Marker
        position={{
          lat: 40.8197023,
          lng: -74.48363269999999
        }}
        // labelAnchor={new google.maps.Point(0, 0)}
        // labelStyle={{ padding: "16px"}}
        >
    </Marker>
    </GoogleMap>
)
  // static defaultProps = {
  //   center: {
  //     //12 Sherman Ave, Morris Plains, NJ
  //     lat: 40.8197023,
  //     lng: -74.48363269999999
  //   },
  //   zoom: 11
  // };
  //
  // renderMarkers(map, maps) {
  //   let marker = new maps.Marker({
  //     position: uluru,
  //     map: map,
  //     title: 'Uluru (Ayers Rock)'
  //   });
  // }

      // Important! Always set the container height explicitly
  //     <div style={{ height: '40vh', width: '40vw' }}>
  //       <GoogleMapReact
  //         bootstrapURLKeys={{ key: __GOOGLE_KEY__}}
  //         defaultCenter={this.props.center}
  //         defaultZoom={this.props.zoom}
  //         onGoogleApiLoaded={({map, GoogleMapReact}) => this.renderMarkers()}
  //         yesIWantToUseGoogleMapApiInternals
  //
  //       >
  //         {/* <AnyReactComponent
  //           lat={40.8197023}
  //           lng={-74.48363269999999}
  //           text={'Kreyser Avrora'}
  //         /> */}
  //
  //       </GoogleMapReact>
  //     </div>
  //   );
  // }


export default GoogleMapWrapper;
