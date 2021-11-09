import { FormLabel, InputBase } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';

const AddNewAdmin: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={clsx(classes.column, classes.mTop16)}>
        <FormLabel>User Address (Admin)</FormLabel>
        <InputBase className={classes.input} placeholder="Enter here..." />
      </div>
    </>
  );
};

export default AddNewAdmin;
