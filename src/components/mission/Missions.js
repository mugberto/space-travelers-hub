import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MissionsTable from './MissionsTable';
import { getMissions } from '../../redux/mission/mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions);
    }
  }, []);

  const handleJoining = () => null;
  const handleLeaving = () => null;

  return (
    <MissionsTable
      missions={missions}
      handleJoining={handleJoining}
      handleLeaving={handleLeaving}
    />
  );
};

export default Missions;
