import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
const moment = require('moment')

class MyTrips extends React.Component{
  constructor(){
    super()

    this.state = {
      trips: []
    }
  }

  componentDidMount() {
    axios.all([
      axios.get('/api/user', {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      }),
      axios.get('/api/trips')
    ])
      .then(res => {
        const [user, tripsOne] = res
        const trips = tripsOne.data.filter(trip => {
          return trip.creator.id === user.id
        })
        this.setState({ trips, user: user.data })
      })
      .catch(err => console.log(err))
  }


  render(){
    console.log(this.state)
    if (!this.state.trips.length) return null
    return(
      <main>
        {!this.state.trips && <p> Finding trips ...</p>}
        {this.state.trips && this.state.trips.map(trip => (

          <div key={trip.id} className="trip-card">
            <div className="contains-title_photo">
              <div className="title">
                <h1>{trip.name}</h1>
              </div>
            </div>

            <div className="contains-budget_duration">
              <div className="budget">
                <h4>Budget: <br />{trip.budget}</h4>
              </div>
              <div className="duration">
                <h4>Duration:<br />{trip.duration}</h4>
              </div>
            </div>

            <div className="contains-categories">
              <h4>{trip.categories.map((category, i) => (
                <span key={i}>{category.name}, </span>))}</h4>
            </div>
            <div className="contains-like_viewTrip">
              <h4>{trip.liked_by.length} likes</h4>
              <button>VIEW</button>
              <i className="far fa-thumbs-up"></i>
            </div>

            <div className="card-content">
              <h6>Created by {trip.creator.username} <br/> at {moment(trip.createdAt).format('hh:mm')} on {moment(trip.createdAt).format('Do MMMM YYYY')}</h6>
            </div>
          </div>
        ))}
      </main>
    )
  }
}

export default MyTrips
