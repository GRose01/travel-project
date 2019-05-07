import React from 'react'
import Select from 'react-select'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'
import SubmitButton from '../pullables/submitbutton'

const fileStackKey = process.env.FILESTACK_KEY

import * as filestack from 'filestack-js'
const client = filestack.init(fileStackKey)

class TripForm extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        name: '',
        description: '',
        budget_id: '',
        category_id: [],
        duration_id: '',
        image: ''
      }

    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDurationSelect = this.handleDurationSelect.bind(this)
    this.handleBudgetSelect = this.handleBudgetSelect.bind(this)
    this.handleCategorySelect = this.handleCategorySelect.bind(this)
    this.handleDestinationSelect = this.handleDestinationSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // ++++++++++++++++++++++++PHOTO UPLOAD++++++++++++++++++++++++++++++++
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

  handleSubmit(e) {
    e.preventDefault()
    const data = {...this.state.data, images: this.state.image}
    axios.post('/api/trips', data,
      { headers: { Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/mytrips'))
      .catch(err => console.log(err.response))
  }

  handleChange(e) {
    const data = {...this.state.data, description: e.target.value }
    this.setState({data})
  }

  handleDestinationSelect(e) {
    console.log(e)
    const data = {...this.state.data, name: e.label}
    this.setState({data}, () => console.log(this.state.data, 'destination'))
    // console.log({data: {tripType: e.target.value}})
  }

  handleDurationSelect(e) {
    console.log(e)
    const data = {...this.state.data, duration_id: e.value}
    this.setState({data}, () => console.log(this.state.data, 'duration'))
    // console.log({data: {tripType: e.target.value}})
  }

  handleBudgetSelect(e) {
    const data = {...this.state.data, budget_id: e.value}
    this.setState({data})
  }

  handleCategorySelect(selected) {
    const category_id = selected.map(item => item.value)
    this.setState({ data: {...this.state.data, category_id }})
  }

  render() {
    // console.log(this.state, 'JUST STATE')
    console.log(this.state.data, 'DATA')
    return(
      <form className="contains-tripForm" onSubmit={this.handleSubmit}>
        <h2> Tell us about your trip </h2>
        <div className="contains-placeSearch">
          <Select
            name="desinations"
            placeholder="Where did you go?"
            options={this.state.cities}
            onChange={this.handleDestinationSelect}
          />
        </div>

        <div className="contains-durationSearch">
          <Select
            placeholder="How long for?"
            name="duration"
            value={this.state.duration}
            onChange={this.handleDurationSelect}
            options={this.state.durations}
          />
        </div>

        <div className="contains-budgetSearch">
          <Select
            placeholder="How much did you spend?"
            name="budget"
            options={this.state.budgets}
            onChange={this.handleBudgetSelect}
          />
        </div>
        <div className="contains-categorySearch">
          <Select
            name="Categories"
            placeholder="What kind of trip was it?"
            isMulti
            options={this.state.categories}
            onChange={this.handleCategorySelect}

          />
        </div>

        <div className="contains-description">
          <input
            placeholder="Give us a brief summary of the trip."
            name="description"
            type="text"
            value={this.state.data.description}
            onChange={this.handleChange}
          />
        </div>

        <div className="contains-photoUpload">
          <div
            style={{
              backgroundImage: `url(${this.state.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'noRepeat'
            }}
            className="contains-uploadedPhoto">
          </div>
          <button
            type="button"
            onClick={this.handleClick}>
            <i className="fas fa-camera"></i>
          </button>
        </div>

        <SubmitButton />
      </form>
    )
  }
}

export default withRouter(TripForm)
