import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter"; // Ensure the path is correct
import reviewReducer from "./review";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    review: reviewReducer,
  },
});

export default store;
