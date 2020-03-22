import React from 'react'
import PropTypes from 'prop-types'
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'
import styled from 'styled-components'
import ViewerButton from './ViewerButton'

const ZoomControlsWrapper = styled.div`
  position: absolute;
  padding: 10px 10px 0 0;
  top: 0;
  right: 0;

  & button:first-child  {
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid #A9A9A9 !important;
  }

  & button:last-child {
    border-radius: 0 0 4px 4px;
  }
`

const ZoomControls = ({zoomInId, zoomOutId}) => {
  return (
    <ZoomControlsWrapper>
      <ViewerButton id={zoomInId} iconSrc={plus} />
      <ViewerButton id={zoomOutId} iconSrc={minus} />
    </ZoomControlsWrapper>
  )
}

ZoomControls.propTypes = {
  zoomInId: PropTypes.string.isRequired,
  zoomOutId: PropTypes.string.isRequired
}

export default ZoomControls
