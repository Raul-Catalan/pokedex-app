"use client";

import Search from "./components/Search";
import { useState } from "react";

export default function Home() {
  //Maybe have to change the state to an array NOTE:
  const [searchData, setSearchData] = useState(null);

  const handleSearch = (searchResult: any) => {
    setSearchData(searchResult);
  };

  return (
    <main>
      <h1>Search and Display Data</h1>
      <Search onSearch={handleSearch} />
      {searchData && <p>Search Successful</p>}
    </main>
  );
}
