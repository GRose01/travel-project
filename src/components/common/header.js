import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'




const Header = () => {
  return (
    <div className="contains-headerElements">
      {!Auth.isAuthenticated() &&
      <div className="contains-login_register_profile">
        <h4 className="desktop"> <Link to='/login'>log in</Link> </h4>
        <h4 className="desktop"> <Link to='/register'>register</Link> </h4>
        <i className="fas fa-bars mobile"></i>
      </div>
      }
      {Auth.isAuthenticated() &&
      <div className="contains-login_register_profile">
        <h4 className="desktop"> <Link to='/login'>my trips</Link> </h4>
        <h4 className="desktop"> <Link to='/register'>liked trips</Link> </h4>
        <h4 className="desktop"> <Link to='/register'>add a trip</Link> </h4>
        <i className="fas fa-bars mobile"></i>
      </div>
      }
      <div className="contains-logo">
        <img src="../../assets/if_logo.png" />
      </div>
    </div>
  )
}

export default Header
