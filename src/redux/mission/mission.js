import fetchMissions from './fetchMissions';

const MISSIONS_LOADED = 'missions/loaded';
const MISSION_JOINED = 'missions/joined';
const MISSION_LEFT = 'missions/left';

const loadMissions = (payload) => ({
  type: MISSIONS_LOADED,
  payload,
});

export const joinMission = (id) => ({
  type: MISSION_JOINED,
  id,
});

export const leaveMission = (id) => ({
  type: MISSION_LEFT,
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
    case MISSIONS_LOADED:
      return action.payload;
    case MISSION_JOINED:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case MISSION_LEFT:
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
