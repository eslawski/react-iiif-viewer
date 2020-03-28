# React IIIF Viewer

A React component library built on [OpenSeadragon](https://openseadragon.github.io/) for displaying high resolution images with deep zooming capabilities on mobile and desktop.

Demo

<pic

### What is IIIF?

The "International Image Interoperability Framework", or [IIIF](https://iiif.io/) for short, is an open set of technical standards that provide uniformity to the way image-based resources are presented and delivered to end users.

IIIF images are served from a special server that breaks down the original image into small tiles. The browser can then make requests for these tiles as the user zooms/pans around the image. As the user zooms in deeper, high resolution tiles are requested to maintain quality and performance.

### Installation

Install via `npm`:

```
$ npm install react-iiif-viewer --save
```

### Components
A no frills viewer that displays one image at a time.

```
import { Viewer } from "react-iiif-viewer"

<Viewer
  iiifUrl="https://media.nga.gov/iiif/public/objects/1/0/6/3/8/2/106382-primary-0-nativeres.ptif/info.json"
/>
```

Props:


| prop      | required | type   | default | description                                                      |
|-----------|----------|--------|---------|------------------------------------------------------------------|
| `iiifUrl` | yes      | string | N/A     | The url of the IIIF image to be displayed                        |
| `width`   | no       | string | 800px   | A css dimension for the width of the viewer (500px, 100%, etc.)  |
| `height`  | no       | string | 500px   | A css dimension for the height of the viewer (500px, 100%, etc.) |


### Development

How to run demo
How to run tests

### How do I make these IIIF images?
