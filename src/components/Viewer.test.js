import '@testing-library/jest-dom'

import { render, screen } from "@testing-library/react";
import React from "react";
import Viewer from './Viewer'

describe('<Viewer />', () => {
  it('renders not in full screen', () => {
    render(<Viewer iiifUrl={'test url'} />)

    expect(screen.getByAltText('enter fullscreen')).toBeInTheDocument()
  })
})
