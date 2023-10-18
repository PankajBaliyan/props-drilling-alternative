import { configureStore } from "@reduxjs/toolkit";
import incDecReducer from "./reducers/index";

export default configureStore({
  reducer: {
    number: incDecReducer,
  },
});
