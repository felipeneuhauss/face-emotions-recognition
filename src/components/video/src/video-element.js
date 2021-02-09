class VideoElement {
  createVideoElement({muted = true, src}) {
    const video = document.createElement('video')
    video.muted = muted
    video.srcObject = src

    if (src) {
      video.addEventListener('loadedmetadata', _ => video.play())
    }

    return video
  }
}

export default VideoElement
