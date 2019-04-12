import React from 'react'

import SubmitButton from '../pullables/submitbutton'


class Login extends React.Component {
  constructor(){
    super()
  }


  render(){
    return(
      <main>
        <div className="contains-usernameInput">
          <input
            placeholder="username"
            name=""
            value=""

          />
        </div>
        <div className="contains-passwordInput">
          <input
            placeholder="password"
            name=""
            value=""

          />
        </div>
        < SubmitButton />
      </main>
    )
  }
}



export default Login
