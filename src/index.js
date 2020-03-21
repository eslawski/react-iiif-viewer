import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import OpenSeadragon from 'openseadragon/build/openseadragon/openseadragon'

const viewerId = 'react-iiif-viewer'

const IIIFViewer = ({iiifUrl}) => {
  let openSeadragonViewer = useRef(null)

  useEffect(() => {
    if (openSeadragonViewer.current) {
      openSeadragonViewer.current.open([iiifUrl])
    } else {
      openSeadragonViewer.current = new OpenSeadragon({
        id: viewerId,
        tileSources: [iiifUrl]
      })
    }
  })

  return (
    <div id={viewerId} style={{width: 500, height: 500}} />
  )
}

IIIFViewer.propTypes = {
  iiifUrl: PropTypes.string.isRequired
}

export default IIIFViewer
