import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Header from './components/common/header'
import Footer from './components/common/footer'
import Home from './components/common/home'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}

  }


  render() {
    return(
      <div>
        < Header />
        < Home />
        < Footer />
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
