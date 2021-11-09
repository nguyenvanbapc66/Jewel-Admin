import { FormLabel, InputBase } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';

const CreateNewProposal: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.column}>
        <FormLabel>Proposal Description</FormLabel>
        <InputBase multiline className={classes.input} minRows={10} placeholder="Enter here..." />
      </div>
      <div className={clsx(classes.column, classes.mTop16)}>
        <FormLabel>Correct Answer</FormLabel>
        <InputBase className={classes.input} placeholder="Enter here..." />
      </div>
      <div className={clsx(classes.column, classes.mTop16)}>
        <FormLabel>Reward Percent</FormLabel>
        <InputBase className={classes.input} placeholder="Enter here..." />
      </div>
      <div className={clsx(classes.column, classes.mTop16)}>
        <FormLabel>Votes Limit</FormLabel>
        <InputBase className={classes.input} placeholder="Enter here..." />
      </div>
    </>
  );
};

export default CreateNewProposal;
