import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import ZoomControls from './ZoomControls'
import FullScreenControls from './FullScreenControls'
import OpenSeadragonViewer from './OpenSeadragonViewer'
import FullScreenAPI from '../helpers/FullScreenAPI'

const Container = styled.div`
  position: relative;
  width: ${props => props.viewerWidth};
  height: ${props => props.viewerHeight};
`

class Viewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isInFullScreen: false
    }

    this.reactIIIFViewerRef = React.createRef()
    this.openSeadragonRef = React.createRef()
  }

  enterFullScreen() {
    FullScreenAPI.enter(this.reactIIIFViewerRef.current)
    this.setState({isInFullScreen: true})
  }

  exitFullScreen() {
    FullScreenAPI.exit()
    this.setState({isInFullScreen: false})
  }

  zoomIn() {
    this.openSeadragonRef.current.zoomIn();
  }

  zoomOut() {
    this.openSeadragonRef.current.zoomOut();
  }

  render() {
    return (
      <Container
        className='react-iiif-viewer'
        data-testid='react-iiif-viewer'
        ref={this.reactIIIFViewerRef}
        viewerWidth={this.props.width}
        viewerHeight={this.props.height}
      >
        <OpenSeadragonViewer
          iiifUrl={this.props.iiifUrl}
          ref={this.openSeadragonRef}
        />

        <ZoomControls
          zoomInHandler={() => this.zoomIn()}
          zoomOutHandler={() => this.zoomOut()}
        />

        <FullScreenControls
          isInFullScreen={this.state.isInFullScreen}
          enterFullScreenHandler={() => this.enterFullScreen()}
          exitFullScreenHandler={() => this.exitFullScreen()}
        />
      </Container>
    )
  }
}

Viewer.propTypes = {
  iiifUrl: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}

Viewer.defaultProps = {
  width: '800px',
  height: '450px'
}
export default Viewer
