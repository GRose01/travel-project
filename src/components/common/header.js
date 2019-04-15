import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'




class Header extends React.Component {
  constructor() {
    super()

    this.state = { isAuthenticated: false }
  }

  isAuthenticated() {
    this.setState({ isAuthenticated: Auth.isAuthenticated()})
  }

  componentDidMount() {
    this.isAuthenticated()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.isAuthenticated()
    }
  }

  render() {
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
            <h4 className="desktop"> <Link to='/mytrips'>my trips</Link> </h4>
            <h4 className="desktop"> <Link to='/wishlist'>liked trips</Link> </h4>
            <h4 className="desktop"> <Link to='/trips/new'>add a trip</Link> </h4>
            <i className="fas fa-bars mobile"></i>
          </div>
        }
        <div className="contains-logo">
          <img src="../../assets/if_logo.png" />
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
