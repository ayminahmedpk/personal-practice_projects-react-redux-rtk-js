

import React from 'react'

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { wideActions } from '../../../Redux/1-sliceShare/1-wideComponent/features/wide/wideSlice';

const Wide = () => {

  const data = useSelector(store => store.wide.data);
  const narrowData = useSelector(store => store.narrow.data);

  const [localData, setLocalData] = useState('');

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(wideActions.setData(`${narrowData} ${localData}`));
  }

  return (
    <>
    {/* <div>Wide</div> */}
    <p>store.wide.data: {data}</p>
    <input
      type = "text"
      value = {localData}
      onChange = {(e) => {setLocalData(e.target.value)}}
    />
    <button onClick={handleClick}>Set wide data</button>
    </>
  )
}

export default Wide;