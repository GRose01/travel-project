import React from 'react'
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')


const mapContainer = ('.map')
mapboxgl.accessToken = process.env.MAPBOX_TOKEN


class Map extends React.Component {
  constructor(){
    super()

    this.state = { location }

    const center = this.state.location
    const map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 8
    })
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')


  }


  render(){
    return(
      <h1>${'.map'}</h1>
    )
  }
}



export default Map
