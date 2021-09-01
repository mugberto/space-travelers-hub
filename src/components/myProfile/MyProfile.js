import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { leaveMission } from '../../redux/mission/mission';
import './my-profile.css';

const MyProfile = () => {
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.reserved));
  const dispatch = useDispatch();
  const handleLeaving = (id) => dispatch(leaveMission(id));
  return (
    <div className="profile-data">
      <div className="data">
        <h3>My Missions</h3>
        <ul className="list">
          {!myMissions.length ? <li className="list-item">NO MISSIONS JOINED YET</li> : myMissions.map(({ id, name, wikipedia }) => (
            <li key={id} className="list-item">
              <span>
                {name}
                <br />
                <a href={wikipedia} target="blank">Read more</a>
              </span>

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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
