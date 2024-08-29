import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: null,
  name: "user",
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    removeUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
