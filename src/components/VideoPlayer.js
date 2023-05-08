import React from "react";
import { useSearchParams } from "react-router-dom";

const VideoPlayer = () => {
  const [searchParams] = useSearchParams();

  return (
    <iframe
      width={`100%`}
      height="360"
      src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayer;
