import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import {TrendingUp, TrendingDown} from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';
import {red, green} from '@material-ui/core/colors';


const styles = (theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
/**
 * DashboardCard
 */
class DashboardCard extends React.Component {
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
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Typography className={classes.title}
                color="textSecondary" gutterBottom>
                { this.props.title }
              </Typography>
              <Typography variant="h5" component="h2">
                {this.props.value}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              {this.props.trending === 'up'?
                <TrendingUp style={{color: red[500], fontSize: 60}}/>:
                <TrendingDown style={{color: green[500], fontSize: 60}}/>
              }
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

DashboardCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  value: PropTypes.string,
  trending: PropTypes.string,
};

export default withStyles(styles)(DashboardCard);
