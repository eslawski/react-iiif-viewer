
export default class FullScreenAPI {

  static enter(element) {
    if (element.requestFullScreen) {
      element.requestFullScreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    }
  }

  static exit() {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  }

  /**
   * Check if the full screen API available. Devices like the iPhone currently do not support
   * full screen experiences.
   */
  static isEnabled() {
    return document.fullscreenEnabled
  }
}
