import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    mainProposal: {
      display: 'flex',
      justifyContent: 'space-around',
    },
    button: {
      background: '#2a303b',
    },
  };
});
