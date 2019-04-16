import React from 'react'
import axios from 'axios'
import mapboxgl from 'mapbox-gl'
const mapKey = process.env.MAPBOX_TOKEN
mapboxgl.accessToken = process.env.MAPBOX_TOKEN

class Map extends React.Component {
  constructor(){
    super()
    this.state = {}

  }

  componentDidMount(){
    this.convertToLngLat()
  }

  convertToLngLat() {
    console.log(this.props.destination)
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.props.destination}.json?access_token=${mapKey}`)
      .then(res => this.setState({center: res.data.features[0].center },this.mapFunction))
  }

  mapFunction() {
    if (!this.state.center) return null
    const {center} = this.state
    const map = new mapboxgl.Map({
      container: this.mapDiv, // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: {lat: center[1], lon: center[0]},// starting position [lng, lat]
      zoom: 2
    })
    new mapboxgl.Marker()
      .setLngLat({ lat: center[1], lon: center[0]})
      .addTo(map)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')
  }



  render() {
    console.log(this.state.center, 'here')
    return(
      <div ref={el => this.mapDiv = el} className="map">
      </div>
    )
  }
}

export default Map
