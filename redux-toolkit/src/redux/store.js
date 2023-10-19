import { configureStore } from "@reduxjs/toolkit";
import incDecReducer from "./reducers/index";
import formIndexReducer from "./reducers/FormIndex";

export default configureStore({
  reducer: {
    number: incDecReducer,
    formIndexHere: formIndexReducer,
  },
});
