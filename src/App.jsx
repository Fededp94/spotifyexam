import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSongs } from "./Redux/SongSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Player from "./components/Player";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simuliamo il fetch delle canzoni
    const songs = [
      { id: 1, title: "Song 1", details: "Details of Song 1" },
      { id: 2, title: "Song 2", details: "Details of Song 2" },
    ];
    dispatch(setSongs(songs));
  }, [dispatch]);

  return (
    <div>
      <Home />
      <Player />
    </div>
  );
};

export default App;
