import React from 'react';

const List = ({ counter, increment, doubleAsync, trilbleAsync, dispatch }) => {
  return (
    <div className="list">
      <h1>list</h1>
      <div onClick={increment}>increment</div>
      <div onClick={doubleAsync}>doubleAsync</div>
      <div onClick={trilbleAsync}>trilbleAsync</div>
      <p>{counter}</p>
    </div>
  )
};

export default List;