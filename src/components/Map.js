import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
  
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 34.156267, lng: -118.485582 },
    zoom: 15
  }
  renderMarkers(map, maps) {
      console.log(map, maps)
    let marker = new maps.Marker({
      position: { lat: 34.156267, lng: -118.485582 },
      map,
      title: 'Hello World!'
    });
  }
render() {
    return (
      <div className='google-map'>
        <GoogleMapReact          
          bootstrapURLKeys={{key: 'AIzaSyBVHuCOgRTM1djzFWv6C-3kRdC_tibn6NI'}}
          defaultZoom={ this.props.zoom }
          defaultCenter={ this.props.center }
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals>
        </GoogleMapReact>
      </div>
    )
  }
}