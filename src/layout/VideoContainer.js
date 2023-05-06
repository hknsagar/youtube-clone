import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../constants";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";

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
    <div className="grid grid-cols-3 gap-5 m-2 relative top-28 left-24 -z-50">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
