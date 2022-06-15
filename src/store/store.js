import { configureStore } from "@reduxjs/toolkit";
import waypointSlice from "./slice/WaypointSlice";

export const store = configureStore({
  reducer: {
    waypoint: waypointSlice,
  },
});
