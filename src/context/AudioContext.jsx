import React, { createContext, useState } from "react";
import { musicLists } from "../assets/musicLists";
const defaultTrack = musicLists[0];
const audio = new Audio(defaultTrack.src);
export const AudioContext = createContext({});
const AudioProvider = ({ children }) => {
  const [currentTrack, setCureentTrack] = useState(defaultTrack);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = (track) => {
    if (currentTrack.id !== track.id) {
      setCureentTrack(track);
      setIsPlaying(true);

      audio.src = track.src;
      audio.currentTime = 0;
      audio.play();
    }
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };
  const value = { audio, isPlaying, currentTrack, handleToggleAudio };
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

export default AudioProvider;
