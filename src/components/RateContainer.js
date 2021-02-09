import React from 'react';
import {Card, Grid} from "@material-ui/core";
import Video from "./video/Video";
import Analysis from "./analysis/Analysis";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: '100%',
    marginTop: '20px'
  },
  card: {
    backgroundColor: '#ffffff'
  },
})

const RateContainer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} mt="md">
      <Grid container direction="row" justify="center"
            alignItems="center" spacing={3} className={classes.container}>
        <Grid item xs={6}>
          <Card className={classes.card} spacing="md">
            <Video />
            <Analysis />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default RateContainer;
