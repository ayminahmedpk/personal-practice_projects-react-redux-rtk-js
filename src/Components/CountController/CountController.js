import React from 'react'
import { useDispatch } from 'react-redux/es/exports'

import { countActions } from '../../features/count/countSlice';

const CountController = () => {
  const dispatch = useDispatch();

  const decrement = countActions.decrementCount;
  const increment = countActions.incrementCount;

  return (
    <>
      <button onClick={() => {dispatch(decrement())}} >{'<'}</button>
      <button onClick={() => {dispatch(increment())}} >{'>'}</button>
    </>
  )
}

export default CountController