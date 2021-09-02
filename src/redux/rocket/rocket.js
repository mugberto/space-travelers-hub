const STORE_ROCKET_DATA = 'space-travelers-hub/rocket/STORE_ROCKET_DATA';
const RESERVE_ROCKET_TICKET = 'space-travelers-hub/rocket/RESERVER_ROCKET_TICKET';
const CANCEL_ROCKET_TICKET = 'space-travelers-hub/rocket/CANCEL_ROCKET_TICKET';

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
          wikipedia,
        } = item;
        return {
          id, type, name, flickrImages, description, wikipedia,
        };
      });
    case RESERVE_ROCKET_TICKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });

    case CANCEL_ROCKET_TICKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
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

export const reserveRocketTicket = (id) => ({
  type: RESERVE_ROCKET_TICKET,
  id,
});

export const cancelRocketTicket = (id) => ({
  type: CANCEL_ROCKET_TICKET,
  id,
});

export default rocketReducer;
