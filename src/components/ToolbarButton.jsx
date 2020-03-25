import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";

const Button = styled.button`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: ${props => props.isDisabled ? .3 : 1}
`

const ToolbarButton = ({onClickHandler, icon, titleText, isDisabled}) => {
  return (
    <Button onClick={onClickHandler} title={titleText} isDisabled={isDisabled}>
      {icon}
    </Button>
  )
}

ToolbarButton.propTypes = {
  onClickHandler: PropTypes.func,
  icon: PropTypes.element.isRequired,
  titleText: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool
}

ToolbarButton.defaultProps = {
  isDisabled: false
}

export default ToolbarButton
