import { makeStyles } from "@material-ui/core"

import './Video.css'
import BusinessBuilder from "./src/business-builder";
import {useEffect} from "react";

const MODEL_PATH = '/models'

const useStyles = makeStyles({
  videoContainer: {
    position: 'relative'
  }
})

const Video = (props) => {

  const classes = useStyles()

  const updateFaceExpressionRecognized = () => {
    return (analyses) => {
      props.onExpressionVerified(analyses)
    }
  }

  useEffect(() => {
    const business = BusinessBuilder.initialize({
      onExpressionRecognized: updateFaceExpressionRecognized
    })
  }, [])

  return (
    <div id="video-container" className={classes.videoContainer}>
    </div>
  )
}

export default Video
