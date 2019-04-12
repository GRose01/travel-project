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
    const { trip } = this.state

    return (
      <main>
        <div className="contains-title_photo">
          <div className="title">
            <h1> </h1>
          </div>
          <div className="budget">
            <h4> £100 </h4>
          </div>
          <div className="duration">
            <h4> Destination {trip.name}</h4>
          </div>
          <div className="budget">
            <h4> Budget {trip.budget}</h4>
          </div>
          <div className="duration">
            <h4> Duration {trip.number_of_days}</h4>
          </div>
          <Map />
        </div>

        <div className="showPhotos">
          <img />
          <img />
          <img />
          <img />
        </div>


        <div className="recommendations">
          <h1>Recommendations {trip.description}</h1>
        </div>

        <div className="map">
          <h1>Mapbox api</h1>
        </div>

        <div className="contains-categories">
          <h1>Categories {trip.categories}</h1>
        </div>

        <div className="flights">
          <h1>Flight widget</h1>
        </div>
      </main>
    )
  }
}


export default ViewTrip
