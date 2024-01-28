import React, { useState } from "react";
import style from "./MainPage.module.scss";
import { musicLists } from "../../assets/musicLists";
import Track from "../../components/Track/Track";
import { Input } from "@mui/material";
const runSearch = (queary) => {
  if (!queary) {
    return musicLists;
  }
  const toLowerQueary = queary.toLowerCase();
  return musicLists.filter((track) => {
    return (
      track.title.toLowerCase().includes(toLowerQueary) ||
      track.artists.toLowerCase().includes(toLowerQueary)
    );
  });
};
const MainPage = () => {
  const [tracks, setTracks] = useState(musicLists);
  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value);
    setTracks(foundTracks);
  };
  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск треков"
        onChange={handleChange}
      />
      <div className={style.list}>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
