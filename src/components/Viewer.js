import React from 'react'
import PropTypes from 'prop-types'
import OpenSeadragon from 'openseadragon/build/openseadragon/openseadragon'
import styled from 'styled-components'
import ZoomControls from './ZoomControls'

const viewerId = 'openseadragon-viewer'
const zoomInId = 'zoom-in'
const zoomOutId = 'zoom-out'

const ViewerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const OpenSeadragonViewer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #202020;
`

class Viewer extends React.Component {
  constructor(props) {
    super(props)

    this.openSeadragonViewer = null
  }

  componentDidMount() {
    this.openSeadragonViewer = new OpenSeadragon({
      id: viewerId,
      tileSources: [this.props.iiifUrl],
      zoomInButton: zoomInId,
      zoomOutButton: zoomOutId
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.iiifUrl !== prevProps.iiifUrl) {
      this.openSeadragonViewer.open([this.props.iiifUrl])
    }
  }

  render() {
    return (
      <ViewerWrapper className='react-iiif-viewer'>
        <OpenSeadragonViewer id={viewerId} />
        <ZoomControls zoomInId={zoomInId} zoomOutId={zoomOutId} />
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
