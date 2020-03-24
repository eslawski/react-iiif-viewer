export const mockZoomBy = jest.fn();
export const mockApplyConstraints = jest.fn();
export const mockOpen = jest.fn();

class OpenSeadragonMock {
  constructor() {
    this.viewport = {
      zoomBy: mockZoomBy,
      applyConstraints: mockApplyConstraints
    }
    this.open = mockOpen
  }


}

export default OpenSeadragonMock
