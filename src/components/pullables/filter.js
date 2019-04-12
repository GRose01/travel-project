import React from 'react'
import Select from 'react-select'

import SubmitButton from '../pullables/submitbutton'

class Filter extends React.Component{
  constructor(){
    super()

  }


  render(){
    return(
      <main>
        <div className="contains-budgetSearch">
          <Select
            placeholder="How much are you looking to spend per person?"/>
        </div>
        <div className="contains-categorySearch">
          <Select
            placeholder="What type of holiday? (Pick as many as you like)"
            name="Categories"
            isMulti
          />
        </div>
        <SubmitButton />
      </main>
    )
  }
}


export default Filter
