import React from 'react';
import {CardContent, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Analysis = ({}) => {
  const classes = useStyles();

  return (
    <div>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Face recognition
        </Typography>
        <Typography variant="h5" component="h2">
          Metrics
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </div>
  );
};

export default Analysis;
