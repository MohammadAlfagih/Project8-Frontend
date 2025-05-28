import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Components/Search";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = ({ searchKeyword }) => {
    if (searchKeyword.trim()) {
      navigate(`/search/${encodeURIComponent(searchKeyword)}`);
    }
  };

  return (
    <div className="w-full justify-center items-center flex h-screen flex-col bg-gradient-to-br from-[#2c2f52] via-[#2c2f52] to-[#0d0d17] ">
        <h1 className="text-white text-[53px]">
            أهلا
        </h1>
        <h2 className="text-white">
            هذا التطبيق الخاص بالبحث ب
            ITUNES REST API
        </h2>
      <Search onSearchKeyword={handleSearch} />
    </div>
  );
};

export default HomePage;
