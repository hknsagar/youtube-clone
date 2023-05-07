import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import CommentsContainer from "./CommentsContainer";

const WatchPageContainer = () => {
  return (
    <div className="grid grid-cols-8 gap-5 mx-7 mt-16 top-28">
      <div className="col-span-5">
        <VideoPlayer />
      </div>

      <div className="col-span-3">Playlist</div>

      <div className="col-span-5">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPageContainer;
