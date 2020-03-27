import axios from 'axios'

/**
 * Convenience class for storing things obtained from the info.json
 */
export default class ImageInfo {
  constructor(iiifInfo) {
    this.id = iiifInfo["@id"]
    this.sizes = iiifInfo["sizes"]
    this.width = iiifInfo["width"]
    this.height = iiifInfo["height"]
  }

  getThumbnailUrl() {
    const idealWidth = 400;
    const widthToRequest = Math.min(this.width, idealWidth)

    return `${this.id}/full/${widthToRequest},/0/default.jpg`
  }
}

export function fetchImageInfo(iiifUrl) {
  return axios.get(iiifUrl)
}

export function fetchImageInfos(iiifUrls) {
  const imageInfoRequests = iiifUrls.map((iiifUrl) => fetchImageInfo(iiifUrl))

  return axios.all(imageInfoRequests)
    .then((response) => {
      const imageInfos = []

      response.forEach((response) => {
        imageInfos.push(new ImageInfo(response.data))
      })

      return imageInfos
    })
}
