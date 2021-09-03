import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { tableCellClasses } from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontWeight: 600,
    border: '1px solid #eee',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: '1px solid #fafafa',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  ':hover': {
    backgroundColor: '#e6e6e6',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const MissionsTable = ({ missions, handleJoining, handleLeaving }) => (
  <Paper sx={{
    width: '92vw', overflow: 'hidden', height: '85vh', margin: 'auto',
  }}
  >
    <TableContainer sx={{ height: '100%', width: '100%' }}>
      <Table sx={{ maxWidth: '100%' }} stickyHeader aria-label="sticky table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Mission</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="left">{'  '}</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {missions.map(({
            id, name, description, reserved,
          }) => (
            <StyledTableRow
              key={id}
              sx={{ td: { border: 1 } }}
            >
              <StyledTableCell align="left">{name}</StyledTableCell>
              <StyledTableCell align="left" sx={{ width: '45vw' }}>{description}</StyledTableCell>
              <StyledTableCell align="center">
                {reserved
                && (
                <Chip
                  size="small"
                  label="Active Member"
                  color="info"
                  sx={{
                    borderRadius: '5px',
                    backgroundColor: '#33bfff',
                    fontSize: '0.7rem',
                  }}
                />
                ) }
                {!reserved
                && (
                <Chip
                  size="small"
                  label="NOT A MEMBER"
                  sx={{
                    borderRadius: '5px',
                    color: '#fff',
                    backgroundColor: 'gray',
                    fontWeight: 600,
                    fontSize: '0.7rem',
                  }}
                />
                ) }
              </StyledTableCell>
              <StyledTableCell align="center">
                {reserved
                  && (
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleLeaving(id)}
                    sx={{
                      textTransform: 'capitalize',
                      width: '150px',
                      ':hover': {
                        color: '#fff',
                        backgroundColor: '#f25f55',
                      },
                    }}
                  >
                    Leave Mission
                  </Button>
                  )}
                {!reserved
                  && (
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => handleJoining(id)}
                    sx={{
                      width: '150px',
                      textTransform: 'capitalize',
                      ':hover': {
                        color: '#fff',
                        backgroundColor: 'gray',
                      },
                    }}
                  >
                    Join Mission
                  </Button>
                  )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
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
