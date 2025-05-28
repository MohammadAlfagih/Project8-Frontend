import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "../Home/Components/Search";

const EpisodeDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const episode = location.state;

  const handleSearch = ({ searchKeyword }) => {
    if (searchKeyword.trim()) {
      navigate(`/search/${encodeURIComponent(searchKeyword)}`);
    }
  };

  useEffect(() => {
    if (!episode) {
      navigate("/");
    }
  }, [episode, navigate]);

  if (!episode) {
    return (
      <div className="w-full min-h-screen bg-[#161726] text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#161726]">
      {/* Search Bar Section */}
      <div className="w-full bg-[#161726] py-4 sticky top-0 z-10 border-b border-[#282938]">
        <div className="max-w-4xl mx-auto px-4">
          <Search onSearchKeyword={handleSearch} />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          {/* Image Section */}
          <img
            src={episode.artwork}
            alt={episode.title}
            className="w-72 h-72 rounded-lg object-cover mb-8 shadow-lg"
          />

          {/* Title and Artist Section */}
          <div className="text-center mb-8 w-full">
            <h1 className="text-3xl font-bold mb-2 text-white">
              {episode.title}
            </h1>
            <p className="text-[#b99b61] text-xl mb-4">
              {episode.artist}
            </p>
          </div>

          {/* Audio Player Section */}
          <div className="w-full max-w-2xl mb-8">
            <audio
              controls
              className="w-full mb-4"
              src={episode.audio}
            >
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* Episode Details Section */}
          <div className="bg-[#282938] p-6 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between mb-4 text-sm">
              <span className="text-gray-400">
                {new Date(episode.date).toLocaleDateString('en-GB')}
              </span>
              <span className="text-gray-400">
                {Math.floor(episode.duration / 60000)} دقيقة
              </span>
            </div>

            {episode.shortDescription && (
              <p className="text-white mb-4 text-right">
                {episode.shortDescription}
              </p>
            )}

            {episode.description && (
              <p className="text-gray-400 text-right text-sm leading-relaxed">
                {episode.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
