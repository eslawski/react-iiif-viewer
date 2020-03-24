import {fireEvent, render} from '@testing-library/react'
import React from "react";
import ZoomControls from './ZoomControls'

let zoomInHandler = jest.fn(),
  zoomOutHandler = jest.fn();

function renderZoomControls(){
  return render(<ZoomControls
    zoomInHandler={zoomInHandler}
    zoomOutHandler={zoomOutHandler}
  />)
}

describe('<ZoomControls />', () => {


  it('renders the zoom in and zoom out buttons', () => {
    const { getByAltText } = renderZoomControls()

    expect(getByAltText('zoom in')).toBeTruthy()
    expect(getByAltText('zoom out')).toBeTruthy()
  })

  it('calls the zoom-in and zoom-out handlers', () => {
    const { getByAltText } = renderZoomControls()

    const zoomInButton = getByAltText("zoom in")
    const zoomOutButton = getByAltText("zoom out")

    fireEvent.click(zoomInButton)
    expect(zoomInHandler).toBeCalled()

    fireEvent.click(zoomOutButton)
    expect(zoomOutHandler).toBeCalled()
  })
})
