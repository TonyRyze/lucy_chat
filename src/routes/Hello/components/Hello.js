import React from 'react';

const Hello = ({ todos, increment, doubleAsync, trilbleAsync, dispatch }) => {
  return (
    <div className="hello">
      <p onClick={() => {
        dispatch(doubleAsync())
      }}>Hello world!</p>
    </div>
  )
};

export default Hello;