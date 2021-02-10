import * as faceApi from 'face-api.js'
import VideoBuilder from "./video-builder";
import UserMedia from "./user-media";
import FaceRecognitionBuilder from "./face-recognition-builder";

class BusinessBuilder {
  constructor ({ faceRecognition, videoBuilder }) {
    this.faceRecognition = faceRecognition
    this.videoBuilder = videoBuilder
    this.onExpressionRecognized = () => {}
  }

  static initialize({ onExpressionRecognized }) {
    const videoBuilder = new VideoBuilder()
    const faceRecognition = new FaceRecognitionBuilder()
    this.business = new BusinessBuilder({ faceRecognition, videoBuilder })
    this.business.onExpressionRecognized = onExpressionRecognized
    this.business._init()
    return this.business
  }

  _init() {
    this.videoBuilder.createVideoElement({ muted: true })
    this.faceRecognition
      .setVideoContainer(this.videoBuilder.videoContainer)
      .setVideoElement(this.videoBuilder.videoElement)
      .setOnFaceApiLoaded(this.onFaceApiLoaded())
      .setOnExpressionRecognized(this.onExpressionRecognized())
      .build()

    this.videoBuilder.configurePlayEvent()
  }

  onFaceApiLoaded() {
    return () => {
      const userMedia = new UserMedia()
      userMedia.getCamera().then((stream) => {
        this.videoBuilder.setSource({ src: stream })
        this.videoBuilder.setOnVideoPlay(this.faceRecognition.processVideoExpressions.bind(this.faceRecognition))
      })
    }
  }

  setOnExpressionRecognized (fn) {
    this.onExpressionRecognized = fn
  }

}
export default BusinessBuilder
