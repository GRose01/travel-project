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
    this.handleChange = this.handleChange.bind(this)

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
      <main>
        <form
          onSubmit={this.handleSubmit}
        >
          <div className="contains-placeSearch">
            <Select
              placeholder="Where did you go?"
              options={this.state.cities}
              onChange={this.handleChange}
            />
          </div>

          <div className="contains-durationSearch">
            <Select
              placeholder="How long for?"
              options={this.state.durations}
              onChange={this.handleChange}
            />
          </div>

          <div className="contains-budgetSearch">
            <Select
              placeholder="How much did you spend?"
              options={this.state.budgets}
              onChange={this.handleChange}
            />
          </div>

          <div className="contains-description_photoUpload">
            <input
              placeholder="Give us a brief summary of the trip."
              type="text"
              onChange={this.handleChange}
            />

            <button
              type="button"
              onClick={this.handleClick}>
              <i className="far fa-file-image"></i>
            </button>

          </div>
          <div className="contains-categorySearch">
            <Select
              placeholder="What kind of trip was it?"
              name="Categories"
              isMulti
              options={this.state.categories}
              onChange={this.handleChange}
            />
          </div>
          
          <SubmitButton />
        </form>
      </main>
    )
  }
}


export default TripForm
