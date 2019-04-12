import React from 'react'
import axios from 'axios'

class ViewTrip extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

<<<<<<< HEAD
  }
=======
>>>>>>> development
  componentDidMount() {
    axios.get(`/api/trips/${this.props.match.params.id}`)
      .then(res => this.setState({ trip: res.data }))
  }

  render() {
<<<<<<< HEAD
=======
    const { trip } = this.state
>>>>>>> development
    return (
      <main>
        <div className="contains-title_photo">
          <div className="title">
<<<<<<< HEAD
            <h1> </h1>
          </div>
          <div className="budget">
            <h4> £100 </h4>
          </div>
          <div className="duration">
            <h4> 5 days </h4>
=======
            <h1>Destination {trip.name}</h1>
          </div>
          <div className="budget">
            <h4> Budget {trip.budget}</h4>
          </div>
          <div className="duration">
            <h4> Duration {trip.number_of_days}</h4>
>>>>>>> development
          </div>
        </div>

        <div className="showPhotos">
          <img />
          <img />
          <img />
          <img />
        </div>

<<<<<<< HEAD

        <div className="contains-categories">
          <h4>categories</h4>
        </div>
        <div className="contains-like_viewTrip">
          <h4>  </h4>
          <button></button>
          <i className="far fa-thumbs-up"></i>
        </div>
        <div data-skyscanner-widget="SearchWidget"></div>
        <script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></script>
=======
        <div className="recommendations">
          <h1>Recommendations {trip.description}</h1>
        </div>

        <div className="map">
          <h1>Mapbox api</h1>
        </div>

        <div className="categories">
          <h1>Categories {trip.categories}</h1>
        </div>

        <div className="flights">
          <h1>Flight widget</h1>
        </div>
>>>>>>> development
      </main>
    )
  }
}


export default ViewTrip
