import { combineReducers } from 'redux';
import locationReducer from './location';

export const makeRootReducer = asyncReducers => combineReducers({
  location: locationReducer,
  ...asyncReducers 
});

export const injectReducer = (store, { key, reducers }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
  store.asyncReducers[key] = reducers;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
}

export const createReducer = (initialState, ACTION_HANDLES) => (
  (state = initialState, action) => {
    const handler = ACTION_HANDLES[action.type];
    return handler ? handler(state, action) : state;
  }
);
