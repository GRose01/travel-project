import React from 'react'
import axios from 'axios'

import Auth from '../../lib/auth'
import SubmitButton from '../pullables/submitbutton'


class Login extends React.Component {
  constructor(){
    super()

    this.state = {
      data: { username: '', password: '' },
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/')
      })
      .catch(() => this.setState({ errors: 'Invalid Credentials'}))
  }

  render(){
    return(
      <main>
        <form className="contains-authForm" onSubmit={this.handleSubmit}>
          <h2> log in </h2>
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
          < SubmitButton />
        </form>
      </main>
    )
  }
}



export default Login
