import React from "react";
import { useSelector } from "react-redux";
import SongList from "./SongList";

const Home = () => {
  const songs = useSelector((state) => state.songs.songs);

  return (
    <div>
      <h1>Home</h1>
      <SongList songs={songs} />
    </div>
  );
};

export default Home;
