import React, { Component } from 'react'
import Viewer from '../../src/components/Viewer'
import MultiViewer from '../../src/components/MultiViewer'


export default class App extends Component {
  render () {
    return (
      <>
        <h2>MultiViewer</h2>
        <p>A component for interacting with many IIIF images at once.</p>
        <MultiViewer
          height="500px"
          width="100%"
          iiifUrls={["http://free.iiifhosting.com/iiif/ac56caab6e6d3e5957bdd565b067eb9299ab4faaaf5a4e437101666197add912/info.json",
            "http://free.iiifhosting.com/iiif/795c60bc9c543b4896a4c4488fce787fde53fa3b116f0443b72968c1c834d26f/info.json",
            "http://free.iiifhosting.com/iiif/7bc1d638cd84d5cbb0527d9d796ea1ac77268ebfbd8339e1a776c8332e54d2c8/info.json",
            "http://free.iiifhosting.com/iiif/ac56caab6e6d3e5957bdd565b067eb9299ab4faaaf5a4e437101666197add912/info.json",
            "http://free.iiifhosting.com/iiif/795c60bc9c543b4896a4c4488fce787fde53fa3b116f0443b72968c1c834d26f/info.json",
            "http://free.iiifhosting.com/iiif/7bc1d638cd84d5cbb0527d9d796ea1ac77268ebfbd8339e1a776c8332e54d2c8/info.json",
            "http://free.iiifhosting.com/iiif/ac56caab6e6d3e5957bdd565b067eb9299ab4faaaf5a4e437101666197add912/info.json",
            "http://free.iiifhosting.com/iiif/795c60bc9c543b4896a4c4488fce787fde53fa3b116f0443b72968c1c834d26f/info.json",
            "http://free.iiifhosting.com/iiif/7bc1d638cd84d5cbb0527d9d796ea1ac77268ebfbd8339e1a776c8332e54d2c8/info.json",
            "http://free.iiifhosting.com/iiif/ac56caab6e6d3e5957bdd565b067eb9299ab4faaaf5a4e437101666197add912/info.json",
            "http://free.iiifhosting.com/iiif/795c60bc9c543b4896a4c4488fce787fde53fa3b116f0443b72968c1c834d26f/info.json",
            "http://free.iiifhosting.com/iiif/7bc1d638cd84d5cbb0527d9d796ea1ac77268ebfbd8339e1a776c8332e54d2c8/info.json",
            "http://free.iiifhosting.com/iiif/ac56caab6e6d3e5957bdd565b067eb9299ab4faaaf5a4e437101666197add912/info.json",
            "http://free.iiifhosting.com/iiif/795c60bc9c543b4896a4c4488fce787fde53fa3b116f0443b72968c1c834d26f/info.json",
            "http://free.iiifhosting.com/iiif/7bc1d638cd84d5cbb0527d9d796ea1ac77268ebfbd8339e1a776c8332e54d2c8/info.json",
            "http://free.iiifhosting.com/iiif/ac56caab6e6d3e5957bdd565b067eb9299ab4faaaf5a4e437101666197add912/info.json",
            "http://free.iiifhosting.com/iiif/795c60bc9c543b4896a4c4488fce787fde53fa3b116f0443b72968c1c834d26f/info.json",
            "http://free.iiifhosting.com/iiif/7bc1d638cd84d5cbb0527d9d796ea1ac77268ebfbd8339e1a776c8332e54d2c8/info.json"]}
        />

        <h2>Viewer</h2>
        <p>A simple component for displaying one IIIF image.</p>
        <Viewer
          height="500px"
          width="100%"
          iiifUrl="http://free.iiifhosting.com/iiif/b7a919f56e394fd2cf4b7f477dfb9cbe75c796ec6a57611ca831f0409066407d/info.json"
        />


      </>
    )
  }
}
