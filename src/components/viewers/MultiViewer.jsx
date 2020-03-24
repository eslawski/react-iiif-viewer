import React from 'react'
import Viewer from './Viewer'
import PropTypes from 'prop-types'

class MultiViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }

  componentDidUpdate(prevProps) {
    // respond to changes in props.iiifUrls
  }

  render() {
    return (
      <>
        <Viewer iiifUrl={this.props.iiifUrls[this.state.currentIndex]} openSeadragonViewId={"hello-word"}/>
        <button onClick={() => {this.setState({currentIndex: this.state.currentIndex + 1})}}>next</button>
        <button onClick={() => {this.setState({currentIndex: this.state.currentIndex - 1})}}>previous</button>
      </>
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
