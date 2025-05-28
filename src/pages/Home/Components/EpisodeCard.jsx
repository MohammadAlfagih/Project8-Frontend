import React from "react";

const EpisodeCard = ({ episode }) => {
  return (
    <div className="w-[300px] bg-[#161726] rounded-lg p-3 flex-shrink-0 hover:bg-[#0d0d17]">
      <div className="flex gap-3 items-start">
        <img
          src={episode?.artwork}
          alt={episode.title}
          className="w-12 h-12 rounded-lg object-cover flex-shrink-0 order-last"
        />
        <div className="flex-1">
          <h3 className="text-white text-sm font-semibold line-clamp-1 mb-1">
            {episode.title}
          </h3>
          <h4 className="text-gray-400 text-xs line-clamp-1">
            {episode.artist}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
