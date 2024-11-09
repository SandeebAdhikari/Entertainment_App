"use client";
import React from "react";
import { usePathname } from "next/navigation";

const SearchBar = () => {
  const pathname = usePathname();

  const getPlaceholder = () => {
    switch (pathname) {
      case "/home":
        return "Search for movies or TV series";
      case "/movies":
        return "Search for movies";
      case "/tv_series":
        return "Search for TV series";
      case "/bookmarked":
        return "Search for bookmarked shows";
      default:
        return "Search...";
    }
  };

  return (
    <div className="flex mt-16 mx-9 gap-6 items-center justify-center h-8 ">
      <div className="flex gap-6"></div>
      <img
        src="/assets/icon-search.svg"
        alt="search icon"
        className="w-8 h-8 ml-4 mt-2"
      />
      <input
        type="text"
        placeholder={getPlaceholder()}
        className="w-full py-4  bg-[#10141E] font-light text-[24px] text-white outline-none focus:ring-0 hover:border-b hover:border-[#5A698F] hover:cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
