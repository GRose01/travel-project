import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class MyTrips extends React.Component{
  constructor(){
    super()

    this.state = {
      trips: []
    }
  }


  componentDidMount() {
    axios.get('/api/user', {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => {
        this.setState({ myTrips: res.data.created_trips })
        console.log(this.state.myTrips[0].id, 'THIS IS STATE IN THE MOUNT')
      })
      .catch(err => console.log(err))
  }

  handleDeleteClick (trip) {
    axios.delete(`/api/trips/${trip.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .componentDidMount()
      .then(res => console.log(res))

  }


  render(){
    console.log(this.state)
    return(
      <main>
        {!this.state.myTrips && <p> Finding trips ...</p>}
        {this.state.myTrips && this.state.myTrips.map(trip => (
          <div key={trip.id} className="mytrip-card">
            <div className="contains-title">
              <h1>{trip.name}</h1>
            </div>

            <div className="images">
              <img src={trip.images} alt={trip.name}/>
            </div>

            <div className="contains-budget_duration">
              <div className="budget">
                <h4>{trip.budget}</h4>
              </div>
              <div className="duration">
                <h4>{trip.duration.duration}</h4>
              </div>
            </div>

            <div className="contains-categories">
              <h4>{trip.categories.map((category, i) => (
                <span key={i}>{category.name}, </span>))}</h4>
            </div>
            <div className="contains-like_viewTrip">
              <h4>{trip.liked_by.length} likes</h4>
            </div>
            <button
              className="deleteButton"
              onClick={() => this.handleDeleteClick(trip)}
            >Delete this trip
            </button>
            <Link to={`trips/${trip.id}`}> <button>VIEW THIS TRIP</button> </Link>
          </div>
        ))}
      </main>
    )
  }
}

export default MyTrips

// <img src={trip.images} alt={trip.name}/>
