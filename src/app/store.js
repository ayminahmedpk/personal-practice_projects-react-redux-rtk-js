import { configureStore } from "@reduxjs/toolkit/";

import { countReducer } from "../features/count/countSlice";
import { textReducer } from "../features/text/textSlice";
import { globalReducer } from "../features/global/global";

// Middleware:
import logger from "redux-logger"; // No longer needs to be initialized
// Apparently, devtools is implicitly present in RTK
// Apparently, thunk is implicitly present in RTK


const store = configureStore({
  reducer: {
    count  : countReducer  ,
    text   : textReducer   ,
    global : globalReducer ,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export default store;