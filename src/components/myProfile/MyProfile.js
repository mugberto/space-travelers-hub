import { useSelector } from 'react-redux';
import './my-profile.css';

const MyProfile = () => {
  const myMissions = useSelector((state) => state.missions.filter((mission) => mission.reserved));
  return (
    <div className="profile-data">
      <div className="data">
        <h3>My Missions</h3>
        <ul className="list">
          {myMissions.map(({ id, name }) => (
            <li key={id} className="list-item">{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
