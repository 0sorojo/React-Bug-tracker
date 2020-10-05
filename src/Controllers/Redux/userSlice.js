import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "Lo" });
      state.push({ name: "D Goings" });
    },
  },
});

export default slice.reducer;

export const { getUser } = slice.actions;
