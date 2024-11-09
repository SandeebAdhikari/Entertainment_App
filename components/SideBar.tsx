"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col items-center my-8 ml-8 w-[96px] h-[960px] bg-[#161D2F] rounded-[20px] shrink-0">
      <div className="mt-[36px]">
        <img src="/assets/logo.svg" alt="logo" className="w-8 h-[25.6px]" />
      </div>
      <div className="mt-[76px] w-[20px] h-[200px]">
        <img
          src="/assets/icon-nav-home.svg"
          alt="home logo"
          className="mt-10 w-5 h-5 hover:invert hover:cursor-pointer"
          onClick={() => handleNavigation("/home")}
        />

        <img
          src="/assets/icon-nav-movies.svg"
          alt="movies logo"
          className="mt-10 w-5 h-5 hover:invert hover:cursor-pointer"
          onClick={() => handleNavigation("/movies")}
        />

        <img
          src="/assets/icon-nav-tv-series.svg"
          alt="tv-series logo"
          className="mt-10 w-5 h-5 hover:invert hover:cursor-pointer"
          onClick={() => handleNavigation("/tv_series")}
        />

        <img
          src="/assets/icon-nav-bookmark.svg"
          alt="bookmark logo"
          className="mt-10 w-5 h-5 hover:invert hover:cursor-pointer"
          onClick={() => handleNavigation("/bookmarked")}
        />
      </div>
      <div className="mt-[552px]">
        <img
          src="/assets/image-avatar.png"
          alt="avatar"
          className="w-10 h-10 rounded-full border border-white hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SideBar;
