import React from 'react'
import axios from 'axios'


import Map from '../pullables/mapbox'
class ViewTrip extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then(res => this.setState({ trip: res.data }))
  }

  render() {
    if (!this.state.trip) return null
    const { trip } = this.state
    console.log(trip)
    return (
      <div>
        <div className="contains-title_photo">
          <div className="destination">
            <h4>{trip.destination}</h4>
          </div>
          <div className="budget">
            <h4>{trip.budget}</h4>
          </div>
          <div className="duration">
            <h4>{trip.duration}</h4>
          </div>

        </div>

        <div className="showPhotos">
          <img src={trip.images}/>
        </div>

        <div className="recommendations">
          <h1> {trip.description}</h1>
        </div>

        <div className="map">
          <h1>Mapbox api</h1>
        </div>

        <div className="contains-categories">
          {trip.categories.map((category, i) =>
            <h5 key={i}> {category.name}</h5>
          )}

        </div>

        <div className="flights">
          <h1>Flight widget</h1>
        </div>
      </div>
    )
  }
}


export default ViewTrip
