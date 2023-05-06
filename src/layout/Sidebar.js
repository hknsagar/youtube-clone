import React from "react";
import { homeIcon, libraryIcon, shortsIcon, subscriptionsIcon } from "../constants";

const Sidebar = () => {
  return (
    <div className=" mx-3 fixed top-12 w-[5%]">
      <div className="flex flex-col text-center mb-5">
        <div className="m-auto">
          <img alt="home" src={homeIcon} width={50} />
        </div>
        <div className="relative bottom-2 text-[11px]">Home</div>
      </div>

      <div className="flex flex-col text-center mb-5">
        <div className="m-auto">
          <img alt="home" src={shortsIcon} width={50} />
        </div>
        <div className="relative bottom-2 text-[11px]">Shorts</div>
      </div>

      <div className="flex flex-col text-center mb-7">
        <div className="m-auto">
          <img alt="home" src={subscriptionsIcon} width={30} />
        </div>
        <div className="text-[11px]">Subscriptions</div>
      </div>

      <div className="flex flex-col text-center mb-7">
        <div className="m-auto">
          <img alt="home" src={libraryIcon} width={30} />
        </div>
        <div className="text-[11px]">Library</div>
      </div>
    </div>
  );
};

export default Sidebar;
