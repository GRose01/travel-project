import React from 'react'

class FlightWidget extends React.Component {

  componentDidMount() {

    window.skyscanner.widgets.load()

  }

  render() {
    const location = "'"+this.props.destination+"'"
    return (
      <div className="contains-skyscanner"
        data-skyscanner-widget="SearchWidget"
        data-locale="en-GB"
        data-params="colour:solar;fontColour:#000;buttonColour:rgba(174,203,54, 0.5);buttonFontColour:#fff;"
        data-responsive="true"
        data-destination-name={location}
        data-origin-geo-lookup="true"
      />
    )
  }
}

export default FlightWidget
