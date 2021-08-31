import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

const MissionsTable = ({ missions, handleJoining, handleLeaving }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Mission</TableCell>
          <TableCell align="left">Description</TableCell>
          <TableCell align="left">Status</TableCell>
          <TableCell align="left">{'  '}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {missions.map(({
          id, name, description, reserved,
        }) => (
          <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 1 } }}
          >
            <TableCell align="left">{name}</TableCell>
            <TableCell align="left"><p>{description}</p></TableCell>
            <TableCell align="center">
              {reserved && <Chip label="Active Member" color="info" /> }
              {!reserved && <Chip label="NOT A MEMBER" /> }
            </TableCell>
            <TableCell align="center">
              {reserved
                  && (
                  <Button variant="outlined" color="error" onClick={() => handleLeaving(id)}>
                    Leave Mission
                  </Button>
                  )}
              {!reserved
                  && (
                  <Button variant="outlined" color="inherit" onClick={() => handleJoining(id)}>
                    Join Mission
                  </Button>
                  )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

MissionsTable.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  })),
  handleJoining: PropTypes.func,
  handleLeaving: PropTypes.func,
};

MissionsTable.defaultProps = {
  missions: null,
  handleJoining: null,
  handleLeaving: null,
};

export default MissionsTable;
