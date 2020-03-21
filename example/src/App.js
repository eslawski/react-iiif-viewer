import React, { Component } from 'react'

import IIIFViewer from 'react-iiif-viewer'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iiifUrl: 'http://free.iiifhosting.com/iiif/b7a919f56e394fd2cf4b7f477dfb9cbe75c796ec6a57611ca831f0409066407d/info.json'
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({iiifUrl: 'http://free.iiifhosting.com/iiif/7435567faf245996fcd1051856fecb4f8e9326c3eb44c907d5509638384cae30/info.json'})
    }, 5000)
  }

  render () {
    return (
      <div>
        <IIIFViewer iiifUrl={this.state.iiifUrl} />
      </div>
    )
  }
}
