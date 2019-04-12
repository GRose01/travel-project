import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Header from './components/common/header'
import Footer from './components/common/footer'
// import Home from './components/common/home'
import TripForm from './components/pullables/TripForm'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}

  }


  render() {
    return(
      <div className="wrapper">
        < Header />
        < TripForm />
        < Footer />
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
