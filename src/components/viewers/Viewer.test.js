import { render, fireEvent } from "@testing-library/react"
import React from "react"
import Viewer from './Viewer'
import { mockZoomBy, mockApplyConstraints, mockOpen } from '../../../__mocks__/openseadragon'

function renderViewer(){
  return render(<Viewer
    iiifUrl={'test url'}
  />)
}

describe('<Viewer />', () => {
  beforeEach(() => {
    mockZoomBy.mockClear();
    mockApplyConstraints.mockClear();
    mockOpen.mockClear();
  });

  it('renders not in full screen', () => {
    const { getByAltText } = renderViewer()
    expect(getByAltText('enter fullscreen')).toBeTruthy()
    expect(document.fullscreenElement).toBeFalsy()
  })

  it('should request to enter full screen when the enter fullscreen button is clicked', () => {
    const { getByAltText, getByTestId } = renderViewer()

    const viewerElement = getByTestId('react-iiif-viewer')
    viewerElement.requestFullScreen = jest.fn()

    const enterFullScreenButton = getByAltText('enter fullscreen')
    fireEvent.click(enterFullScreenButton);

    expect(viewerElement.requestFullScreen).toBeCalled()
  })

  it('should exit full screen when the exit fullscreen button is clicked', () => {
    document.exitFullscreen = jest.fn()
    const { getByAltText } = renderViewer()

    const enterFullScreenButton = getByAltText('enter fullscreen')
    fireEvent.click(enterFullScreenButton);

    const exitFullScreenButton = getByAltText('exit fullscreen')
    fireEvent.click(exitFullScreenButton);

    expect(document.exitFullscreen).toBeCalled()
  })

  it('should zoom in when the zoom in button is clicked', () => {
    const { getByAltText } = renderViewer()

    const zoomInButton = getByAltText('zoom in')
    fireEvent.click(zoomInButton);

    expect(mockZoomBy).toBeCalled()
    expect(mockApplyConstraints).toBeCalled()
  })

  it('should zoom out when the zoom out button is clicked', () => {
    const { getByAltText } = renderViewer()

    const zoomOutButton = getByAltText('zoom out')
    fireEvent.click(zoomOutButton);

    expect(mockZoomBy).toBeCalled()
    expect(mockApplyConstraints).toBeCalled()
  })

})
