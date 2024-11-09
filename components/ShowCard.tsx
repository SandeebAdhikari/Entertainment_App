import React from "react";

interface Item {
  title: string;
  year: number;
  category: string;
  rating: string;
  thumbnail: {
    regular: {
      large: string;
    };
  };
}

const ShowCard = ({ item }: { item: Item }) => {
  return (
    <div className="mt-8 flex flex-col w-[280px] h-[226px] group hover:cursor-pointer">
      <div className="relative w-full h-[174px]">
        <img
          src={item.thumbnail.regular.large}
          alt={item.title}
          className="rounded-[8px] w-full h-full object-cover"
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
      </div>
      <div className="mt-[8px]  flex items-center w-full h-[16px] text-white text-[13px]">
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
      <h1 className="mt-[5px] font-medium text-[18px] text-white">
        {item.title}
      </h1>
    </div>
  );
};

export default ShowCard;
