import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

const moment = require('moment')


class Wishlist extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    axios.all([
      axios.get(`/api/user/${Auth.getPayload().sub}`),
      axios.get('/api/trips')
    ])
      .then(res => {
        const [ user, trips ] = res
        console.log(user, trips)
        console.log(user.data.user.pinnedReviews)
        const wishlistTrips = trips.data.filter(trip => {
          return (user.data.user.pinnedRecipes.some(wishlistTrip => {
            return trip.id.includes(wishlistTrip)
          }))
        })
        this.setState({ wishlistTrips, user })
      })
  }
  render() {
    return (
      <main>
        {!this.state.wishlistTrips && <p> Getting your wishlist</p>}
        {this.state.wishlistTrips && this.state.wishlistTrips.map(trip => (
          <div key={trip.id} className="trip-card">
            <Link to={`/trips/${trip.id}`} >
              <div className="contains-title_photo">
                <div className="title">
                  <h1>{trip.name}</h1>
                </div>
              </div>

              <div className="">
                <img src={trip.image} alt={trip.name}/>
              </div>

              <div className="contains-budget_duration">
                <div className="budget">
                  <h4>Budget: <br />£{trip.budget}</h4>
                </div>
                <div className="duration">
                  <h4>Number of Days:<br />{trip.number_of_days}</h4>
                </div>
              </div>

              <div className="contains-categories">
                <h4>{trip.categories.map((category, i) => (
                  <span key={i}>{category.name}, </span>))}</h4>
              </div>
              <div className="contains-like_viewTrip">
                <h4> Number of Likes </h4>
                <button>VIEW TRIP</button>
              </div>

              <div className="card-content">
                <h6>Created by {trip.user.username} at {moment(trip.createdAt).format('hh:mm')} on {moment(trip.createdAt).format('Do MMMM YYYY')}</h6>
              </div>
            </Link>
          </div>
        ))}

        {this.state.user && this.state.wishlistTrips.length === 0 && <p>You dont have any items in your Wishlist yet</p> && <div>
          <Link to="/">
            <button>Check out your newsfeed for inspiration!</button>
          </Link>
        </div>
        }
      </main>
    )
  }
}

export default Wishlist
