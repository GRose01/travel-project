import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

console.log(Auth.isAuthenticated)

const Header = () => {
  return (
    <div className="contains-headerElements">
      {!Auth.isAuthenticated() &&
      <div className="contains-login_register_profile">
        <h4> <Link to='/login'>log in</Link> </h4>
        <h4> <Link to='/register'>register</Link> </h4>
      </div>
      }
      {Auth.isAuthenticated() &&
      <div className="contains-login_register_profile">
        <h4> <Link to='/login'>my trips</Link> </h4>
        <h4> <Link to='/register'>liked trips</Link> </h4>
        <h4> <Link to='/register'>add a trip</Link> </h4>
      </div>
      }
      <div className="contains-logo">
        <img src="../../assets/if_logo.png" />
      </div>
      <div className="contains-filterLink">
        <Link to='/filter'><i  className="fas fa-filter"></i></Link>
      </div>

    </div>
  )
}

export default Header
