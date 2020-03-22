import React, { Component } from 'react'

import { Viewer } from 'react-iiif-viewer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iiifUrl: 'http://free.iiifhosting.com/iiif/b7a919f56e394fd2cf4b7f477dfb9cbe75c796ec6a57611ca831f0409066407d/info.json'
    }
  }

  render () {
    return (
      <div className='demo'>
        <h1>react-iiif-viewer Demo</h1>
        <div className='viewer-wrapper'>
          <Viewer iiifUrl={this.state.iiifUrl} />
        </div>

        <button onClick={() => this.setState({iiifUrl: 'http://free.iiifhosting.com/iiif/ac56caab6e6d3e5957bdd565b067eb9299ab4faaaf5a4e437101666197add912/info.json'})
        }>change image</button>
      </div>
    )
  }
}
