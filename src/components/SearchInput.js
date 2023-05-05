import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API, searchIcon } from "../constants.js";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  console.log(searchQuery);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  useEffect(() => {
    getSearchSuggestions();
    // const timer = setTimeout(() => getSearchSuggestions(), 1000);

    // return () => {
    //   clearTimeout(timer);
    // };
  }, [searchQuery]);

  return (
    <>
      <input
        className="w-10/12 border border-gray-400 px-5 py-2 rounded-s-full"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery((prev) => e.target.value)}
      />
      <button className="border border-gray-400 py-[12.5px] px-7 rounded-e-full bg-gray-100">
        <img alt="search" src={searchIcon} width={14} />
      </button>
    </>
  );
};

export default SearchInput;
