import { createSlice } from "@reduxjs/toolkit";

const initialState = true;

const ThemeSlicer = createSlice({
  name: "Theme",
  initialState,
  reducers: {
    Change: (state) => (state = !state),
  },
});

export const { Change } = ThemeSlicer.actions;
export default ThemeSlicer.reducer;
