import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import mapStyles from './mapStyles'

const containerStyle = {
  width: '90%',
  height: '100%',
  maxHeight: '500px',
  minHeight: '350px',
};

const center = {
  lat: 35.89022452593001,
  lng: 10.594867033290448
};

declare type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];

const libraries: Libraries = ["places"];

const options = {
    styles: mapStyles
}

function MyComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
    libraries,
  })

  if(loadError) return( <div>"Error loading maps"</div> );

  if(!isLoaded) return(<div>"Loading maps"</div>);

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={options}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) 
}

export default React.memo(MyComponent)