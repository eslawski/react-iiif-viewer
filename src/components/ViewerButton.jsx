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

const Img = styled.img`
  height: 80%;
  width: 80%;
`

const ViewerButton = ({onClickHandler, iconSrc, altText}) => {
  return (
    <Button onClick={onClickHandler}>
      <Img src={iconSrc} alt={altText} />
    </Button>
  )
}

ViewerButton.propTypes = {
  onClickHandler: PropTypes.func,
  iconSrc: PropTypes.string,
  altText: PropTypes.string
}

export default ViewerButton
