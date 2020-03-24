import {fireEvent, render} from '@testing-library/react'
import React from "react";
import FullScreenControls from './FullScreenControls'

let enterFullScreenHandler = jest.fn(),
  exitFullScreenHandler = jest.fn();

function renderFullScreenControls(isFullScreen){
  return render(<FullScreenControls
    enterFullScreenHandler={enterFullScreenHandler}
    exitFullScreenHandler={exitFullScreenHandler}
    isFullScreen={isFullScreen}
  />)
}

describe('<FullScreenControls />', () => {
  it('renders the enterfull screen button when not in fullscreen mode', () => {
    const { getByAltText } = renderFullScreenControls(false)

    expect(getByAltText('enter fullscreen')).toBeTruthy()
  })

  it('hides the exit fullscreen button when not in fullscreen mode', () => {
    const { queryByAltText } = renderFullScreenControls(false)

    expect(queryByAltText('exit fullscreen')).toBeFalsy()
  })

  it('renders the exit fullscreen button when in fullscreen mode', () => {
    const { getByAltText } = renderFullScreenControls(true)

    expect(getByAltText('exit fullscreen')).toBeTruthy()
  })

  it('hides the enter fullscreen button when in fullscreen mode', () => {
    const { queryByAltText } = renderFullScreenControls(true)

    expect(queryByAltText('enter fullscreen')).toBeFalsy()
  })


  it('calls the enter fullscreen handler', () => {
    const { getByAltText } = renderFullScreenControls(false)

    const enterFullScreen = getByAltText("enter fullscreen")

    fireEvent.click(enterFullScreen)
    expect(enterFullScreenHandler).toBeCalled()
  })

  it('calls the exit fullscreen handler', () => {
    const { getByAltText } = renderFullScreenControls(true)

    const exitFullScreen = getByAltText("exit fullscreen")

    fireEvent.click(exitFullScreen)
    expect(exitFullScreenHandler).toBeCalled()
  })
})
