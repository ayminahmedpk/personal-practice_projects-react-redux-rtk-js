

import React from 'react'

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { narrowActions } from '../../../Redux/1-sliceShare/1-wideComponent/features/narrow/narrowSlice';

const Narrow = () => {

  const data = useSelector(store => store.narrow.data);

  const [localData, setLocalData] = useState('')

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(narrowActions.setData(localData));
  }

  return (
    <>
    {/* <div>Narrow</div> */}
    <p>store.narrow.data: {data}</p>
    <input
      type = "text"
      value = {localData}
      onChange = {(e) => {setLocalData(e.target.value)}}
    />
    <button onClick={handleClick}>Set narrow data</button>
    </>
  )
}

export default Narrow