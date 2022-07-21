import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {

  const count = useSelector(state => state.count.count);
  const text  = useSelector(state => state.text.text  );

  return (
    <div className='component'>
      <p>Display</p>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
    </div>
  )
}

export default Display