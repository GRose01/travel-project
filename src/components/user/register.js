import React from 'react'


import SubmitButton from '../pullables/submitbutton'

class Register extends React.Component {
  constructor(){
    super()
  }


  render(){
    return(
      <main>
        <div className="contains-emailInput">
          <input
            placeholder="email"
            name=""
            value=""

          />
        </div>
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
        <div className="contains-passwordInput">
          <input
            placeholder="retype your password"
            name=""
            value=""

          />
        </div>
        < SubmitButton />
      </main>
    )
  }
}



export default Register
