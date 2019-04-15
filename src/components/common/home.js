import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const moment = require('moment')
import Filter from '../pullables/filter'
// import Auth from '../../lib/auth'
import Popup from 'reactjs-popup'
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
    // this.getUser()
  }
  getTrips(){
    axios.get('/api/trips')
      .then(trips => {
        this.setState({ trips: trips.data })
      })
      .catch(err => console.log(err))
  }
  // getUser() {
  //   axios.get(`/api/${Auth.getPayload().sub}`)
  //     .then(res => this.setState({ data: res.data.user }))
  //     .catch(err => console.log(err))
  // }
  render(){
    console.log('first render', this.state)
    if (!this.state.trips.length) return null
    return(
      <div>
        <main>
          {!this.state.trips && <p> Finding trips ...</p>}
          {this.state.trips && this.state.trips.map(trip => (
            <div key={trip.id} className="trip-card">
              <div className="contains-title_photo">
                <div className="title">
                  <h1>{trip.name}</h1>
                </div>
                <div className="contains-tripDescription">
                </div>
                <div className="showPhotos">
                  <img src={trip.images} alt={trip.name}/>
                </div>
              </div>
              <div className="contains-budget_duration">
                <div className="budget">
                  <h4>Budget: <br />{trip.budget.cost}</h4>
                </div>
                <div className="duration">
                  <h4>Duration:<br />{trip.duration.duration}</h4>
                </div>
              </div>
              <div className="contains-categories">
                <h4>{trip.categories.map((category, i) => (
                  <span key={i}>{category.name}, </span>))}</h4>
              </div>
              <div className="contains-like_viewTrip">
                <h4>{trip.liked_by.length} likes</h4>
                <Link to={`trips/${trip.id}`}> <button>VIEW</button> </Link>
              </div>
              <div className="card-content">
                <h6>Created by {trip.creator.username} <br/> at {moment(trip.createdAt).format('hh:mm')} on {moment(trip.createdAt).format('Do MMMM YYYY')}</h6>
              </div>
            </div>
          ))}
        </main>
        <div className="contains-filterLink">
          <Popup trigger={<button> <i  className="fas fa-filter"></i></button>} position="top center">
            <div> <Filter /> </div>
          </Popup>
        </div>
      </div>
    )
  }
}
export default Home
// <div className="contains-like_viewTrip">
//   <h4>{this.state.trips.liked_by.length} Likes</h4>
//   <button>VIEW</button>
//   <div>
//     {likedTrip && likedTrip.some(checkLike) &&
//       <a>
//         <i className="far fa-thumbs-up"></i>
//         <span>Liked</span>
//       </a>
//     }
//     {likedTrip && !likedTrip.some(checkLike) &&
//       <a onClick={() => this.handleLike(likedTrip, Auth.getPayload().sub)}>
//         <i className="far fa-thumbs-up"></i>
//         <span>Like</span>
//       </a>
//     }
//   </div>
// </div>
