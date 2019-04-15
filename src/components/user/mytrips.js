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

  // componentDidMount() {
  //   axios.all([
  //     axios.get('/api/user', {
  //       headers: { Authorization: `Bearer ${Auth.getToken()}`}
  //     }),
  //     axios.get('/api/trips')
  //   ])
  //     .then(res => {
  //       const [user, tripsOne] = res
  //       const trips = tripsOne.data.filter(trip => {
  //         return trip.creator.id === user.id
  //       })
  //       this.setState({ trips, user: user.data })
  //     })
  //     .catch(err => console.log(err))
  // }

  componentDidMount() {
    axios.get('/api/user', {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => {
        this.setState({ myTrips: res.data.created_trips })
      })
      .catch(err => console.log(err))
  }


  render(){
    console.log(this.state.myTrips, '<-- trips')
    // if (!this.state.trips) return null
    return(
      <main>
        {!this.state.myTrips && <p> Finding trips ...</p>}
        {this.state.myTrips && this.state.myTrips.map(trip => (

          <div key={trip.id} className="trip-card">
            <Link to={`/trips/${trip.id}`} >
              <div className="contains-title_photo">
                <div className="title">
                  <h1>{trip.name}</h1>
                </div>
              </div>

              <div className="">
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

            </Link>
          </div>
        ))}
      </main>
    )
  }
}

export default MyTrips
