import React, { useState } from "react";

const Search = ({ onSearchKeyword, initialValue = "" }) => {
  const [searchKeyword, setSearchKeyword] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchKeyword({ searchKeyword });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto  ">
      <div
        className="gap-2 text-center border-[1px] block mt-2 rounded-lg"
      >
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="ابحث عن بودكاست..."
          className="w-full px-4 py-2 rounded-lg bg-[#161726] text-white focus:outline-none focus:ring-2 focus:ring-[#7B7BF0]"
        />
        
      </div>
    </form>
  );
};

export default Search;
