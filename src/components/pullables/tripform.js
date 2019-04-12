import React from 'react'
import Select from 'react-select'
import axios from 'axios'


import Auth from '../lib/auth'
import SubmitButton from '../pullables/submitbutton'

const fileStackKey = ('Ad9D3qYyQ7m4ExYBv3yMAz')

import * as filestack from 'filestack-js'
const client = filestack.init(fileStackKey)

class TripForm extends React.Component {
  constructor(){
    super()

    this.state = {



    }
    this.handleClick = this.handleClick.bind(this)

  }

  photoUpload() {
    const options = {
      accept: ['image/*'],
      onFileUploadFinished: file => {
        this.setState({ image: file.url })
      }
    }
    client.picker(options).open()
  }

  handleClick() {
    this.photoUpload()
  }

  storePhotos(photos) {
    axios.post('/api/user', photos, { headers: { Authorization: `Bearer ${Auth.gettoken()}`}})
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }


  render(){
    return(
      <main>
        <div className="contains-placeSearch">
          <Select
            placeholder="Where did you go?"
          />
        </div>
        <div className="contains-budgetSearch">
          <Select
            placeholder="How much did you spend per person?"/>
        </div>
        <div className="contains-description_photoUpload">
          <input
            placeholder="Give us a brief summary of the trip."
            type="text"
          />
          <button
            onClick={this.handleClick}>
            <i className="far fa-file-image"></i>
          </button>
        </div>
        <div className="contains-categorySearch">
          <Select
            placeholder="Which categories match your trip?"
            name="Categories"
            isMulti
          />
        </div>
        <SubmitButton />

      </main>
    )
  }
}


export default TripForm
