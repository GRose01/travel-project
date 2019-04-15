import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import Map from '../pullables/mapbox'

let tripId = null

function checkLike(value) {
  console.log(' like value -->', value)
  if (value === tripId) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

class ViewTrip extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then(res => this.setState({ trip: res.data }))
  }

  handleLike(value, trip) {
    let data = null
    data = { ...this.state.data, likedTrip: trip.concat(value) }
    this.setState({ data }), function() {
      axios.put(`/api/${Auth.getPayload().sub}`,
        this.state.data,
        { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
        .then((res) => {
          if (res.data.errors) {
            this.setState({ sent: 'false' })
          } else {
            this.setState({ sent: 'true' })
          }
        })
        .catch(err => this.setState({ errors: err.response.data.errors }))
    }
  }

  render() {
    const { trip, likedTrip } = this.state
    tripId = this.props.match.params.id

    return (
      <div>
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
            <h4>{trip.budget}</h4>
          </div>
          <div className="duration">
            <h4>{trip.number_of_days}</h4>
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

        <div className="contains-like_viewTrip">
          <h4>{this.state.trips.liked_by.length} Likes</h4>
          <button>VIEW</button>
          <div>
            {likedTrip && likedTrip.some(checkLike) &&
              <a>
                <i className="far fa-thumbs-up"></i>
                <span>Liked</span>
              </a>
            }
            {likedTrip && !likedTrip.some(checkLike) &&
              <a onClick={() => this.handleLike(likedTrip, Auth.getPayload().sub)}>
                <i className="far fa-thumbs-up"></i>
                <span>Like</span>
              </a>
            }
          </div>
        </div>
      </div>
    )
  }
}


export default ViewTrip
