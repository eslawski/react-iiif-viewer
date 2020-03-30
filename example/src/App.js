import React, { Component } from 'react'
import Viewer from '../../src/components/Viewer'
import MultiViewer from '../../src/components/MultiViewer'


export default class App extends Component {
  render () {
    return (
      <>
        <div className="description">
          <h2>MultiViewer</h2>
          <p>A component for displaying many IIIF images via an expandable thumbnail drawer.</p>
        </div>

        <MultiViewer
          height="600px"
          width="80%"
          iiifUrls={[
            "https://data.getty.edu/museum/api/iiif/635494/info.json",
            "https://data.getty.edu/museum/api/iiif/671108/info.json",
            "https://data.getty.edu/museum/api/iiif/194801/info.json",
            "https://data.getty.edu/museum/api/iiif/268179/info.json",
            "https://data.getty.edu/museum/api/iiif/878882/info.json",
            "https://data.getty.edu/museum/api/iiif/449723/info.json",
            "https://data.getty.edu/museum/api/iiif/50442/info.json",
            "https://data.getty.edu/museum/api/iiif/702578/info.json",
            "https://data.getty.edu/museum/api/iiif/635756/info.json",
            "https://data.getty.edu/museum/api/iiif/43/info.json",
            "https://data.getty.edu/museum/api/iiif/5657/info.json",
            "https://data.getty.edu/museum/api/iiif/403294/info.json",
            "https://data.getty.edu/museum/api/iiif/22322/info.json"




          ]}
        />

        <div className="description">
          <h2>Viewer</h2>
          <p>A simple component for displaying one IIIF image at a time.</p>
        </div>
        <Viewer
          height="600px"
          width="100%"
          iiifUrl="https://data.getty.edu/museum/api/iiif/635494/info.json"
        />


      </>
    )
  }
}
