import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  mapRef = React.createRef();
  lat = this.props.city.coord.lat;
  lng = this.props.city.coord.lon;
  
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.map = new google.maps.Map( this.mapRef.current, {
      center: {
        lat: this.lat,
        lng: this.lng
      },
      zoom: 12
    });
  }

  render() {
    return(
      <div
        style={{ height: 300, width: 300 }}
        id="map"
        ref={this.mapRef}
      ></div>
    )
  }

}

export default GoogleMap;

//AIzaSyDxVl_CyaLufg9Fixrlsb-8zDM7c_TQWXU
// render() {
//   console.log(this)
//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100%', width: 300 }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyDxVl_CyaLufg9Fixrlsb-8zDM7c_TQWXU' }}
//         defaultCenter={{
//           lat: this.props.city.coord.lat,
//           lng: this.props.city.coord.lon
//         }}
//         defaultZoom={11}
//       >
//         <AnyReactComponent
//           lat={this.props.city.coord.lat}
//           lng={this.props.city.coord.lon}
//           text={this.props.city.name}
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }
