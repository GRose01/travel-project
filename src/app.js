import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

import Home from './components/common/home'
import Register from './components/user/register'
import Login from './components/user/login'
import Header from './components/common/header'
import Footer from './components/common/footer'
import SecureRoute from './components/common/secureRoute'
import ViewTrip from './components/trips/viewtrip'
import EditTrip from './components/trips/edittrip'
import CreateTrip from './components/trips/createtrip'
import Filter from './components/pullables/filter'
import MyTrips from './components/user/mytrips'
import Wishlist from './components/user/wishlist'
import Map from './components/pullables/mapbox'



class App extends React.Component {

  render() {
    return(

      <Browser>
        <Header />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <SecureRoute path="/trips/new" component={CreateTrip} />
          <SecureRoute path="/trips/:id/" component={ViewTrip} />
          <SecureRoute path="/trips/:id/edit" component={EditTrip} />
          <SecureRoute path="/mytrips" component={MyTrips} />
          <SecureRoute path="/wishlist" component={Wishlist} />
          <Route path="/filter" component={Filter} />
          <Route path="/map" component={Map} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Browser>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
