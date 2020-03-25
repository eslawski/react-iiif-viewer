import React from 'react'
import Viewer from './Viewer'
import PropTypes from 'prop-types'
import Toolbar from './Toolbar'
import styled from '@emotion/styled'
import Left from '../images/left.svg'
import Right from '../images/right.svg'
import Gallery from '../images/gallery.svg'

import ToolbarButton from './ToolbarButton'
import Drawer from './Drawer'

const TOOLBAR_HEIGHT = "50px"

const Container = styled.div`
  width: ${props => props.viewerWidth};
  height: ${props => props.viewerHeight};
`

const ViewerWrapper = styled.div`
  height: ${props => props.wrapperHeight};
  width: 100%;
  position: relative;
  overflow-y: hidden;
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

        <ViewerWrapper wrapperHeight={`calc(${this.props.height} - ${TOOLBAR_HEIGHT})`}>
          <Viewer
            iiifUrl={this.props.iiifUrls[this.state.currentIndex]}
            height="100%"
            width="100%"
          />
          <Drawer isOpen={this.state.drawerOpen}/>
        </ViewerWrapper>

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
