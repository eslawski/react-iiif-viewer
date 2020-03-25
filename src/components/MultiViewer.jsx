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
import FullScreenAPI from '../helpers/FullScreenAPI'
import OpenSeadragonViewer from './OpenSeadragonViewer'
import ZoomControls from './ZoomControls'
import FullScreenControls from './FullScreenControls'

const TOOLBAR_HEIGHT = "50px"

const Container = styled.div`
  position: relative;
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
      drawerOpen: false,
      isInFullScreen: false
    }

    this.reactIIIFViewerRef = React.createRef()
    this.openSeadragonRef = React.createRef()
  }

  enterFullScreen() {
    FullScreenAPI.enter(this.reactIIIFViewerRef.current)
    this.setState({isInFullScreen: true})
  }

  exitFullScreen() {
    FullScreenAPI.exit()
    this.setState({isInFullScreen: false})
  }

  zoomIn() {
    this.openSeadragonRef.current.zoomIn();
  }

  zoomOut() {
    this.openSeadragonRef.current.zoomOut();
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

  getViewerWrapperHeight() {
    debugger;
    return `calc(${this.props.height} - ${this.props.showToolbar ? TOOLBAR_HEIGHT : "0px"})`
  }

  render() {
    const buttonColor = "#CDCDCD";

    return (
      <Container
        className='react-iiif-viewer'
        data-testid='react-iiif-viewer'
        ref={this.reactIIIFViewerRef}
        viewerWidth={this.props.width}
        viewerHeight={this.props.height}>

        <ViewerWrapper wrapperHeight={this.getViewerWrapperHeight()}>
          <OpenSeadragonViewer
            iiifUrl={this.props.iiifUrls[this.state.currentIndex]}
            ref={this.openSeadragonRef}
          />

          <Drawer isOpen={this.state.drawerOpen}/>
        </ViewerWrapper>

        <ZoomControls
          zoomInHandler={() => this.zoomIn()}
          zoomOutHandler={() => this.zoomOut()}
        />

        <FullScreenControls
          isInFullScreen={this.state.isInFullScreen}
          enterFullScreenHandler={() => this.enterFullScreen()}
          exitFullScreenHandler={() => this.exitFullScreen()}
        />

        {this.props.showToolbar &&
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
        }

      </Container>
    )
  }
}


MultiViewer.propTypes = {
  iiifUrls: PropTypes.array.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  /**
   * A prop that should not be visible in the documentation.
   *
   * @ignore
   */
  showToolbar: PropTypes.bool
}

MultiViewer.defaultProps = {
  width: '800px',
  height: '500px',
  showToolbar: true
}
export default MultiViewer
