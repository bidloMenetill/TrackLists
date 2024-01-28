import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import style from "./globale.module.scss";
import PlayBar from "./components/PlayBar/PlayBar";
const App = () => {
  return (
    <div className={style.wrapper}>
      <MainPage />
      <PlayBar />
    </div>
  );
};

export default App;
