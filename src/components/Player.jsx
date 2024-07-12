import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const currentSong = useSelector((state) => state.songs.currentSong);

  if (!currentSong) {
    return <div>No song is playing</div>;
  }

  return (
    <div>
      <h2>Now Playing: {currentSong.title}</h2>
      <p>{currentSong.details}</p>
    </div>
  );
};

export default Player;
