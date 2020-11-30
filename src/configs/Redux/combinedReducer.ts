// libs
import { combineReducers } from 'redux';
// import page's reducer
import * as reducers from '@/reducers';
// types

const typedReducers: { [key: string]: any } = { ...reducers };

const mainReducers = Object.keys(reducers).reduce(
  (accReducers, reducerKey) => ({
    ...accReducers,
    [reducerKey]: combineReducers(typedReducers[reducerKey]),
  }),
  {}
);

const combinedReducers = combineReducers(mainReducers);

const rootReducer = (
  state: { [key: string]: any } = {},
  action: { [key: string]: any; type: string }
) => {
  const cloneState = state;

  return combinedReducers(cloneState, action);
};

export default rootReducer;
