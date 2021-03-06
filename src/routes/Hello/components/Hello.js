import React from 'react';

const Hello = ({ counter, increment, doubleAsync, trilbleAsync, dispatch }) => {
  return (
    <div className="hello">
      <h1>hello</h1>
      <div onClick={increment}>increment</div>
      <div onClick={doubleAsync}>doubleAsync</div>
      <div onClick={trilbleAsync}>trilbleAsync</div>
      <p>{counter}</p>
    </div>
  )
};

export default Hello;