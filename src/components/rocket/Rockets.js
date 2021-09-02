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
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRocketData());
    }
  }, []);

  const handleClick = (id, reserved) => {
    if (!reserved) {
      dispatch(reserveRocketTicket(id));
    } else {
      dispatch(cancelRocketTicket(id));
    }
  };

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
                    {rocket.description}
                  </Typography>
                </CardContent>
                <div className={classes.rBtn}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: '1rem' }}
                    onClick={() => handleClick(rocket.id, rocket.reserved)}
                  >
                    Reserve a ticket
                  </Button>
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
