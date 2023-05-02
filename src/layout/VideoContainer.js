import React, { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../constants";

const VideoContainer = () => {
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return <div>Video container</div>;
};

export default VideoContainer;
