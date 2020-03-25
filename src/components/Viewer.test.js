import { render } from "@testing-library/react"
import React from "react"
import Viewer from './Viewer'

function renderViewer(){
  return render(<Viewer
    iiifUrl={'test url'}
  />)
}

describe('<Viewer />', () => {

  it('should not render the toolbar', () => {
    const { queryByTestId } = renderViewer()

    expect(queryByTestId("toolbar")).toBeFalsy()
  })
})
