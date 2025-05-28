import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { getPodcasts } from "../../services/Search";
import PodcastCard from "./Components/PodcastCard";
import EpisodeCard from "./Components/EpisodeCard";
import Search from "./Components/Search";

const ResultsPage = () => {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const searchKeyword = decodeURIComponent(keyword);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["podcasts", searchKeyword],
    queryFn: () => getPodcasts(searchKeyword),
    enabled: Boolean(searchKeyword),
  });

  const handleSearch = ({ searchKeyword: newKeyword }) => {
    if (newKeyword.trim()) {
      navigate(`/search/${encodeURIComponent(newKeyword)}`);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#161726]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Bar Section */}
        <div className="mb-8">
          <Search onSearchKeyword={handleSearch} initialValue={searchKeyword} />
        </div>

        {isLoading && <p className="text-center text-white">جاري البحث...</p>}
        {isError && (
          <p className="text-center text-red-500">حدث خطأ في البحث</p>
        )}

        {data && (
          <div className="space-y-12 items-center">
            {/* Podcasts Section */}
            {data.results?.podcasts?.length > 0 && (
              <div>
                <h2 className="text-xl text-white mb-6 text-right">
                  أبرز برامج البودكاست ل"{searchKeyword}"
                </h2>

                <div className="">
                  <ul className=" flex flex-row overflow-y-auto ">
                    {data.results.podcasts.map((podcast) => (
                      <li className="px-3 ">
                        <PodcastCard key={podcast.id} podcast={podcast} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Episodes Section */}
            {data.results?.episodes?.length > 0 && (
              <div>
                <h2 className="text-xl text-white mb-6 text-right">
                  أبرز الحلقات ل "{searchKeyword}"
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                  {data.results.episodes.map((episode) => (
                    <button
                      key={episode.id}
                      onClick={() => {
                        navigate(`/episode/${episode.id}`, { state: episode });
                      }}
                    >
                      <EpisodeCard episode={episode} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
