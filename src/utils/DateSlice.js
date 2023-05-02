import { createSlice } from "@reduxjs/toolkit";

const DateSlice = createSlice({
  name: "DateSlice",
  initialState: {
    date: null,
    time: null,
    hour: null,
  },
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setHour: (state, action) => {
      state.hour = action.payload;
    },
  },
});
export const { setDate, setTime, setHour } = DateSlice.actions;
export default DateSlice.reducer;
