import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API, searchIcon } from "../constants.js";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  console.log(searchQuery);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions((prev) => json[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <>
      <input
        className="w-10/12 border border-gray-400 px-5 py-2 rounded-s-full focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-sky-100"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery((prev) => e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      />
      <button className="border border-gray-400 py-[12.5px] px-7 rounded-e-full bg-gray-100">
        <img alt="search" src={searchIcon} width={14} />
      </button>

      {showSuggestions && suggestions.length !== 0 && (
        <div className="fixed bg-white rounded-xl mt-1 py-4 w-[46.5%] shadow hover:bg-grey-100 z-50">
          {suggestions.map((item) => (
            <div className="px-4 py-1 hover:bg-gray-100 font-bold">
              <span className="mr-4 ">
                <img
                  className="inline-block"
                  alt="search"
                  src={searchIcon}
                  width={14}
                />
              </span>
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchInput;
