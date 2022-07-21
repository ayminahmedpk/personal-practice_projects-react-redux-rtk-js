import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const count = useSelector(state => state.count.count);
  return (
    <>
      <p>Count: {count}</p>
    </>
  )
}

export default Display