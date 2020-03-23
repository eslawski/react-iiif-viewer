import '@testing-library/jest-dom'

import React from 'react'
import {render, screen} from '@testing-library/react'
import Viewer from '../components/Viewer'

describe('<Viewer />', () => {
  it('renders not in full screen', () => {
    render(<Viewer iiifUrl={'test url'} />)

    expect(screen.getByAltText('enter fullscreen')).toBeInTheDocument()
  })
})
