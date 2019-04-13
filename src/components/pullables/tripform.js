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

      }
    }

    this.handleClick = this.handleClick.bind(this)

  }

  photoUpload() {
    const options = {
      accept: ['image/*'],
      onFileUploadFinished: file => {
        this.setState({ image: file.url })
      }
    }
    client.picker(options).open()
  }

  handleClick() {
    this.photoUpload()
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('api/trips', this.state.data, { headers: { Authorization: `Bearer ${Auth.gettoken()}`}})
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

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

  render(){
    console.log(this.state)
    return(
      <form className="contains-tripForm"
        onSubmit={this.handleSubmit}
      >
        <h2> Tell us about your trip </h2>
        <div className="contains-placeSearch">
          <Select
            name="city"
            value={this.state.destination}
            placeholder="Where did you go?"
            options={this.state.cities}
          />
        </div>

        <div className="contains-durationSearch">
          <Select
            name=""
            value=""
            placeholder="How long for?"
            options={this.state.durations}
          />
        </div>

        <div className="contains-budgetSearch">
          <Select
            name=""
            value=""
            placeholder="How much did you spend?"
            options={this.state.budgets}
          />
        </div>

        <div className="contains-description_photoUpload">
          <input
            placeholder="Give us a brief summary of the trip."
            type="text"
          />
          <button
            type="button"
            onClick={this.handleClick}>
            <i className="fas fa-camera"></i>
            <i className="fas fa-plus"></i>
          </button>
        </div>

        <div className="contains-categorySearch">
          <Select
            name="Categories"
            value={this.state.data.category}
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
