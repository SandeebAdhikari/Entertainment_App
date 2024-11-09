"use client";
import React from "react";
import ShowCard from "@/components/ShowCard";
import data from "@/data/data.json";

interface Item {
  title: string;
  year: number;
  category: string;
  rating: string;
  thumbnail: {
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  isBookmarked: boolean;
  isTrending: boolean;
}

const TvSeries = () => {
  const tvSeries = data.filter((item: Item) => item.category === "TV Series");

  return (
    <div className="my-[34px] ">
      <h1 className="font-light text-[32px] text-white">TV Series</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] mt-6">
        {tvSeries.map((series, index) => (
          <ShowCard key={index} item={series} />
        ))}
      </div>
    </div>
  );
};

export default TvSeries;
