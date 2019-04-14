import React from 'react'
import Select from 'react-select'
import axios from 'axios'


import Auth from '../../lib/auth'
import SubmitButton from '../pullables/submitbutton'

const fileStackKey = ('Ad9D3qYyQ7m4ExYBv3yMAz')

import * as filestack from 'filestack-js'
const client = filestack.init(fileStackKey)

class TripForm extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        description: '',
        tripType: '',
        duration: ''
      }

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  // ++++++++++++++++++++++++PHOTO UPLOAD++++++++++++++++++++++++++++++++
  photoUpload() {
    const options = {
      accept: ['image/*'],
      onFileUploadFinished: file => {
        this.setState({ images: file.url })
      }
    }
    client.picker(options).open()
  }

  handleClick() {
    this.photoUpload()
  }
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // ------------------GET REQUESTS FROM BACKEND -------------------------------
  getBudgets() {
    axios.get('/api/budgets')
      .then(res => {
        return res.data.map(cost => ({ value: cost.id, label: cost.cost }))
      })
      .then(budgets => this.setState({ budgets }))
      .catch(err => console.log(err))
  }
  getDurations() {
    axios.get('/api/durations')
      .then(res => {
        return res.data.map(duration => ({ value: duration.id, label: duration.duration }))
      })
      .then(durations => this.setState({ durations }))
      .catch(err => console.log(err))
  }
  getCities() {
    axios.get('/api/destinations')
      .then(res => {
        return res.data.map(city => ({ value: city.id, label: city.name }))
      })
      .then(cities => this.setState({ cities }))
      .catch(err => console.log(err))
  }
  getCategories() {
    axios.get('/api/categories')
      .then(res => {
        return res.data.map(category => ({ value: category.id, label: category.name }))
      })
      .then(categories => this.setState({ categories }))
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.getCities()
    this.getCategories()
    this.getBudgets()
    this.getDurations()
  }
  // ---------------------------------------------------------------------------

  handleChange (e) {
    this.setState({data: {description: e.target.value}})
    console.log({data: {description: e.target.value}})
    console.log(this.state)
  }

  handleSelect(e) {
    this.setState({data: {tripType: e.target.value}})
    console.log({data: {tripType: e.target.value}})
  }

  render() {
    return(
      <form className="contains-tripForm">
        <h2> Tell us about your trip </h2>
        <div className="contains-placeSearch">
          <Select
            name="desinations"
            placeholder="Where did you go?"
            options={this.state.cities}
          />
        </div>

        <div className="contains-durationSearch">
          <Select
            placeholder="How long for?"
            name="duration"
            value={this.state.duration}
            onChange={this.handleSelect}
            options={this.state.durations}
          />
        </div>

        <div className="contains-budgetSearch">
          <Select
            placeholder="How much did you spend?"
            name="budget"
            options={this.state.budgets}
          />
        </div>

        <div className="contains-description_photoUpload">
          <input
            placeholder="Give us a brief summary of the trip."
            name="description"
            type="text"
            value={this.state.data.description}
            onChange={this.handleChange}


          />
          <button
            type="button"
            onClick={this.handleClick}>
            <i className="fas fa-camera"></i>
          </button>
        </div>

        <div className="contains-categorySearch">
          <Select
            name="Categories"
            placeholder="What kind of trip was it?"
            isMulti
            options={this.state.categories}

          />
        </div>

        <SubmitButton />
      </form>
    )
  }
}

export default TripForm
