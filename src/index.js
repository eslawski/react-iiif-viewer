import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import OpenSeadragon from 'openseadragon/build/openseadragon/openseadragon'
import styles from './styles.css'

const viewerId = 'openseadragon-viewer'
const zoomInId = 'zoom-in-blah'
const zoomOutId = 'zoom-out-blah'

const IIIFViewer = ({iiifUrl}) => {
  const openSeadragonViewer = useRef(null)

  useEffect(() => {
    if (openSeadragonViewer.current) {
      openSeadragonViewer.current.open([iiifUrl])
    } else {
      openSeadragonViewer.current = new OpenSeadragon({
        id: viewerId,
        tileSources: [iiifUrl],
        zoomInButton: zoomInId,
        zoomOutButton: zoomOutId
      })
    }
  })

  return (
    <div className='react-iiif-viewer' style={{width: '100%', height: '100%', position: 'relative'}}>
      <div id={viewerId} style={{width: '100%', height: '100%', backgroundColor: '#202020'}} />
      <div className='viewer-controls' style={{position: 'absolute', top: 0, right: 0}}>
        <button id={zoomInId} className={styles.zoomIn}>zoomin</button>
        <button id={zoomOutId} className={styles.zoomOut}>zoomout</button>
      </div>
    </div>
  )
}

IIIFViewer.propTypes = {
  iiifUrl: PropTypes.string.isRequired
}

export default IIIFViewer
