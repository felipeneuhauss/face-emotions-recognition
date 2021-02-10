class VideoBuilder {
  constructor() {
    this.onVideoPlay = () => {}
    this.videoContainer = document.getElementById('video-container')
  }

  createVideoElement({muted = true, src = null}) {
    this.videoElement = document.createElement('video')
    this.videoElement.muted = muted
    this.videoElement.srcObject = src
    this.videoElement.autoplay = true

    if (src) {
      this.videoElement.addEventListener('loadedmetadata', _ => this.videoElement.play())
    }
    if (!this.videoContainer.childElementCount) {
      this.videoContainer.append(this.videoElement)
    }

    return this.videoElement
  }

  setSource({ src }) {
    this.videoElement.srcObject = src
  }

  setOnVideoPlay (fn) {
    this.onVideoPlay = fn
    return true
  }

  configurePlayEvent() {
    this.videoElement.addEventListener('play', () => this.onVideoPlay())
  }
}

export default VideoBuilder
