import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardContent, CardHeader, CardMedia, Grid, Typography}
  from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import GoogleMapReact from 'google-map-react';

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
class SiteInfoCard extends React.Component {
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
        <CardHeader title= "Allgaeu Kaserne" />
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={process.env.PUBLIC_URL + '/allgaeukaserne.jpg'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
              <Typography component="body2" >
                Land:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography component="body2" >
                Deutschland
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography component="body2" >
                Gemeinde:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography component="body2" >
                Füssen
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography component="body2" >
                Eröffnet:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography component="body2" >
                1934
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography component="body2" >
                Mitarbeiter:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography component="body2" >
                230
              </Typography>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Typography component="body2" >
                Gebäude:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography component="body2" >
                30
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div style={{height: '300px', width: '100%'}}>
                <GoogleMapReact
                  bootstrapURLKeys={{key: ''}}
                  defaultCenter={{lat: 10.99835602, lng: 77.01502627}}
                  defaultZoom={11}/>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

SiteInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SiteInfoCard);
