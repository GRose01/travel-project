import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor() {
    super()

    this.state = {}

  }


  render() {
    return(
      <h1> hello darkness my old friend </h1>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
