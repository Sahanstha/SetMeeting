import { createSlice } from "@reduxjs/toolkit";

const DetailSlice = createSlice({
  name: "DetailSlice",
  initialState: {
    username: null,
    email: null,
    addnote: null,
    location: null,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAddnote: (state, action) => {
      state.addnote = action.payload;
    },
    setGuest: (state, action) => {
      state.guest = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
      console.log(state.location);
    },
  },
});
export const { setUsername, setEmail, setAddnote, setLocation, setGuest } =
  DetailSlice.actions;
export default DetailSlice.reducer;
