import { configureStore } from "@reduxjs/toolkit";
import incDecReducer from "./reducers/index";
import formIndexReducer from "./reducers/FormIndex";
import tableIndexReducer from "./reducers/TableIndex";

export default configureStore({
  reducer: {
    number: incDecReducer,
    formIndexHere: formIndexReducer,
    tableIndexHere: tableIndexReducer,
  },
});
