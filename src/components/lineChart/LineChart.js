import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent} from '@material-ui/core';
import {Line} from 'react-chartjs-2';
import {withStyles} from '@material-ui/core/styles';


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
class LineChartCard extends React.Component {
  /**
   * constructor
   * @param{object} props properties.
   */
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli'],
        datasets: [{
          label: 'Wasserverbrauch über Monate',
          data: [5000, 4900, 5210, 4980, 6000, 3200, 5100],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        }],
      },
    };
  }

  /**
   * @InheritDoc
   */
  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.root}>
        <CardContent>
          <Line data= {this.state.data}/>
        </CardContent>
      </Card>
    );
  }
}

LineChartCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineChartCard);
