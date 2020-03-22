import React from 'react'
import PropTypes from 'prop-types'
import OpenSeadragon from 'openseadragon/build/openseadragon/openseadragon'
import styles from '../styles/Viewer.css'
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'

const viewerId = 'openseadragon-viewer'
const zoomInId = 'zoom-in-blah'
const zoomOutId = 'zoom-out-blah'

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
      <div className='react-iiif-viewer' style={{width: '100%', height: '100%', position: 'relative'}}>
        <div id={viewerId} className={styles.openSeadragonViewer} />
        <div className={styles.zoomControls}>
          <button id={zoomInId} className={styles.zoomIn}>
            <img src={plus} className={styles.zoomInIcon} alt='zoom in' />
          </button>
          <button id={zoomOutId} className={styles.zoomOut}>
            <img src={minus} className={styles.zoomOutIcon} alt='zoom out' />
          </button>
        </div>
      </div>
    )
  }
}

Viewer.propTypes = {
  iiifUrl: PropTypes.string.isRequired
}

export default Viewer
