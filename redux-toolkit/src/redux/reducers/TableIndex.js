import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  //name: is used in redux extension devTools to filter state
  name: "table",
  initialState: 10,
  reducers: {
    tableIndex: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { tableIndex } = tableSlice.actions;
export default tableSlice.reducer;