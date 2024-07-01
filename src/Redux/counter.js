import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: "1",
  },
  reducers: {
    all: (state) => {
      state.value = "1";
    },
    applied: (state) => {
      state.value = "2";
    },
  },
});

export const { all, applied } = counterSlice.actions;

export default counterSlice.reducer;
