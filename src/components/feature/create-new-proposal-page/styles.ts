import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    input: {
      maxWidth: 414,
      border: '1px solid #383C43',
      padding: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      background: '#212732',
      borderRadius: 6,
      fontSize: 14,
      '&:hover': {
        border: '1px solid #fff',
      },
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    mTop16: {
      marginTop: theme.spacing(2),
    },
  };
});
