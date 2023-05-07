import React from "react";
import { avatar } from "../constants";
import CommentsList from "../components/CommentsList";

const CommentsContainer = () => {
  return (
    <>
      <div>15,108 Comments</div>
      <div className="flex mb-8">
        <img alt="avatar" src={avatar} width={50} />
        <input
          className=" w-full px-3 py-2 text-sm border-b focus:outline-none  focus:border-b-2 focus:border-black"
          placeholder="Add a comment"
        />
      </div>
      <CommentsList />
    </>
  );
};

export default CommentsContainer;
