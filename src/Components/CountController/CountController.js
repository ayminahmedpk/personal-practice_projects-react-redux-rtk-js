import React from 'react'
import { useDispatch } from 'react-redux/es/exports'

import { countActions } from '../../features/count/countSlice';

const CountController = () => {
  const dispatch = useDispatch();

  const decrement = countActions.decrementCount;
  const increment = countActions.incrementCount;
  const reset = countActions.resetCount;

  return (
    <div className="component">
      <p>Count controller</p>
      <button onClick={() => {dispatch(decrement())}} >{'<'}</button>
      <button onClick={() => {dispatch(increment())}} >{'>'}</button>
      <button onClick={() => {dispatch(reset())}} >Reset count</button>
    </div>
  )
}

export default CountController