// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
export const COUNTER_TRILBLE_ASYNC = 'COUNTER_TRILBLE_ASYNC';

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

export function doubleasync (value = 1) {
  return {
    type    : COUNTER_DOUBLE_ASYNC,
    payload : value
  }
}

export function trilbleAsync (value = 1) {
  return {
    type    : COUNTER_TRILBLE_ASYNC,
    payload : value
  }
}

// ------------------------------------
// thunk
// ------------------------------------
export const doubleAsync = () => {
  return (dispatch, getState) => {
    const _state = getState();
    setTimeout(() => {
      dispatch(doubleasync(_state.counter))
    }, 200);
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => ({...state, counter: state.counter + action.payload}),
  [COUNTER_DOUBLE_ASYNC] : (state, action) => ({...state, counter: state.counter * 2}),
  [COUNTER_TRILBLE_ASYNC] : (state, action) => ({...state, counter: state.counter * 3}),
}

// ------------------------------------
// initialState
// -
const initialState = {
  counter: 1,
  global: {
    loading: false
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  console.log(action);
  return handler ? handler(state, action) : state;
}