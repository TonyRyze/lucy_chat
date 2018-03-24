// ------------------------------------
// import
// ------------------------------------
import { createReducer } from '../../../store/reducers';

// ------------------------------------
// key
// ------------------------------------
export const key = 'list';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = `${key}/COUNTER_INCREMENT`;
export const COUNTER_DOUBLE_ASYNC = `${key}/COUNTER_DOUBLE_ASYNC`;
export const COUNTER_TRILBLE_ASYNC = `${key}/COUNTER_TRILBLE_ASYNC`;

// ------------------------------------
// Actions
// ------------------------------------
export const increment = () => ({
  type    : COUNTER_INCREMENT,
  payload: 1
})

// ------------------------------------
// thunk
// ------------------------------------
export const doubleAsync = () => (
  (dispatch, getState) => (
    new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: COUNTER_DOUBLE_ASYNC,
          payload: 2
        });
        resolve();
      }, 200);
    })
  )
)

export const trilbleAsync = () => (
  (dispatch, getState) => (
    new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: COUNTER_TRILBLE_ASYNC,
          payload: 3
        });
        resolve();
      }, 200);
    })
  )
)

// ------------------------------------
// Actions
// ------------------------------------
export const actions = {
  increment,
  doubleAsync,
  trilbleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => {
    return {...state, counter: state.counter + action.payload}
  },
  [COUNTER_DOUBLE_ASYNC] : (state, action) => ({...state, counter: state.counter * action.payload}),
  [COUNTER_TRILBLE_ASYNC] : (state, action) => ({...state, counter: state.counter + action.payload}),
}

// ------------------------------------
// initialState
// ------------------------------------
const initialState = {
  counter: 1,
  global: {
    loading: false
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default createReducer(initialState, ACTION_HANDLERS);
