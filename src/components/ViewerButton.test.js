import {fireEvent, render} from '@testing-library/react'
import React from "react";
import ViewerButton from './ViewerButton'

let onClickHandler = jest.fn();

function renderViewerButton(){
  return render(<ViewerButton
    onClickHandler={onClickHandler}
    iconSrc={"/some-path"}
    altText={"test alt text"}
  />)
}

describe('<ViewerButton />', () => {
  it('it renders the proper alt text', () => {
    const { getByAltText } = renderViewerButton()

    expect(getByAltText('test alt text')).toBeTruthy()
  })

  it('calls the onClickHandler when clicked', () => {
    const { getByAltText } = renderViewerButton()

    const testButton = getByAltText("test alt text")

    fireEvent.click(testButton)
    expect(onClickHandler).toBeCalled()
  })
})
