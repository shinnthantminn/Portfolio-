import { configureStore } from "@reduxjs/toolkit";
import waypointSlice from "./slice/WaypointSlice";
import ThemeSlicer from "./slice/ThemeSlicer";

export const store = configureStore({
  reducer: {
    waypoint: waypointSlice,
    Theme: ThemeSlicer,
  },
});
