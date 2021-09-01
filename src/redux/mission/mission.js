import fetchMissions from './fetchMissions';

const LOAD_MISSIONS = 'missions/load';
const JOIN_MISSION = 'missions/join';
const LEAVE_MISSION = 'missions/leave';

const loadMissions = (payload) => ({
  type: LOAD_MISSIONS,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export const getMissions = async (dispatch) => {
  const missions = await fetchMissions();
  if (missions) {
    dispatch(loadMissions(missions.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }))));
  }
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default reducer;
