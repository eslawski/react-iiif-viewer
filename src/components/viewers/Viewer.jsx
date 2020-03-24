import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import ZoomControls from '../ZoomControls'
import FullScreenControls from '../FullScreenControls'
import OpenSeadragonViewer from '../OpenSeadragonViewer'
import FullScreenAPI from '../../helpers/fullscreenApi'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  width: ${props => props.viewerWidth};
  height: ${props => props.viewerHeight};
`

class Viewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFullScreen: false
    }

    this.reactIIIFViewerRef = React.createRef()
    this.openSeadragonRef = React.createRef()
  }

  enterFullScreen() {
    FullScreenAPI.enter(this.reactIIIFViewerRef.current)
    this.setState({isFullScreen: true})
  }

  exitFullScreen() {
    FullScreenAPI.exit()
    this.setState({isFullScreen: false})
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
          isFullScreen={this.state.isFullScreen}
          enterFullScreen={() => this.enterFullScreen()}
          exitFullScreen={() => this.exitFullScreen()}
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
  height: '500px'
}
export default Viewer
