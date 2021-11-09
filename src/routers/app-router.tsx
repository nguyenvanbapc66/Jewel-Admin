import { makeStyles } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AddNewAdmin, CreateNewProposal, ProposalLayout, RemoveAnAdmin } from 'src/components';
import AppTemplate from 'src/components/templates/app-template';
import { Paths } from 'src/utils/constants';

const useStyles = makeStyles({
  notFound: {
    textAlign: 'center',
    color: 'red',
  },
});

const AppRouter = () => {
  const classes = useStyles();

  return (
    <Router>
      <AppTemplate>
        <Route path={[Paths.Main, Paths.CreateNewProposal, Paths.AddNewAdmin, Paths.RemoveAnAdmin]}>
          <Switch>
            <Route exact path={Paths.Main} component={ProposalLayout} />
            <Route exact path={Paths.CreateNewProposal} component={CreateNewProposal} />
            <Route exact path={Paths.AddNewAdmin} component={AddNewAdmin} />
            <Route exact path={Paths.RemoveAnAdmin} component={RemoveAnAdmin} />
            <Route path="*" render={() => <div className={classes.notFound}>Not Found</div>} />
          </Switch>
        </Route>
      </AppTemplate>
    </Router>
  );
};

export default AppRouter;
