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


// describe("Button", () => {
//   test("should handle click events", () => {
//     const onClickMock = jest.fn();
//     const { container } = render(
//       <Button text="Click me, maybe?" onClick={onClickMock} />
//     );
//     const component = container.firstChild;
//
//     fireEvent.click(component);
//
//     expect(onClickMock).toBeCalled();
//   });
