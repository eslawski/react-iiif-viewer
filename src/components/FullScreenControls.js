import React from 'react'
import PropTypes from 'prop-types'
import expand from '../images/expand.svg'
import minimize from '../images/minimize.svg'
import styled from 'styled-components'
import ViewerButton from './ViewerButton'

const FullScreenControlsWrapper = styled.div`
  position: absolute;
  padding: 10px 0 0 10px;
  top: 0;
  left: 0;
`

const FullScreenControls = ({isFullScreen, enterFullScreen, exitFullScreen}) => {
  return (
    <FullScreenControlsWrapper>
      {!isFullScreen && <ViewerButton iconSrc={expand} onClick={enterFullScreen} altText='enter fullscreen'/> }
      {isFullScreen && <ViewerButton iconSrc={minimize} onClick={exitFullScreen} altText='exit fullscreen' /> }
    </FullScreenControlsWrapper>
  )
}

FullScreenControls.propTypes = {
  isFullScreen: PropTypes.bool.isRequired,
  enterFullScreen: PropTypes.func.isRequired,
  exitFullScreen: PropTypes.func.isRequired
}

export default FullScreenControls
