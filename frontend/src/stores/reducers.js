import { configureStore } from "@reduxjs/toolkit";

import todoListReducer from "./slicers";

export default configureStore({
  reducer: {
    data: todoListReducer,
  },
});
