class UserMedia {
  getCamera(audio = true, video = true) {
    return navigator.mediaDevices.getUserMedia({
      video, audio
    })
  }
}

export default UserMedia
