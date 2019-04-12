import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

import Home from './components/common/home'
import Header from './components/common/header'
import Footer from './components/common/footer'
import Register from './components/user/register'
import Login from './components/user/login'
import ViewTrip from './components/trips/viewtrip'
import EditTrip from './components/trips/edittrip'
import CreateTrip from './components/trips/createtrip'
import Filter from './components/pullables/filter'




class App extends React.Component {

  render() {
    return(

      <Browser>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/trips/:id/" component={ViewTrip} />
          <Route path="/trips/new" component={CreateTrip} />
          <Route path="/trips/:id/edit" component={EditTrip} />
          <Route path="/filter" component={Filter} />
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


// <Route path="/register" component={Register} />
