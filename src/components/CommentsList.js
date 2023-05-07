import React from "react";
import { commentsData } from "../constants";
import Comment from "./Comment";

const CommentsList = () => {
  return commentsData.map((comment, idx) => (
    <Comment key={idx} data={comment} />
  ));
};

export default CommentsList;
