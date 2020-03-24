import React from 'react'
import PropTypes from 'prop-types'
import expand from '../images/expand.svg'
import minimize from '../images/minimize.svg'
import styled from "@emotion/styled";
import ViewerButton from './ViewerButton'

const Containter = styled.div`
  position: absolute;
  padding: 10px 0 0 10px;
  top: 0;
  left: 0;
`

const FullScreenControls = ({isFullScreen, enterFullScreenHandler, exitFullScreenHandler}) => {
  return (
    <Containter>
      {!isFullScreen && <ViewerButton iconSrc={expand} onClickHandler={enterFullScreenHandler} altText='enter fullscreen'/> }
      {isFullScreen && <ViewerButton iconSrc={minimize} onClickHandler={exitFullScreenHandler} altText='exit fullscreen' /> }
    </Containter>
  )
}

FullScreenControls.propTypes = {
  isFullScreen: PropTypes.bool.isRequired,
  enterFullScreenHandler: PropTypes.func.isRequired,
  exitFullScreenHandler: PropTypes.func.isRequired
}

export default FullScreenControls
