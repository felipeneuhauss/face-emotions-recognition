import Media from './src/media'
import VideoElement from "./src/video-element";
import './Video.css';

const Video = () => {
  const media = new Media()
  media.getCamera().then((stream) => {
    const video = new VideoElement()
    const videoElement = video.createVideoElement({src: stream})
    const videoContainer = document.getElementById('video-container')
    if (!videoContainer.firstChild) {
      videoContainer.append(videoElement)
    }
  })

  return (
    <div id="video-container">
    </div>
  );
};

export default Video;
