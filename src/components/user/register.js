import React from 'react'
import axios from 'axios'

import SubmitButton from '../pullables/submitbutton'

class Register extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name , value }}) {
    const data = {...this.state.data, [name]: value}
    const error = {...this.state.errors, [name]: ''}
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(() => this.setState({ errors: 'Invalid Input'}))
  }

  render() {
    console.log(this.state)
    console.log(this.state.errors)
    return(
      <main>
        <form className="contains-authForm" onSubmit={this.handleSubmit}>
          <h2> sign up to itchy feet </h2>
          <div className="contains-emailInput contains-input">
            <input
              placeholder="email"
              name="email"
              value={this.state.data.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="contains-usernameInput contains-input">
            <input
              placeholder="username"
              name="username"
              value={this.state.data.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="contains-passwordInput contains-input">
            <input
              placeholder="password"
              name="password"
              value={this.state.data.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="contains-passwordInput contains-input">
            <input
              placeholder="retype your password"
              name="password_confirmation"
              value={this.state.data.password_confirmation}
              onChange={this.handleChange}
            />
          </div>
          < SubmitButton />
        </form>
      </main>
    )
  }
}

export default Register
