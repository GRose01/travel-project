import React from 'react'
import Select from 'react-select'
import axios from 'axios'

import SubmitButton from '../pullables/submitbutton'

class Filter extends React.Component{
  constructor(){
    super()

    this.state = {}

    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    axios.get('/api/categories')
      .then(res => {
        return res.data.map(category => ({ value: category.id, label: category.name }))
      })
      .then(categories => this.setState({ categories }))
      .catch(err => console.log(err))
  }

  handleSelect(value) {
    let data = null
    data = {...this.state.data, categories: value.map(({ value }) => value) }
    this.setState({ data })
  }


  render() {
    return(
      <main>
        <div className="contains-categorySearch">
          <Select
            placeholder="What type of holiday? (Pick as many as you like)"
            name="Categories"
            isMulti
            options={this.state.categories}
            onChange={this.handleSelect}
          />
        </div>

        <div className="contains-budgetSearch">
          <Select
            placeholder="How much are you looking to spend per person?"/>
        </div>

        <SubmitButton />
      </main>
    )
  }
}



export default Filter

//
//
// {!this.state.categories && <h4> getting your choices </h4> }
// {this.state.categories && this.state.categories.map(category => (
