import '@testing-library/jest-dom'

import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Viewer from './Viewer'

describe('<Viewer />', () => {
  beforeEach(() => {
    render(<Viewer iiifUrl={'test url'} />)
  })

  it('renders not in full screen', () => {
    expect(screen.getByAltText('enter fullscreen')).toBeInTheDocument()
  })

  it('should enter full screen', () => {
    const viewer = screen.getByTestId('react-iiif-viewer')
    viewer.requestFullScreen = jest.fn()

    const zoomInButton = screen.getByAltText('enter fullscreen')
    fireEvent.click(zoomInButton);

    expect(viewer.requestFullScreen).toBeCalled()
  })

  it('should exit full screen', () => {
    document.exitFullscreen = jest.fn()

    const zoomInButton = screen.getByAltText('enter fullscreen')
    fireEvent.click(zoomInButton);

    const zoomOutButton = screen.getByAltText('exit fullscreen')
    fireEvent.click(zoomOutButton);

    expect(document.exitFullscreen).toBeCalled()
  })

})
