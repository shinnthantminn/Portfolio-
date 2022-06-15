import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const WayPointSlice = createSlice({
  name: "waypoint",
  initialState,
  reducers: {
    Touch: (state) => {
      return (state = !state);
    },
  },
});

export const { Touch } = WayPointSlice.actions;
export default WayPointSlice.reducer;
