import React from 'react'
import Viewer from './Viewer'
import PropTypes from 'prop-types'
import Toolbar from './Toolbar'
import styled from '@emotion/styled'
import Left from '../images/left.svg'
import Right from '../images/right.svg'
import Gallery from '../images/gallery.svg'

import ToolbarButton from './ToolbarButton'

const TOOLBAR_HEIGHT = "50px"

const Container = styled.div`
  width: ${props => props.viewerWidth};
  height: ${props => props.viewerHeight};
`

const TestWrapper = styled.div`
  height: ${props => props.wrapperHeight};
  width: 100%;
  position: relative;
  overflow-y: hidden;
`

const Drawer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000;
  opacity: .7;
  position: absolute;
  top: 100%;
  transition: top .5s ease-in;

  &.open {
    top: 0;
  }
`

class MultiViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      drawerOpen: false
    }
  }

  nextImage() {
    this.setState({
      currentIndex: Math.min(this.state.currentIndex + 1, this.props.iiifUrls.length - 1)
    })
  }

  previousImage() {
    this.setState({
      currentIndex: Math.max(this.state.currentIndex - 1, 0)
    })
  }

  toggleDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }

  isFirstImage() {
    return this.state.currentIndex === 0;
  }

  isLastImage() {
    return this.state.currentIndex === this.props.iiifUrls.length - 1;
  }

  render() {
    const buttonColor = "#CDCDCD";

    return (
      <Container
        viewerWidth={this.props.width}
        viewerHeight={this.props.height}>

        <TestWrapper wrapperHeight={`calc(${this.props.height} - ${TOOLBAR_HEIGHT})`}>
          <Viewer
            iiifUrl={this.props.iiifUrls[this.state.currentIndex]}
            height="100%"
            width="100%"
          />
          <Drawer className={this.state.drawerOpen ? 'open' : ''}/>
        </TestWrapper>

        <Toolbar
          left={
            <ToolbarButton
              icon={<Left fill={buttonColor}/>}
              titleText="previous image"
              onClickHandler={() => this.previousImage()}
              isDisabled={this.isFirstImage()}
            />
          }
          center={
            <ToolbarButton
              icon={<Gallery fill={buttonColor}/>}
              titleText="more images"
              onClickHandler={() => this.toggleDrawer()}
            />
          }
          right={
            <ToolbarButton
              icon={<Right fill={buttonColor}/>}
              titleText="next image"
              onClickHandler={() => this.nextImage()}
              isDisabled={this.isLastImage()}
            />
          }
        />
      </Container>
    )
  }
}


MultiViewer.propTypes = {
  iiifUrls: PropTypes.array.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}

MultiViewer.defaultProps = {
  width: '800px',
  height: '500px'
}
export default MultiViewer
