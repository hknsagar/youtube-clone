import React from "react";
import { menu } from "../constants.js";
import { logo } from "../constants.js";
import { avatar } from "../constants.js";
import { searchIcon } from "../constants.js";

const Header = () => {
  return (
    <>
      <div className="grid grid-flow-col mx-5">
        <div className="col-span-1 flex">
          <img alt="menu" src={menu} width={40} />
          <img className="p-4" alt="logo" src={logo} width={120} />
        </div>

        <div className="p-2 col-span-7">
          <input
            className="w-10/12 border border-gray-400 px-5 py-2 rounded-s-full"
            type="text"
          />
          <button className="border border-gray-400 py-[12.5px] px-7 rounded-e-full bg-gray-100">
            <img alt="search" src={searchIcon} width={14} />
          </button>
        </div>

        <div className="col-span-4 flex justify-end">
          <img className="p-3" alt="logo" src={avatar} width={60} />
        </div>
      </div>
    </>
  );
};

export default Header;
