import '@testing-library/jest-dom'

import { render, screen } from "@testing-library/react";
import React from "react";
import FullScreenControls from './FullScreenControls'

describe('<FullScreenControls />', () => {
  let fullScreenHandler = jest.fn(),
    exitFullScreenHandler = jest.fn();

  it('shows the full screen button when not in full screen', () => {
    render(<FullScreenControls
      enterFullScreen={fullScreenHandler}
      exitFullScreen={exitFullScreenHandler}
      isFullScreen={false}
    />)

    expect(screen.getByAltText('enter fullscreen')).toBeInTheDocument()
  })

  it('shows the full screen button when not in full screen', () => {
    render(<FullScreenControls
      enterFullScreen={fullScreenHandler}
      exitFullScreen={exitFullScreenHandler}
      isFullScreen={true}
    />)

    expect(screen.getByAltText('exit fullscreen')).toBeInTheDocument()
  })
})
