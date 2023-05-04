import React from "react";
import Button from "../components/Button";
import { list } from "../constants";

const ButtonContainer = () => {
  return (
    <div className="">
      {list.map((item, idx) => (
        <Button key={idx} name={item} />
      ))}
    </div>
  );
};

export default ButtonContainer;
