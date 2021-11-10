import { Button, FormLabel, InputBase } from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { FormCreateProposal } from 'src/utils/types/proposal';
import { ReactComponent as ArrowLeft } from 'src/assets/arrow-left.svg';
import { useHistory } from 'react-router-dom';
import { Paths } from 'src/utils/constants';

const initialFormCreateProposal = {
  description: '',
  correctAnswer: '',
  rewardPercent: '',
  votesLimit: '',
};

const CreateNewProposal: React.FC = () => {
  const classes = useStyles();
  const router = useHistory();

  const [formCreateProposal, setFormCreateProposal] =
    useState<FormCreateProposal>(initialFormCreateProposal);

  const handleClickBack = () => {
    router.replace(Paths.Main);
  };

  const handleResetForm = () => {
    setFormCreateProposal({ ...initialFormCreateProposal });
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
        <FormLabel>Proposal Description</FormLabel>
        <InputBase
          multiline
          className={classes.input}
          minRows={10}
          placeholder="Enter here..."
          value={formCreateProposal.description}
          onChange={(e) =>
            setFormCreateProposal({ ...formCreateProposal, description: e.target.value })
          }
        />
      </div>
      <div className={clsx(classes.column, classes.mTop16)}>
        <FormLabel>Correct Answer</FormLabel>
        <InputBase
          className={classes.input}
          placeholder="Enter here..."
          value={formCreateProposal.correctAnswer}
          onChange={(e) =>
            setFormCreateProposal({ ...formCreateProposal, correctAnswer: e.target.value })
          }
        />
      </div>
      <div className={clsx(classes.column, classes.mTop16)}>
        <FormLabel>Reward Percent</FormLabel>
        <InputBase
          className={classes.input}
          placeholder="Enter here..."
          value={formCreateProposal.rewardPercent}
          onChange={(e) =>
            setFormCreateProposal({ ...formCreateProposal, rewardPercent: e.target.value })
          }
        />
      </div>
      <div className={clsx(classes.column, classes.mTop16)}>
        <FormLabel>Votes Limit</FormLabel>
        <InputBase
          className={classes.input}
          placeholder="Enter here..."
          value={formCreateProposal.votesLimit}
          onChange={(e) =>
            setFormCreateProposal({ ...formCreateProposal, votesLimit: e.target.value })
          }
        />
      </div>
      <div className={classes.mTop24}>
        <Button className={classes.buttonReset} onClick={handleResetForm}>
          Reset
        </Button>
      </div>
    </>
  );
};

export default CreateNewProposal;
