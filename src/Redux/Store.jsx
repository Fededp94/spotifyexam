import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./SongSlice";

export const store = configureStore({
  reducer: {
    songs: songReducer,
  },
});
