import { configureStore } from "@reduxjs/toolkit";
import DateSliceReducer from "./utils/DateSlice";
import DetailSliceReducer from "utils/DetailSlice";

const store = configureStore({
  reducer: {
    DateSlice: DateSliceReducer,
    DetailSlice: DetailSliceReducer,
  },
});

export default store;
