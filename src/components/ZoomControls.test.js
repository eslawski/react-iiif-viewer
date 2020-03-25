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
    const { getByTitle } = renderZoomControls()

    expect(getByTitle('zoom in')).toBeTruthy()
    expect(getByTitle('zoom out')).toBeTruthy()
  })

  it('calls the zoom-in and zoom-out handlers', () => {
    const { getByTitle } = renderZoomControls()

    const zoomInButton = getByTitle("zoom in")
    const zoomOutButton = getByTitle("zoom out")

    fireEvent.click(zoomInButton)
    expect(zoomInHandler).toBeCalled()

    fireEvent.click(zoomOutButton)
    expect(zoomOutHandler).toBeCalled()
  })
})
