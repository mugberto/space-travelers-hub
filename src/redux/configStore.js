import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './mission/mission';
import rocketReducer from './rocket/rocket';

const reducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
