import React from "react";
import Button from "../components/Button";
import { list } from "../constants";

const ButtonContainer = () => {
  return (
    <div className="fixed top-[60px] left-24 bg-white w-[100%]">
      {list.map((item, idx) => (
        <Button key={idx} name={item} />
      ))}
    </div>
  );
};

export default ButtonContainer;
