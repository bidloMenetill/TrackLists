import React, { useContext } from "react";
import { IconButton } from "@mui/material";
import { PlayArrow, Pause, Password } from "@mui/icons-material";
import style from "./Track.module.scss";
import secondToMMSS from "../../utils/secondstoMMSS";
import { AudioContext } from "../../context/AudioContext";
import cn from "classnames";
const Track = (track) => {
  const { handleToggleAudio, currentTrack, isPlaying } =
    useContext(AudioContext);
  const isCurrentTrack = currentTrack.id === track.id;
  const { id, src, preview, title, artists, duration } = track;
  const formattedDuration = secondToMMSS(duration);
  return (
    <div className={cn(style.track, isCurrentTrack && style.playing)}>
      <IconButton onClick={() => handleToggleAudio(track)}>
        {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img src={preview} alt="" className={style.preview} />
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  );
};

export default Track;
