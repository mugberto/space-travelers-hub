import fetchMissions from './fetchMissions';

const LOAD_MISSIONS = 'missions/load';

const loadMissions = (payload) => ({
  type: LOAD_MISSIONS,
  payload,
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
    default:
      return state;
  }
};

export default reducer;
