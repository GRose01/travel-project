import React from 'react'

import Auth from '../../lib/auth'
import SubmitButton from '../pullables/submitbutton'


class Login extends React.Component {
  constructor(){
    super()

    this.state = { data: {}, error: ''}
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const error = ''
    this.setState({ data, error })
  }

  render(){
    return(
      <main>
        <div className="contains-usernameInput">
          <input
            placeholder="username"
            name="username"
            value={this.state.data.username}
            onChange={this.handleChange}
          />
        </div>
        <div className="contains-passwordInput">
          <input
            placeholder="password"
            name="password"
            value={this.state.data.password}
            onChange={this.handleChange}
          />
        </div>
        < SubmitButton />
      </main>
    )
  }
}



export default Login
