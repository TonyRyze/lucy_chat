// import browserHistory from "react-router/lib/browserHistory";
import createHistory from "history/createBrowserHistory";
import { LOCATION_CHANGE } from "connected-react-router";

// ------------------------------------
// key
// ------------------------------------
export const key = 'location';

// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE_ACTION_TYPE = LOCATION_CHANGE;

// ------------------------------------
// Actions
// ------------------------------------
export function locationChange(location = "/") {
  return {
    type: LOCATION_CHANGE_ACTION_TYPE,
    payload: location
  };
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocation = ({ dispatch }) => {
  return nextLocation => dispatch(locationChange(nextLocation));
};

// ------------------------------------
// Reducer
// ------------------------------------
const browserHistory = createHistory();
const initialState = browserHistory.location;

export default function locationReducer(state = initialState, action) {
  return action.type === LOCATION_CHANGE_ACTION_TYPE ? action.payload : state;
}
