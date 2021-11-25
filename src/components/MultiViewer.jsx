import React from 'react'
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
import { fetchImageInfos } from '../helpers/ImageInfo'
import theme from '../helpers/theme'


const Container = styled.div`
  position: relative;
  width: ${props => props.viewerWidth};
  height: ${props => props.viewerHeight};
  display: flex;
  flex-direction: column;

  &.fullscreen {
    height: 100%;
  }
`

const ViewerWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow-y: hidden;
  flex-grow: 1;
  flex: 1;
`

class MultiViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: props.currentIndex || 0,
      drawerOpen: false,
      isInFullScreen: false,
      imageInfos: []
    }

    this.currentIndexChanged = props.currentIndexChanged

    this.reactIIIFViewerRef = React.createRef()
    this.openSeadragonRef = React.createRef()
    this.handleFullScreenChange = this.handleFullScreenChange.bind(this)
  }

  handleFullScreenChange() {
    if(document.fullscreenElement
      || document.webkitCurrentFullScreenElement
      || document.webkitFullscreenElement
      || document.mozFullScreenElement) {
      this.setState({isInFullScreen: true})
    } else {
      this.setState({
        isInFullScreen: false,
        drawerOpen: false
      })
    }
  }

  componentDidMount() {
    fetchImageInfos(this.props.iiifUrls)
      .then((imageInfos) => {
        this.setState({
          imageInfos: imageInfos
        })
      })

    // Unable to detect the ESC keypress when using the fullscreen api. As a result, must listen to these events:
    document.addEventListener("fullscreenchange", this.handleFullScreenChange);
    document.addEventListener("mozfullscreenchange", this.handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", this.handleFullScreenChange);
    document.addEventListener("msfullscreenchange", this.handleFullScreenChange);
  }

  componentWillUnmount() {
    document.removeEventListener("fullscreenchange", this.handleFullScreenChange);
    document.removeEventListener("webkitfullscreenchange", this.handleFullScreenChange);
    document.removeEventListener("mozfullscreenchange", this.handleFullScreenChange);
    document.removeEventListener("msfullscreenchange", this.handleFullScreenChange);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentIndex !== prevState.currentIndex && this.currentIndexChanged) {
      this.currentIndexChanged(this.state.currentIndex)
    }
  }


  enterFullScreen() {
    FullScreenAPI.enter(this.reactIIIFViewerRef.current)
  }

  exitFullScreen() {
    FullScreenAPI.exit()
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

  setImage(index) {
    this.setState({
      currentIndex: index
    })
    this.toggleDrawer()
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

  getThumbnailUrls() {
    return this.state.imageInfos.map((imageInfo) => {
      return imageInfo.getThumbnailUrl();
    })
  }

  render() {

    return (
      <Container
        className={`react-iiif-viewer ${this.state.isInFullScreen ? 'fullscreen' : ''}`}
        data-testid='react-iiif-viewer'
        ref={this.reactIIIFViewerRef}
        viewerWidth={this.props.width}
        viewerHeight={this.props.height}
        data-cur-iiif-url={this.props.iiifUrls[this.state.currentIndex]}
      >

        <ViewerWrapper>
          <OpenSeadragonViewer
            iiifUrl={this.props.iiifUrls[this.state.currentIndex]}
            ref={this.openSeadragonRef}
          />

          <Drawer
            thumbnailUrls={this.getThumbnailUrls()}
            isOpen={this.state.drawerOpen}
            isInFullScreen={this.state.isInFullScreen}
            currentIndex={this.state.currentIndex}
            onThumbnailSelectedHandler={(index) => this.setImage(index)}
          />
        </ViewerWrapper>

        <ZoomControls
          zoomInHandler={() => this.zoomIn()}
          zoomOutHandler={() => this.zoomOut()}
        />

        {FullScreenAPI.isEnabled() &&
            <FullScreenControls
              isInFullScreen={this.state.isInFullScreen}
              enterFullScreenHandler={() => this.enterFullScreen()}
              exitFullScreenHandler={() => this.exitFullScreen()}
          />
        }

        {this.props.showToolbar &&
          <Toolbar
            left={
              <ToolbarButton
                icon={<Left fill={theme.toolbarButtonColor}/>}
                titleText="previous image"
                onClickHandler={() => this.previousImage()}
                isDisabled={this.isFirstImage()}
              />
            }
            center={
              <ToolbarButton
                icon={<Gallery fill={theme.toolbarButtonColor}/>}
                titleText="more images"
                onClickHandler={() => this.toggleDrawer()}
              />
            }
            right={
              <ToolbarButton
                icon={<Right fill={theme.toolbarButtonColor}/>}
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
  showToolbar: PropTypes.bool
}

MultiViewer.defaultProps = {
  width: '800px',
  height: '500px',
  showToolbar: true
}
export default MultiViewer
