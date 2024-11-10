"use client";
import React, { useEffect, useRef, useState } from "react";
import TrendingCard from "@/components/TrendingCard";
import ShowCard from "@/components/ShowCard";
import data from "@/data/data.json";

interface Item {
  title: string;
  year: number;
  category: string;
  rating: string;
  thumbnail: {
    trending?: {
      large: string;
      small: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  isBookmarked: boolean;
  isTrending: boolean;
}

interface TrendingItem extends Item {
  thumbnail: {
    trending: {
      large: string;
      small: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

const Home = () => {
  const movies = data.filter((item: Item) => item.category === "Movie");
  const tvSeries = data.filter((item: Item) => item.category === "TV Series");
  const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const speed = 1;
  const scrollStep = 0.5;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const trendingData: TrendingItem[] = data.filter(
      (item): item is TrendingItem =>
        item.isTrending && item.thumbnail.trending !== undefined
    ) as TrendingItem[];
    setTrendingItems([...trendingData, ...trendingData]);

    let animationFrameId: number;

    const autoScroll = () => {
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        scrollElement.scrollLeft += scrollStep;
        const { scrollLeft, scrollWidth, clientWidth } = scrollElement;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollElement.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isMounted]);

  if (!isMounted) return null;
  return (
    <div className="mt-[34px]">
      <h1 className="font-light text-[32px] text-white">Trending</h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-10 scrollbar-hide scroll-smooth mr-[200px]"
      >
        {trendingItems.map((item, index) => (
          <TrendingCard key={index} item={item as TrendingItem} />
        ))}
      </div>

      <h1 className="mt-10 font-light text-[32px] text-white">
        Recommended for you
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mr-40 mt-6">
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
