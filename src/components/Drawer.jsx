import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 100%;
  transition: top .5s ease-in;
  z-index: 1000;

  &.opened {
    top: 0;
  }
`

const Thumbnail = styled.img`
  opacity: 1;
`

const Drawer = ({isOpen}) => {
  return (
    <Container data-testid="drawer" className={isOpen ? 'opened' : ''}>
      <Thumbnail src="http://free.iiifhosting.com/iiif/ac56caab6e6d3e5957bdd565b067eb9299ab4faaaf5a4e437101666197add912/full/163,/0/default.jpg" alt=""/>
      <Thumbnail src="http://free.iiifhosting.com/iiif/795c60bc9c543b4896a4c4488fce787fde53fa3b116f0443b72968c1c834d26f/full/189,/0/default.jpg" alt=""/>
      <Thumbnail src="http://free.iiifhosting.com/iiif/7bc1d638cd84d5cbb0527d9d796ea1ac77268ebfbd8339e1a776c8332e54d2c8/full/253,/0/default.jpg" alt=""/>
    </Container>
  )
}

Drawer.propTypes = {
  isOpen: PropTypes.bool
}

export default Drawer
