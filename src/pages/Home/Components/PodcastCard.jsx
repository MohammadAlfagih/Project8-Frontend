import React from "react";

const PodcastCard = ({ podcast }) => {
  return (
    <div className="bg-[#161726] flex flex-col items-end w-[200px] flex-shrink-0">
      <img
        src={podcast.artwork}
        alt={podcast.title}
        className="w-full h-auto object-fill mb-4"
      />
      <h3 className="text-white font-semibold text-right line-clamp-1 mb-2 w-full">
        {podcast.title}
      </h3>
      <p className="text-[#b99b61] text-sm text-right line-clamp-1 w-full">
        {podcast.artist}
      </p>
    </div>
  );
};

export default PodcastCard;
