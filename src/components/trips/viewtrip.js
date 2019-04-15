import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
const moment = require('moment')

// import Map from '../pullables/mapbox'

// let tripId = null
//
// function checkLike(value) {
//   console.log(' like value -->', value)
//   if (value === tripId) {
//     console.log('true')
//     return true
//   } else {
//     console.log('false')
//     return false
//   }
// }

class ViewTrip extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then(res => this.setState({ trip: res.data, user: res.data.creator }))
  }

  handleLike({ id }) {
    axios.get(`/api/trips/${id}/like`, { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.getData())
      .catch(err => console.log(err.response))
  }

  render() {

    if (!this.state.trip) return null
    const { trip, user } = this.state
    const me = Auth.getPayload().sub
    console.log('trip', trip, user)
    console.log(trip.liked_by)

    // const { likedTrip } = this.state
    // tripId = this.props.match.params.id

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
          <h1>{trip.description}</h1>
        </div>

        <div className="contains-categories">
          {trip.categories.map((category, i) =>
            <h5 key={i}> {category.name}</h5>
          )}
        </div>

        <div className="contains-like_viewTrip">
          <h4>{trip.liked_by.length} likes</h4>
          <div>
            {trip.liked_by && trip.liked_by.some(like => like.id === me) &&
              <div><a>
                <i className="far fa-thumbs-up"></i>
                <span>Liked</span>
              </a></div>
            }
            {trip.liked_by && !trip.liked_by.some(like => like.id === me) &&
              <div><a>
                <i className="far fa-thumbs-up"></i>
                <span onClick={() => this.handleLike(trip)}>Like</span>
              </a></div>
            }
          </div>
        </div>

        <div className="card-content">
          <h6>Created by {trip.creator.username} <br /> at {moment(trip.created_at).format('hh:mm')} on {moment(trip.created_at).format('Do MMMM YYYY')}</h6>
        </div>
      </div>
    )
  }
}

export default ViewTrip


// <div className="flights">
//   <h1>Flight widget</h1>
// </div>
// <div className="map">
//   <h1>Mapbox api</h1>
// </div>
