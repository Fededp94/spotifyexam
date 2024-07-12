import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
  currentSong: null,
  likedSongs: [],
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
    playSong: (state, action) => {
      state.currentSong = action.payload;
    },
    toggleLikeSong: (state, action) => {
      const songId = action.payload;
      if (state.likedSongs.includes(songId)) {
        state.likedSongs = state.likedSongs.filter((id) => id !== songId);
      } else {
        state.likedSongs.push(songId);
      }
    },
  },
});

export const { setSongs, playSong, toggleLikeSong } = songSlice.actions;
export default songSlice.reducer;
