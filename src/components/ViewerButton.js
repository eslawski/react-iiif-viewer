import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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

const ViewerButton = ({id, iconSrc, onClick}) => {
  return (
    <Button id={id} onClick={onClick}>
      <Img src={iconSrc} />
    </Button>
  )
}

ViewerButton.propTypes = {
  id: PropTypes.string,
  iconSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default ViewerButton
