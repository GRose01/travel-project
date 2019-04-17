import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const moment = require('moment')
// import Auth from '../../lib/auth'
class Home extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      user: {},
      trips: [],
      errors: {}
    }
  }
  componentDidMount() {
    this.getTrips()
  }
  getTrips(){
    axios.get('/api/trips')
      .then(trips => {
        this.setState({ trips: trips.data })
        this.filteredByCategory()
      })
      .catch(err => console.log(err))
  }


  filteredByCategory() {
    const categoryList = []
    this.state.trips.map(trip =>
      categoryList.push(trip.categories))

  }


  render(){
    if (!this.state.trips.length) return null
    return(
      <div>
        <main>
          {!this.state.trips && <p> Finding trips ...</p>}
          {this.state.trips && this.state.trips.map(trip => (
            <div key={trip.id} className="trip-card">
              <div className="contains-title_description">
                <h1>{trip.name}</h1>
                <p>{trip.description}</p>
              </div>
              <div
                className="showPhotos"
                style={{
                  backgroundImage: `url(${trip.images})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'noRepeat'
                }}
              >
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
                <h4> {trip.categories.map((category, i) => (
                  <span key={i}>{category.name}, </span>))}</h4>
              </div>
              <div className="contains-like_viewTrip">
                <p>{trip.liked_by.length} <i className="far fa-heart"></i></p>
                <Link to={`trips/${trip.id}`}> <button>VIEW THIS TRIP</button> </Link>
              </div>
              <div className="contains-tripUserDetails">
                <h6>Created by {trip.creator.username} <br/> at {moment(trip.createdAt).format('hh:mm')} on {moment(trip.createdAt).format('Do MMMM YYYY')}</h6>
              </div>
            </div>
          ))}
        </main>
      </div>
    )
  }
}
export default Home

// </div>
