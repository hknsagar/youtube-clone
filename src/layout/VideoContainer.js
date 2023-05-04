import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../constants";
import VideoCard from "../components/VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos((prev) => json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 m-2">
      {videos.map((video) => (
        <VideoCard key={video.id} videoInfo={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
