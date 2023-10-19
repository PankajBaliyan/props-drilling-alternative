import { createSlice } from "@reduxjs/toolkit";

export const formIndexSlice = createSlice({
  name: "formIndex",
  initialState: "Pankaj",
  reducers: {
    FormIndex: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { FormIndex } = formIndexSlice.actions;
export default formIndexSlice.reducer;
