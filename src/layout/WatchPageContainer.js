import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import CommentsContainer from "./CommentsContainer";

const WatchPageContainer = () => {
  return (
    <div className="grid grid-cols-[63%_1fr] gap-6 mx-7 mt-16 top-28">
      <div>
        <VideoPlayer />
      </div>

      <div>Playlist</div>

      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPageContainer;
