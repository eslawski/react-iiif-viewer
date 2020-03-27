import React from 'react'
import PropTypes from 'prop-types'
import OpenSeadragon from 'openseadragon'
import styled from "@emotion/styled";
import { v4 as uuidv4 } from 'uuid';

const ZOOM_PER_CLICK = 2.0;
const ZOOM_IN_FACTOR = ZOOM_PER_CLICK / 1.0;
const ZOOM_OUT_FACTOR = 1.0 / ZOOM_PER_CLICK;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #202020;
`

class OpenSeadragonViewer extends React.Component {
  constructor(props) {
    super(props)
    this.viewerId = uuidv4();
    this.openSeadragon = null
  }

  componentDidMount() {
    this.openSeadragon = new OpenSeadragon({
      id: this.viewerId,
      tileSources: [this.props.iiifUrl],
      showNavigationControl: false,
      visibilityRatio: 1
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.iiifUrl !== prevProps.iiifUrl) {
      this.openSeadragon.open([this.props.iiifUrl])
    }
  }

  zoomIn() {
    this.openSeadragon.viewport.zoomBy(ZOOM_IN_FACTOR)
    this.openSeadragon.viewport.applyConstraints()
  }

  zoomOut() {
    this.openSeadragon.viewport.zoomBy(ZOOM_OUT_FACTOR)
    this.openSeadragon.viewport.applyConstraints()
  }

  render() {
    return <Container id={this.viewerId} />
  }
}

OpenSeadragonViewer.propTypes = {
  iiifUrl: PropTypes.string.isRequired
}

export default OpenSeadragonViewer
