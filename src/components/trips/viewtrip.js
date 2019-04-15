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
      <main>
        <div className="viewtrip-topThird">
          <div className="viewtrip-photos"
            style={{
              backgroundImage: `url(${trip.images})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'noRepeat'
            }}>
          </div>
          <div className="viewtrip-topRight">
            <div className="viewtrip-hasIcon">
              <i className="fas fa-globe-americas"></i>
            </div>
            <div className="viewtrip-likes">
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
          </div>
        </div>

        <div className="viewtrip-midThird">
          <div className="viewtrip-categories">
            {trip.categories.map((category, i) =>
              <h3 key={i}> {category.name}</h3>
            )}
          </div>
          <div className="viewtrip-destination">
            <h2>{trip.name}</h2>
          </div>
          <div className="viewtrip-description">
            <p>{trip.description}</p>
          </div>
          <div className="viewtrip-budget_duration">
            <div className="viewtrip-budget">
              <h4>{trip.budget}</h4>
            </div>
            <div className="viewtrip-duration">
              <h4>{trip.duration.duration}</h4>
            </div>
          </div>
        </div>

        <div className="viewtrip-bottomThird">
          <div className="viewtrip-bottomLeft">
            <div className="viewtrip-hasIcon">
              <i className="fas fa-plane"></i>
            </div>
            <div className="contains-tripUserDetails">
              <h6>Created by {trip.creator.username} <br /> at {moment(trip.created_at).format('hh:mm')} on {moment(trip.created_at).format('Do MMMM YYYY')}</h6>
            </div>
          </div>
          <div className="viewtrip-mapbox">
          </div>
        </div>
      </main>
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
