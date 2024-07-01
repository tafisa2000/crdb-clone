import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
  name: "review",
  initialState: {
    value: "notReviewed",
  },
  reducers: {
    reviewed: (state) => {
      state.value = "reviewed";
    },
    notReviewed: (state) => {
      state.value = "notReviewed";
    },
  },
});

export const { reviewed, notReviewed } = reviewSlice.actions;

export default reviewSlice.reducer;
