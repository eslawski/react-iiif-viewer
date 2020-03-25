import {fireEvent, render} from '@testing-library/react'
import React from "react";
import FullScreenControls from './FullScreenControls'

let enterFullScreenHandler = jest.fn(),
  exitFullScreenHandler = jest.fn();

function renderFullScreenControls(isFullScreen){
  return render(<FullScreenControls
    enterFullScreenHandler={enterFullScreenHandler}
    exitFullScreenHandler={exitFullScreenHandler}
    isInFullScreen={isFullScreen}
  />)
}

describe('<FullScreenControls />', () => {
  it('renders the enterfull screen button when not in fullscreen mode', () => {
    const { getByTitle } = renderFullScreenControls(false)

    expect(getByTitle('enter fullscreen')).toBeTruthy()
  })

  it('hides the exit fullscreen button when not in fullscreen mode', () => {
    const { queryByTitle } = renderFullScreenControls(false)

    expect(queryByTitle('exit fullscreen')).toBeFalsy()
  })

  it('renders the exit fullscreen button when in fullscreen mode', () => {
    const { getByTitle } = renderFullScreenControls(true)

    expect(getByTitle('exit fullscreen')).toBeTruthy()
  })

  it('hides the enter fullscreen button when in fullscreen mode', () => {
    const { queryByTitle } = renderFullScreenControls(true)

    expect(queryByTitle('enter fullscreen')).toBeFalsy()
  })


  it('calls the enter fullscreen handler', () => {
    const { getByTitle } = renderFullScreenControls(false)

    const enterFullScreen = getByTitle("enter fullscreen")

    fireEvent.click(enterFullScreen)
    expect(enterFullScreenHandler).toBeCalled()
  })

  it('calls the exit fullscreen handler', () => {
    const { getByTitle } = renderFullScreenControls(true)

    const exitFullScreen = getByTitle("exit fullscreen")

    fireEvent.click(exitFullScreen)
    expect(exitFullScreenHandler).toBeCalled()
  })
})
