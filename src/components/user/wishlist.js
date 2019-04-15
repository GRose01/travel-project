import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
const moment = require('moment')


class Wishlist extends React.Component {
  constructor() {
    super()

    this.state = { likes: []}
  }
  componentDidMount() {
    axios.get('/api/user', {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => {
        this.setState({ likes: res.data.likes })
      })
  }

  render() {
    console.log(this.state.likes)
    return (
      <main>
        {!this.state.likes && <p> Getting your wishlist</p>}
        {this.state.likes && this.state.likes.map(trip => (
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

              <div className="card-content">
                <h6>Created by {trip.creator.username} <br/> at {moment(trip.created_at).format('hh:mm')} on {moment(trip.created_at).format('Do MMMM YYYY')}</h6>
              </div>
            </Link>
          </div>
        ))}

        {this.state.user && this.state.trips.length === 0 && <p>You dont have any items in your Wishlist yet</p> && <div>
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
