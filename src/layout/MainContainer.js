import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonContainer from "./ButtonContainer";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <ButtonContainer />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
