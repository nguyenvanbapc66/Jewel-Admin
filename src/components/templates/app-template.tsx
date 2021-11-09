import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
  return {
    main: {
      padding: theme.spacing(2, 4),
    },
  };
});

const AppTemplate: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.main}>{children}</div>;
};

export default AppTemplate;
