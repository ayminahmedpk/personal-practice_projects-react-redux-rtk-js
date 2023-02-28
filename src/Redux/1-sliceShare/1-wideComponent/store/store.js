import { configureStore } from "@reduxjs/toolkit/";

import { narrowReducer } from "../features/narrow/narrowSlice";
import { wideReducer } from "../features/wide/wideSlice";

const store = configureStore({
  reducer: {
    narrow : narrowReducer,
    wide : wideReducer,
  },
});

export default store;