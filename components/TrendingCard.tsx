"use client";
import React from "react";

interface TrendingItem {
  title: string;
  year: number;
  category: string;
  rating: string;
  thumbnail: {
    trending: {
      large: string;
    };
  };
}

const TrendingCard = ({ item }: { item: TrendingItem }) => {
  return (
    <div className="shrink-0 relative group w-[470px] h-[230px] mt-[25px] rounded-[8px] overflow-hidden hover:cursor-pointer">
      <img
        src={item.thumbnail.trending.large}
        alt={item.title}
        className="w-full h-full object-cover transition-transform transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center bg-white/30 px-[9px] py-[9px] rounded-full w-[117px] h-[48px]">
          <img
            src="/assets/icon-play.svg"
            alt="Play icon"
            className="w-7 h-7"
          />
          <span className="ml-[19px] text-white font-medium text-[18px]">
            Play
          </span>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-8 h-8 bg-black/50 rounded-full mt-4 mr-6">
        <img
          src="/assets/icon-bookmark-empty.svg"
          alt="bookmark icon"
          className="w-3 h-[14px] mx-[10px] my-[9px]"
        />
      </div>

      <div className="absolute bottom-0 inset-x-0 h-[100px]">
        <div className="mt-6 ml-6 flex items-center w-full h-[16px] text-white text-[15px]">
          <h1 className="font-light">{item.year}</h1>
          <div className="w-[3px] h-[3px] bg-white rounded-full mx-[8px]"></div>
          <img
            src={
              item.category === "Movie"
                ? "/assets/icon-category-movie.svg"
                : "/assets/icon-category-tv.svg"
            }
            alt="category icon"
            className="w-3 h-3 mr-[6px]"
          />
          <h1 className="font-light">{item.category}</h1>
          <div className="w-[3px] h-[3px] bg-white rounded-full mx-[8px]"></div>
          <h1 className="font-light">{item.rating}</h1>
        </div>
        <h1 className="ml-6 font-medium text-[24px] text-white">
          {item.title}
        </h1>
      </div>
    </div>
  );
};

export default TrendingCard;
