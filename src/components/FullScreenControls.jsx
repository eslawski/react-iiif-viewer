import React from 'react'
import PropTypes from 'prop-types'
import Expand from '../images/expand.svg'
import Minimize from '../images/minimize.svg'
import styled from "@emotion/styled";
import ViewerButton from './ViewerButton'

const Containter = styled.div`
  position: absolute;
  padding: 10px 0 0 10px;
  top: 0;
  left: 0;
`

const FullScreenControls = ({isInFullScreen, enterFullScreenHandler, exitFullScreenHandler}) => {
  const renderButton = () => {
    if (isInFullScreen) {
      return <ViewerButton
        icon={<Minimize/>}
        onClickHandler={exitFullScreenHandler}
        titleText='exit fullscreen'
      />
    }

    return <ViewerButton
      icon={<Expand/>}
      onClickHandler={enterFullScreenHandler}
      titleText='enter fullscreen'
    />
  }

  return (
    <Containter data-testid="fullscreen-controls">{renderButton()}</Containter>
  )
}

FullScreenControls.propTypes = {
  isInFullScreen: PropTypes.bool.isRequired,
  enterFullScreenHandler: PropTypes.func.isRequired,
  exitFullScreenHandler: PropTypes.func.isRequired
}

export default FullScreenControls
