import React from 'react'
import axios from 'axios'

import TripForm from '../pullables/tripform'

class EditTrip extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {},
      categories: []
    }
  }

  componentDidMount() {
    axios.get('/api/categories')
      .then(res => {
        return res.data.map(category => ({ value: category._id, label: category.name }))
      })
      .then(categories => this.setState({ categories }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <main>
        <TripForm
          data={this.state.data}
          categories={this.state.categories}
        />
      </main>
    )
  }
}

export default EditTrip
