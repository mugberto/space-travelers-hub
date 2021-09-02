import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  List, ListItem, Card, CardMedia, CardContent, Typography, Button, Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { cancelRocketTicket, fetchRocketData, reserveRocketTicket } from '../../redux/rocket/rocket';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  details: {
    flex: '1 1 auto',
  },
  media: {
    flex: '0 0 212px',
    height: '164px',
    objectFit: 'cover',
  },
}));

const Rockets = () => {
  const classes = useStyles();
  const badgeStyle = {
    display: 'inline-block',
    color: 'white',
    backgroundColor: '#28a2b8',
    fontSize: '0.7rem',
    padding: '0.1rem 0.5rem',
    marginRight: '1rem',
    borderRadius: '3px',
  };
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRocketData());
    }
  }, []);

  const badge = (reserved) => (reserved ? <span style={badgeStyle}>Reserved</span> : null);

  return (
    <Box style={{ margin: '0 28px' }}>
      <List>
        {rockets.map((rocket) => (
          <ListItem key={rocket.id}>
            <Card className={classes.root} style={{ boxShadow: 'none' }}>
              <CardMedia
                className={classes.media}
                image={rocket.flickrImages[0]}
                title={rocket.name}
              />
              <div className={classes.details}>
                <CardContent style={{ padding: '0 1rem' }}>
                  <Typography component="h6" variant="h6">
                    {rocket.name}
                  </Typography>
                  <Typography
                    component="p"
                    color="textSecondary"
                  >
                    {badge(rocket.reserved)}
                    {rocket.description}
                  </Typography>
                </CardContent>
                <div className={classes.rBtn}>
                  {((reserved) => {
                    if (!reserved) {
                      return (
                        <Button
                          variant="contained"
                          style={{ margin: '1rem' }}
                          onClick={() => dispatch(reserveRocketTicket(rocket.id))}
                        >
                          Reserve Rocket
                        </Button>
                      );
                    }
                    return (
                      <Button
                        variant="outlined"
                        style={{ margin: '1rem', color: '#aaa', borderColor: '#aaa' }}
                        onClick={() => dispatch(cancelRocketTicket(rocket.id))}
                      >
                        Cancel Reservation
                      </Button>
                    );
                  })(rocket.reserved)}
                </div>
              </div>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Rockets;
