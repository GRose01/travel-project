import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/common/header'
import Footer from './components/common/footer'

class App extends React.Component {
  constructor() {
    super()

    this.state = {}

  }


  render() {
    return(
      < Header />,
      < Footer />
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
