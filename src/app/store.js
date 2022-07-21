import { configureStore } from "@reduxjs/toolkit/";

import { countReducer } from "../features/count/countSlice";
import { textReducer } from "../features/text/textSlice";
import { globalReducer } from "../features/global/global";


const store = configureStore({
  reducer: {
    count  : countReducer  ,
    text   : textReducer   ,
    global : globalReducer ,
  },
});


export default store;