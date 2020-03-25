import { render, fireEvent } from "@testing-library/react"
import React from "react"
import Viewer from './Viewer'
import { mockZoomBy, mockApplyConstraints } from '../../__mocks__/openseadragon'

function renderViewer(){
  return render(<Viewer
    iiifUrl={'test url'}
  />)
}

describe('<Viewer />', () => {
  beforeEach(() => {
    mockZoomBy.mockClear();
    mockApplyConstraints.mockClear();
  });

  it('renders not in full screen', () => {
    const { getByTitle } = renderViewer()
    expect(getByTitle('enter fullscreen')).toBeTruthy()
    expect(document.fullscreenElement).toBeFalsy()
  })

  it('should request to enter full screen when the enter fullscreen button is clicked', () => {
    const { getByTitle, getByTestId } = renderViewer()

    const viewerElement = getByTestId('react-iiif-viewer')
    viewerElement.requestFullScreen = jest.fn()

    const enterFullScreenButton = getByTitle('enter fullscreen')
    fireEvent.click(enterFullScreenButton);

    expect(viewerElement.requestFullScreen).toBeCalled()
  })

  it('should exit full screen when the exit fullscreen button is clicked', () => {
    document.exitFullscreen = jest.fn()
    const { getByTitle } = renderViewer()

    const enterFullScreenButton = getByTitle('enter fullscreen')
    fireEvent.click(enterFullScreenButton);

    const exitFullScreenButton = getByTitle('exit fullscreen')
    fireEvent.click(exitFullScreenButton);

    expect(document.exitFullscreen).toBeCalled()
  })

  it('should zoom in when the zoom in button is clicked', () => {
    const { getByTitle } = renderViewer()

    const zoomInButton = getByTitle('zoom in')
    fireEvent.click(zoomInButton);

    expect(mockZoomBy).toBeCalled()
    expect(mockApplyConstraints).toBeCalled()
  })

  it('should zoom out when the zoom out button is clicked', () => {
    const { getByTitle } = renderViewer()

    const zoomOutButton = getByTitle('zoom out')
    fireEvent.click(zoomOutButton);

    expect(mockZoomBy).toBeCalled()
    expect(mockApplyConstraints).toBeCalled()
  })

})
