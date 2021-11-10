import { Button, FormLabel, InputBase } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { Paths } from 'src/utils/constants';
import { ReactComponent as ArrowLeft } from 'src/assets/arrow-left.svg';

const RemoveAnAdmin: React.FC = () => {
  const classes = useStyles();
  const router = useHistory();

  const handleClickBack = () => {
    router.replace(Paths.Main);
  };

  return (
    <>
      <Button
        className={classes.buttonBack}
        startIcon={<ArrowLeft width="15" />}
        onClick={handleClickBack}>
        Back
      </Button>
      <div className={clsx(classes.column, classes.mTop24)}>
        <FormLabel>User Address (Admin)</FormLabel>
        <InputBase className={classes.input} placeholder="Enter here..." />
      </div>
    </>
  );
};

export default RemoveAnAdmin;
