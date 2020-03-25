import {fireEvent, render} from '@testing-library/react'
import React from "react";
import ViewerButton from './ViewerButton'

let onClickHandler = jest.fn();

function renderViewerButton(){
  return render(<ViewerButton
    onClickHandler={onClickHandler}
    icon={<div/>}
    titleText={"test title text"}
  />)
}

describe('<ViewerButton />', () => {
  it('it renders the proper alt text', () => {
    const { getByTitle } = renderViewerButton()

    expect(getByTitle('test title text')).toBeTruthy()
  })

  it('calls the onClickHandler when clicked', () => {
    const { getByTitle } = renderViewerButton()

    const testButton = getByTitle("test title text")

    fireEvent.click(testButton)
    expect(onClickHandler).toBeCalled()
  })
})
