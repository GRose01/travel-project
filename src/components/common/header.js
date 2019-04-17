import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'
import Popup from 'reactjs-popup'




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

  handleClick() {
    if (!Auth.isAuthenticated) {
      console.log('helllo')
    }
  }

  render() {
    return (
      <div className="contains-headerElements">
        {!Auth.isAuthenticated() &&
          <div className="contains-login_register_profile">
            <h4 className="desktop"> <Link to='/login'>log in</Link> </h4>
            <h3 className="desktop">|</h3>
            <h4 className="desktop"> <Link to='/register'>register</Link> </h4>
            <Popup trigger={<button className="mobile popupButton"> <i className="fas fa-bars mobile"></i></button>} position="right top center">
              <div className="navbarPopup" >
                <h4 className="mobile navbarPopupText"> <Link to='/login'>log in</Link> </h4>
                <h4 className="mobile navbarPopupText"> <Link to='/register'>register</Link> </h4>
              </div>
            </Popup>



          </div>
        }
        {Auth.isAuthenticated() &&
          <div className="contains-login_register_profile">
            <h4 className="desktop"> <Link to='/mytrips'>my trips</Link> </h4>
            <h3 className="desktop">|</h3>
            <h4 className="desktop"> <Link to='/wishlist'>liked trips</Link> </h4>
            <h3 className="desktop">|</h3>
            <h4 className="desktop"> <Link to='/trips/new'>add a trip</Link> </h4>
            <Popup trigger={<button className="mobile popupButton"> <i className="fas fa-bars mobile"></i></button>} position="right top">
              <div className="navbarPopup"  >
                <h4 className="mobile navbarPopupText"> <Link to='/mytrips'>my trips</Link> </h4>
                <h4 className="mobile navbarPopupText"> <Link to='/wishlist'>liked trips</Link> </h4>
                <h4 className="mobile navbarPopupText"> <Link to='/trips/new'>add a trip</Link> </h4>
              </div>
            </Popup>
          </div>
        }
        <div className="contains-logo">
          <Link to='/'><img src="../../assets/if_logo.png" /> </Link>
        </div>
      </div>
    )
  }
}



export default withRouter(Header)
