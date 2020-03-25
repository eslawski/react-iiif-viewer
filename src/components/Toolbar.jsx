import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background-color: #000000;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Toolbar = ({left, center, right}) => {
  return (
    <Container>
      <Left>{left}</Left>
      <Center>{center}</Center>
      <Right>{right}</Right>
    </Container>
  )
}

Toolbar.propTypes = {
  left: PropTypes.element,
  center: PropTypes.element,
  right: PropTypes.element
}

export default Toolbar
