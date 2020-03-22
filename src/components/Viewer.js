import React from 'react'
import PropTypes from 'prop-types'
import OpenSeadragon from 'openseadragon/build/openseadragon/openseadragon'
import styled from 'styled-components'
import ZoomControls from './ZoomControls'
import FullScreenControls from './FullScreenControls'

const VIEWER_ID = 'openseadragon-viewer'
const ZOOM_IN_BUTTON_ID = 'zoom-in'
const ZOOM_OUT_BUTTON_ID = 'zoom-out'

const ViewerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  width: ${props => props.viewerWidth};
  height: ${props => props.viewerHeight};
`

const OpenSeadragonViewer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #202020;
`

class Viewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFullScreen: false
    }

    this.reactIIIFViewerRef = React.createRef()
    this.openSeadragonViewer = null
  }

  componentDidMount() {
    this.openSeadragonViewer = new OpenSeadragon({
      id: VIEWER_ID,
      tileSources: [this.props.iiifUrl],
      zoomInButton: ZOOM_IN_BUTTON_ID,
      zoomOutButton: ZOOM_OUT_BUTTON_ID
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.iiifUrl !== prevProps.iiifUrl) {
      this.openSeadragonViewer.open([this.props.iiifUrl])
    }
  }

  enterFullScreen() {
    const element = this.reactIIIFViewerRef.current

    if (element.requestFullScreen) {
      element.requestFullScreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    }

    this.setState({
      isFullScreen: true
    })
  }

  exitFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }

    this.setState({
      isFullScreen: false
    })
  }

  render() {
    return (
      <ViewerWrapper
        className='react-iiif-viewer'
        ref={this.reactIIIFViewerRef}
        viewerWidth={this.props.width}
        viewerHeight={this.props.height}
      >
        <OpenSeadragonViewer id={VIEWER_ID} />

        <ZoomControls
          zoomInButtonId={ZOOM_IN_BUTTON_ID}
          zoomOutButtonId={ZOOM_OUT_BUTTON_ID}
        />

        <FullScreenControls
          isFullScreen={this.state.isFullScreen}
          enterFullScreen={() => this.enterFullScreen()}
          exitFullScreen={() => this.exitFullScreen()}
        />
      </ViewerWrapper>
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
