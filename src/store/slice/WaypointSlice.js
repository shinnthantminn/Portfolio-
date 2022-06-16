import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const WayPointSlice = createSlice({
  name: "waypoint",
  initialState,
  reducers: {
    Touch: (state,action) => {
      return (state = action.payload);
    },
  },
});

export const { Touch } = WayPointSlice.actions;
export default WayPointSlice.reducer;
