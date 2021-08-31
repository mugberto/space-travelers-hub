import MissionsTable from './MissionsTable';

const Missions = () => {
  const missions = [];
  const handleJoining = () => null;
  const handleLeaving = () => null;

  return (
    <section>
      <MissionsTable
        missions={missions}
        handleJoining={handleJoining}
        handleLeaving={handleLeaving}
      />
    </section>
  );
};

export default Missions;
