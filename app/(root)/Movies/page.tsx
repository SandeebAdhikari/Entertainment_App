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

const Movies = () => {
  const movies = data.filter((item: Item) => item.category === "Movie");

  return (
    <div className="my-[34px] ">
      <h1 className="font-light text-[32px] text-white">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] mt-6">
        {movies.map((movie, index) => (
          <ShowCard key={index} item={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
