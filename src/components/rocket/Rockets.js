import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <List>
      {rockets.map((rocket) => (
        <ListItem key={rocket.id}>
          <ListItemText primary={rocket.description} />
        </ListItem>
      ))}
    </List>
  );
};

export default Rockets;
