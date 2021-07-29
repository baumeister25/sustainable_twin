import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import DashboardCard from './components/dashboardCard/DashboardCard';
import SiteInfoCard from './components/siteInfoCard/SiteInfoCard';
import LineChartCard from './components/lineChart/LineChart';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
/**
 * App
 */
class App extends React.Component {
  /**
   * constructor
   * @param{object} props properties.
   */
  constructor(props) {
    super(props);
  }

  /**
   * @InheritDoc
   */
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={ 12 } sm={4}><SiteInfoCard /></Grid>
          <Grid item xs={ 12 } sm={8}>
            <Grid container spacing={3}>
              <Grid item xs={ 12 } sm={4}>
                <DashboardCard title='Energieverbrauch' value='30.000 kw/H'/>
              </Grid>
              <Grid item xs={ 12 } sm={4}>
                <DashboardCard title='Wasserverbrauch' value='100.000qm'
                  trending='down'/>
              </Grid>
              <Grid item xs={ 12 } sm={4}>
                <DashboardCard title='Gasverbrauch' value='50.000qm'
                  trending='up'/>
              </Grid>
              <Grid item xs={ 12 } sm={12}>
                <LineChartCard/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
