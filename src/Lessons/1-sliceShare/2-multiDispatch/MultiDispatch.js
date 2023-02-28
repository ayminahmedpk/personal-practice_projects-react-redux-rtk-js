/*
StackOverflow - "The most important point about React is one-way data flow. In
your example that means, that dispatching an action and state change handling
should be decoupled." 
https://stackoverflow.com/questions/39524855/how-to-trigger-off-callback-after-updating-state-in-redux

So basically, react wants to decouple dispatching and rendering, such that a
fresh render takes account of all updates, and anything done before the next
update is simply ignored.

There are multiple ways to trigger an update, but in any case, an update doesn't
happen until that particular event loop is completed. And any values used for
dispatching in that event loop, will be the old pre-update values.

Essentially, the useSelector and useState behavior is same. Nothing will update
until the re-render.

(Think about it - each field using useSelector would be re-rendering everytime
 you update the store, but that can't happen until the entire component itself
 re-renders, which won't happen until this event loop is completed, which won't
 happen until the second dispatch is called, using the current event loop's
 values - regardless of whether it is in a timeout).

So we can't really get the entire state object and get the latest value from it.

(Unless we go out of react's flow using escape hatches like useEffect.)

(Interestingly, multiple dispatches on the same slice do work - as long as the
 second dispatch is working on the state directly - if it is getting it from the
 component, we'll obviously have the same issue as before)

We need to consider our options in a separate file.

*/



// Simple attempt, does not work

import React from 'react';

import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { narrowActions } from '../../../Redux/1-sliceShare/2-multiDispatch/features/narrow/narrowSlice';
import { wideActions } from '../../../Redux/1-sliceShare/2-multiDispatch/features/wide/wideSlice';

const MultiDispatch = () => {

  const dispatch = useDispatch();

  const store = useSelector(store => store)
  
  const narrowData = useSelector(store => store.narrow.data);
  const narrowUpperCaseData = useSelector(store => store.narrow.upperCaseData);
  const wideData = useSelector (store => store.wide.data);

  const [localData, setLocalData] = useState('');

  const clickHandler = () => {
    dispatch(narrowActions.setData(localData));
    dispatch(narrowActions.setUpperCaseData());
    // dispatch(narrowActions.setUpperCaseData(narrowData)); // Doesn't work - narrowData is still old
    dispatch(wideActions.setData(narrowData));
  }

  return (
    <>
    {/* <p>MultiDispatch</p> */}
    <p>state.narrow.data: {narrowData}</p>
    <p>state.narrow.upperCaseData: {narrowUpperCaseData}</p>
    <p>state.wide.data: {wideData}</p>
    <input
      value={localData}
      onChange={(e) => {setLocalData(e.target.value)}}
    />
    <button onClick={clickHandler}>MultiDispatch</button>
    </>
  )
}

export default MultiDispatch;







// // Simple attempt, does not work

// import React from 'react';

// import { useState } from 'react';

// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

// import { narrowActions } from '../../../Redux/1-sliceShare/2-multiDispatch/features/narrow/narrowSlice';
// import { wideActions } from '../../../Redux/1-sliceShare/2-multiDispatch/features/wide/wideSlice';

// const MultiDispatch = () => {

//   const dispatch = useDispatch();

//   const store = useSelector(store => store)
  
//   const narrowData = useSelector(store => store.narrow.data);
//   const wideData = useSelector (store => store.wide.data);

//   const [localData, setLocalData] = useState('');

//   const clickHandler = () => {
//     dispatch(narrowActions.setData(localData));
//     dispatch(wideActions.setData(narrowData));
//     // console.log(store);
//     // console.log(narrowData);
//   }

//   return (
//     <>
//     {/* <p>MultiDispatch</p> */}
//     <p>state.narrow.data: {narrowData}</p>
//     <p>state.wide.data: {wideData}</p>
//     <input
//       value={localData}
//       onChange={(e) => {setLocalData(e.target.value)}}
//     />
//     <button onClick={clickHandler}>MultiDispatch</button>
//     </>
//   )
// }

// export default MultiDispatch;














// // using a timeout - does not work

// import React from 'react';

// import { useState } from 'react';

// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

// import { narrowActions } from '../../../Redux/1-sliceShare/2-multiDispatch/features/narrow/narrowSlice';
// import { wideActions } from '../../../Redux/1-sliceShare/2-multiDispatch/features/wide/wideSlice';

// const MultiDispatch = () => {

//   const dispatch = useDispatch();

//   const store = useSelector(store => store)
  
//   const narrowData = useSelector(store => store.narrow.data);
//   const wideData = useSelector (store => store.wide.data);

//   const [localData, setLocalData] = useState('');

//   const clickHandler = () => {
//     dispatch(narrowActions.setData(localData));
//     setTimeout(() => {
//       dispatch(wideActions.setData(narrowData));
//     }, 0);
    
//   }

//   return (
//     <>
//     {/* <p>MultiDispatch</p> */}
//     <p>state.narrow.data: {narrowData}</p>
//     <p>state.wide.data: {wideData}</p>
//     <input
//       value={localData}
//       onChange={(e) => {setLocalData(e.target.value)}}
//     />
//     <button onClick={clickHandler}>MultiDispatch</button>
//     </>
//   )
// }


// export default MultiDispatch;






// // Using refs - does not work

// import React, { useRef } from 'react';

// import { useState } from 'react';

// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

// import { narrowActions } from '../../../Redux/1-sliceShare/2-multiDispatch/features/narrow/narrowSlice';
// import { wideActions } from '../../../Redux/1-sliceShare/2-multiDispatch/features/wide/wideSlice';

// const MultiDispatch = () => {

//   const dispatch = useDispatch();

//   const store = useSelector(store => store)
  
//   const narrowDataRef = useRef(useSelector(store => store.narrow.data));
//   const wideData = useSelector(store => store.wide.data);

//   const [localData, setLocalData] = useState('');

//   const clickHandler = () => {
//     dispatch(narrowActions.setData(localData));
//     setTimeout(() => {
//       dispatch(wideActions.setData(narrowDataRef.current));
//     }, 0);
//   }

//   return (
//     <>
//       <p>state.narrow.data: {narrowDataRef.current}</p>
//       <p>state.wide.data: {wideData}</p>
//       <input
//         value={localData}
//         onChange={(e) => {setLocalData(e.target.value)}}
//       />
//       <button onClick={clickHandler}>MultiDispatch</button>
//     </>
//   )
// }

// export default MultiDispatch;







// // Using an effect - works

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { narrowActions } from '../../../Redux/1-sliceShare/2-multiDispatch/features/narrow/narrowSlice';
// import { wideActions } from '../../../Redux/1-sliceShare/2-multiDispatch/features/wide/wideSlice';

// const MultiDispatch = () => {
//   const dispatch = useDispatch();
//   const narrowData = useSelector(store => store.narrow.data);
//   const wideData = useSelector (store => store.wide.data);
//   const [localData, setLocalData] = useState('');

//   const clickHandler = () => {
//     dispatch(narrowActions.setData(localData));
//   }

//   useEffect(() => {
//     dispatch(wideActions.setData(narrowData));
//   }, [narrowData]);

//   return (
//     <>
//       <p>state.narrow.data: {narrowData}</p>
//       <p>state.wide.data: {wideData}</p>
//       <input value={localData} onChange={(e) => setLocalData(e.target.value)} />
//       <button onClick={clickHandler}>MultiDispatch</button>
//     </>
//   )
// }

// export default MultiDispatch;
