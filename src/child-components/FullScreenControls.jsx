import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";
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
      {!isFullScreen && <ViewerButton onClick={enterFullScreen} altText='enter fullscreen'/> }
      {isFullScreen && <ViewerButton onClick={exitFullScreen} altText='exit fullscreen' /> }
    </FullScreenControlsWrapper>
  )
}

FullScreenControls.propTypes = {
  isFullScreen: PropTypes.bool.isRequired,
  enterFullScreen: PropTypes.func.isRequired,
  exitFullScreen: PropTypes.func.isRequired
}

export default FullScreenControls
