import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";

const Button = styled.button`
  display: block !important;
  height: 35px;
  width: 35px;
  background-color: #D0D0D0;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
`

const ViewerButton = ({onClickHandler, icon, titleText}) => {
  return (
    <Button onClick={onClickHandler} title={titleText}>
      {icon}
    </Button>
  )
}

ViewerButton.propTypes = {
  onClickHandler: PropTypes.func,
  icon: PropTypes.element,
  titleText: PropTypes.string
}

export default ViewerButton
