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

const Analysis = ({ analysis }) => {
  const [data] = analysis
  const classes = useStyles();

  const getExpression = (data = {}) => {
    if (!data.expressions) {
      return ''
    }

    let currentExpression = {expression: 'neutral', value: 0}
    const expressions = data.expressions
    for (const expression in expressions) {
      if (expressions[expression] > currentExpression.value) {
        currentExpression.expression = expression
        currentExpression.value = expressions[expression]
      }
    }
    return currentExpression.expression
  }

  return (
    <div>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Face recognition
        </Typography>
        <Typography variant="h5" component="h2">
          {getExpression(data)}
        </Typography>
        {/*<Typography className={classes.pos} color="textSecondary">*/}
        {/*  adjective*/}
        {/*</Typography>*/}
        {/*<Typography variant="body2" component="p">*/}
        {/*  well meaning and kindly.*/}
        {/*  <br />*/}
        {/*  {'"a benevolent smile"'}*/}
        {/*</Typography>*/}
      </CardContent>
    </div>
  );
};

export default Analysis;
