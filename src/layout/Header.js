import React from "react";
import { menu } from "../constants.js";
import { logo } from "../constants.js";
import { avatar } from "../constants.js";

import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput.js";

const Header = () => {
  return (
    <>
      <div className="grid grid-flow-col px-5 fixed top-0 left-0 right-0 z-20 bg-white">
        <div className="col-span-1 flex">
          <img alt="menu" src={menu} width={40} />
          <Link to={`/`}>
            <img className="p-4" alt="logo" src={logo} width={120} />
          </Link>
        </div>

        <div className="p-2 col-span-7">
          <SearchInput />
        </div>

        <div className="col-span-4 flex justify-end">
          <img className="p-3" alt="logo" src={avatar} width={60} />
        </div>
      </div>
    </>
  );
};

export default Header;
