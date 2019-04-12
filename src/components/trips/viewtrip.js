import React from 'react'
import axios from 'axios'

class ViewTrip extends React.Component {
  constructor() {
    super()

    this.state = {}

    componentDidMount() {
      axios.get(`/api/trips/${this.props.match.params.id}`)
        .then(res => this.setState({ trip: res.data }))
    }

    render() {
      return (
        <main>
          <div className="contains-title_photo">
            <div className="title">
              <h1> </h1>
            </div>
            <div className="budget">
              <h4> £100 </h4>
            </div>
            <div className="duration">
              <h4> 5 days </h4>
            </div>
          </div>

            <div className="showPhotos">
              <img />
              <img />
              <img />
              <img />
            </div>
          </div>

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
        </main>
      )
    }
  }
}

export default ViewTrip
