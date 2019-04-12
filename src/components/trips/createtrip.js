import React from 'react'
import axios from 'axios'

import TripForm from '../pullables/tripform'

class CreateTrip extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {},
      categories: []
    }
  }

  // getCities() {
  //   axios.get('/api/cities')
  //     .then(res => {
  //       return res.data.map(city => ({ value: city.id, label: city.name }))
  //     })
  //     .then(cities => this.setState({ cities }))
  //     .catch(err => console.log(err))
  // }

  getCategories() {
    axios.get('/api/categories')
      .then(res => {
        return res.data.map(category => ({ value: category.id, label: category.name }))
      })
      .then(categories => this.setState({ categories }))
      .catch(err => console.log(err))
  }

  // componentDidMount(getCities, getCategories) {
  //   getCities()
  //   getCategories()
  // }



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

export default CreateTrip
