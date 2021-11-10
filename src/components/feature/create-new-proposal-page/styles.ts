import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    buttonBack: {
      background: '#FFD610',
      color: '#151515',
      '&:hover': {
        background: '#FFD610',
        opacity: '0.7',
      },
    },
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
    buttonReset: {
      background: 'red',
      '&:hover': {
        background: 'red',
        opacity: '0.7',
      },
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    mTop16: {
      marginTop: theme.spacing(2),
    },
    mTop24: {
      marginTop: theme.spacing(3),
    },
  };
});
