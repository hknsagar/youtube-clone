import React from "react";
import { avatar } from "../constants";

const VideoCard = ({ videoInfo = {} }) => {
  console.log(videoInfo);
  const { snippet, statistics } = videoInfo || {};
  const { title, channelTitle, thumbnails } = snippet || {};
  return (
    <div className="grid grid-cols-1 gap-3">
      <img
        className="rounded-[15px]"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
        width="100%"
        // style={{height: "100%"}}
      />

      <div className="flex gap-4">
        <img alt="avatar" src={avatar} width={35} style={{ height: "35px" }} />
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm" style={{ color: "#3B3B3B" }}>
            {channelTitle}
          </div>
          <div className="text-sm" style={{ color: "#3B3B3B" }}>
            {statistics?.viewCount} views
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
