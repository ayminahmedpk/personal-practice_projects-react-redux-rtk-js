import React from 'react';

import Display from './Components/Display/Display';
import CountController from './Components/CountController/CountController';
import TextController from './Components/TextController/TextController';
import GlobalController from './Components/GlobalController/GlobalController';


function App() {
  return (
    <>
      <Display/>
      <CountController/>
      <TextController/>
      <GlobalController/>
    </>
  );
}

export default App;
