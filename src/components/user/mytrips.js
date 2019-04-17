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
            <div className="mytrip-title_likes_budget_duration">
              <div className="mytrip-title">
                <h1>{trip.name}</h1>
              </div>
              <div className="budget">
                <h4>{trip.budget}</h4>
              </div>
              <div className="duration">
                <h4>{trip.duration.duration}</h4>
              </div>
              <div className="mytrip-like_viewTrip">
                <h4>{trip.liked_by.length} likes</h4>
              </div>
            </div>

            <div className="mytrip-everythingElse">
              <div className="mytrip-contains-buttons">
                <button
                  className="deleteButton"
                  onClick={() => this.handleDeleteClick(trip)}
                >delete this trip
                </button>
                <Link to={`trips/${trip.id}`}>
                  <button>view this trip</button> </Link>
              </div>
              <div className="mytrip-categories">
                <h4>{trip.categories.map((category, i) => (
                  <span key={i}>{category.name}, </span>))}</h4>
              </div>
              <div
                style={{
                  backgroundImage: `url(${trip.images})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'noRepeat'
                }}className="mytrip-images">
              </div>
            </div>
          </div>
        ))}
      </main>
    )
  }
}

export default MyTrips

// <img src={trip.images} alt={trip.name}/>
