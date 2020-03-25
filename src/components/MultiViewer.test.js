import { render, fireEvent } from "@testing-library/react"
import React from "react"
import MultiViewer from './MultiViewer'
import { mockOpen } from '../../__mocks__/openseadragon'
import { matchers } from 'jest-emotion'

expect.extend(matchers)

function renderViewer(){
  return render(<MultiViewer
    iiifUrls={[
      'url1',
      'url2',
      'url3'
    ]}
  />)
}

describe('<MultiViewer />', () => {
  beforeEach(() => {
    mockOpen.mockClear();
  });

  it('renders the toolbar buttons', () => {
    const { getByTitle } = renderViewer()

    expect(getByTitle('previous image')).toBeTruthy()
    expect(getByTitle('more images')).toBeTruthy()
    expect(getByTitle('next image')).toBeTruthy()
  })

  it('disables the previous button when on the first image', () => {
    const { getByTitle } = renderViewer()

    expect(getByTitle('previous image')).toHaveStyleRule('opacity', '0.3')
  })

  it('does nothing when the previous button is clicked on the first image', () => {
    const { getByTitle } = renderViewer()

    const previousButton = getByTitle('previous image')
    fireEvent.click(previousButton)
  })

  it('disables the next button when on the last image', () => {
    const { getByTitle } = renderViewer()

    const nextButton = getByTitle('next image')
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)

    expect(nextButton).toHaveStyleRule('opacity', '0.3')
  })

  it('does nothing when the next button is clicked on the last image', () => {
    const { getByTitle } = renderViewer()

    const nextButton = getByTitle('next image')
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)

    fireEvent.click(nextButton)
  })

  it('it opens the next image when the next button is clicked', () => {
    const { getByTitle } = renderViewer()

    const nextButton = getByTitle('next image')
    fireEvent.click(nextButton)

    expect(mockOpen).toHaveBeenCalled()
  })

  it('it opens the previous image when the previous button is clicked', () => {
    const { getByTitle } = renderViewer()

    const nextButton = getByTitle('next image')
    const previousButton = getByTitle('previous image')
    fireEvent.click(nextButton)
    mockOpen.mockClear();
    fireEvent.click(previousButton)

    expect(mockOpen).toHaveBeenCalled()
  })
})
