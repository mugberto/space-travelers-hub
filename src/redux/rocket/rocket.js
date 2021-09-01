const STORE_ROCKET_DATA = 'space-travelers-hub/rocket/STORE_ROCKET_DATA';

const defaultState = [];

const rocketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case STORE_ROCKET_DATA:
      return action.payload.map((item) => {
        const {
          rocket_id: id,
          rocket_type: type,
          rocket_name: name,
          flickr_images: flickrImages,
          description,
        } = item;
        return {
          id, type, name, flickrImages, description,
        };
      });
    default:
      return state;
  }
};

const storeRocketData = (payload) => ({
  type: STORE_ROCKET_DATA,
  payload,
});

export const fetchRocketData = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/rockets')
    .then((response) => response.json())
    .then((json) => dispatch(storeRocketData(json)));
};

export default rocketReducer;
