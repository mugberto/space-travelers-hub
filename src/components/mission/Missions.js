import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MissionsTable from './MissionsTable';
import { getMissions, joinMission, leaveMission } from '../../redux/mission/mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions);
    }
  }, []);

  const handleJoining = (id) => dispatch(joinMission(id));
  const handleLeaving = (id) => dispatch(leaveMission(id));

  return (
    <MissionsTable
      missions={missions}
      handleJoining={handleJoining}
      handleLeaving={handleLeaving}
    />
  );
};

export default Missions;
