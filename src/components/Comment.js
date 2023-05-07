import React from "react";
import { avatar } from "../constants";

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex gap-3 ">
      <img alt="avatar" src={avatar} width={50} style={{ height: "50px" }} />
      <div>
        <div className="font-medium text-[13px]">{name}</div>
        <div className="text-[14px] mb-4" style={{ color: "#3B3B3B" }}>
          {comment}
        </div>
        {replies.length !== 0 &&
          replies.map((comment) => <Comment data={comment} />)}
      </div>
    </div>
  );
};

export default Comment;
