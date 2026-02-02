import React from "react";
import BentoGrid from "../_components/bentoGrid";
import Player from "../_components/musicPlayer/Player";
import ToastCard from "../_components/toastCard";
import ToastCard2 from "../_components/toastCard2";

const page = () => {
  return (
    <div>
      <Player />
      <BentoGrid />

      <ToastCard />
      <ToastCard2 />
    </div>
  );
};

export default page;
