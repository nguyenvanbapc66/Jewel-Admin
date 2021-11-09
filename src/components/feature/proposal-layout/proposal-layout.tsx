import { Button } from '@material-ui/core';
import React from 'react';
import { LinkBehavior } from 'src/components/core/link-behavior/link-behavior';
import { Paths } from 'src/utils/constants';
import { useStyles } from './styles';

const ProposalLayout: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainProposal}>
      <Button className={classes.button} component={LinkBehavior} to={Paths.CreateNewProposal}>
        Create New Proposal
      </Button>
      <Button className={classes.button} component={LinkBehavior} to={Paths.AddNewAdmin}>
        Add New Admin
      </Button>
      <Button className={classes.button} component={LinkBehavior} to={Paths.RemoveAnAdmin}>
        Remove An Admin
      </Button>
    </div>
  );
};

export default ProposalLayout;
