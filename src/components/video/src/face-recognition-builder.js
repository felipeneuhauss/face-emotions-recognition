import * as faceApi from 'face-api.js'

const MODEL_PATH = '/models'

class FaceRecognitionBuilder {
  constructor() {
    this.faceApi = faceApi
    const defaultFunctionValue = () => {}
    this.onFaceApiLoaded = defaultFunctionValue
    this.onExpressionRecognized = defaultFunctionValue
  }

  setOnFaceApiLoaded = (fn) => {
    this.onFaceApiLoaded = fn
    return this
  }

  setOnExpressionRecognized = (fn) => {
    this.onExpressionRecognized = fn
    return this
  }

  setVideoElement (videoElement) {
    this.videoElement = videoElement
    return this
  }

  setVideoContainer (videoContainer) {
    this.videoContainer = videoContainer
    return this
  }

  processVideoExpressions () {
    const canvas = this.faceApi.createCanvasFromMedia(this.videoElement)
    this.videoContainer.append(canvas)
    const videoElementInfo = this.videoElement.getBoundingClientRect()
    const displaySize = { width: videoElementInfo.width, height: videoElementInfo.height }
    this.faceApi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
      const detections = await this.faceApi.detectAllFaces(this.videoElement, new this.faceApi.TinyFaceDetectorOptions())
        .withFaceLandmarks().withFaceExpressions()
      const resizedDetections = this.faceApi.resizeResults(detections, displaySize)
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
      this.faceApi.draw.drawDetections(canvas, resizedDetections)
      this.faceApi.draw.drawFaceLandmarks(canvas, resizedDetections)
      this.faceApi.draw.drawFaceExpressions(canvas, resizedDetections)
      this.onExpressionRecognized(resizedDetections)
    }, 100)
  }

  build () {
    Promise.all([
      this.faceApi.nets.tinyFaceDetector.loadFromUri(MODEL_PATH),
      this.faceApi.nets.faceLandmark68Net.loadFromUri(MODEL_PATH),
      this.faceApi.nets.faceRecognitionNet.loadFromUri(MODEL_PATH),
      this.faceApi.nets.faceExpressionNet.loadFromUri(MODEL_PATH)
    ]).then(this.onFaceApiLoaded())
  }

}

export default FaceRecognitionBuilder
