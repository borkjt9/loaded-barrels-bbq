import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const __GOOGLE_KEY__ = 'AIzaSyCUBXD3LEXPdDjzwYgLFU-W5U-KaotcX_0';

export class MapContainer extends Component {

  onMarkerClick() {
    console.log('marker clicked bitch')
  }

  onInfoWindowClose() {
    console.log('closing window bitch')
  }
render() {

    const mapsStyle={width: '40%', height: '40%'}
    return (
      <Map style={mapsStyle}
        google={this.props.google}
        zoom={14}
        initialCenter={{
          //12 Sherman Ave, Morris Plains, NJ
            lat: 40.8197023,
            lng: -74.48363269999999
          }}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Filler Bitch</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (__GOOGLE_KEY__)
})(MapContainer)
