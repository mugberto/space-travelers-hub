const STORE_ROCKET_DATA = 'space-travelers-hub/rocket/STORE_ROCKET_DATA';

const defaultState = [];

const rocketReducer = (state=defaultState, action) => {
  switch(action.type){
    case STORE_ROCKET_DATA:
      return action.payload;
    default:
      return state
  }
};


const storeRocketData = (payload) => ({
  type: STORE_ROCKET_DATA,
  payload
})

export default rocketReducer;