import React from 'react'

const Flights = () => {
  return (
    <div>
      <div data-skyscanner-widget="SearchWidget"></div>
      <script src="https://widgets.skyscanner.net/widget-server/js/loader.js" async></script>
    </div>
  )
}

export default Flights
