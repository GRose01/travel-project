import React from 'react'
import axios from 'axios'

// import Auth from '../../lib/auth'
import SubmitButton from '../pullables/submitbutton'


class Login extends React.Component {
  constructor(){
    super()

    this.state = { data: {
      username: '',
      password: ''
    }, error: ''}

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
      .then(() => this.props.history.push('/api/'))
      .catch(() => this.setState({ errors: 'Invalid Input'}))
  }

  render(){
    return(
      <main>
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </main>
    )
  }
}



export default Login
