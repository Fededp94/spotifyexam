import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSong, toggleLikeSong } from "../Redux/SongSlice";

const Song = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.songs.likedSongs);

  const handlePlay = () => {
    dispatch(playSong(song));
  };

  const handleLike = () => {
    dispatch(toggleLikeSong(song.id));
  };

  return (
    <div>
      <h2>{song.title}</h2>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleLike}>
        {likedSongs.includes(song.id) ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Song;
