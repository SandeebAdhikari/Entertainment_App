"use client";
import React from "react";
import TrendingCard from "@/components/TrendingCard";
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

const Home = () => {
  const movies = data.filter((item: Item) => item.category === "Movie");
  const tvSeries = data.filter((item: Item) => item.category === "TV Series");

  return (
    <div className="mt-[34px] ">
      <h1 className="font-light text-[32px] text-white">Trending</h1>
      <TrendingCard />

      <h1 className="mt-10 font-light text-[32px] text-white">
        Recommended for you
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mr-40">
        {movies.map((movie, index) => (
          <ShowCard key={index} item={movie} />
        ))}
        {tvSeries.map((series, index) => (
          <ShowCard key={index + movies.length} item={series} />
        ))}
      </div>
    </div>
  );
};

export default Home;
