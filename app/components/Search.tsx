import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface SearchProps {
  onSearch : (searchResult : any) => void;
}

const Search({ onSearch } : SearchProps) {
  //Create useState for the search Param
  const [searchTerm, setSearchTerm] = useState("");

  //Create a use Query to search the query
  const handleSearch = (searchTerm) => {
  useQuery({
  queryKey: ['pokemon', searchTerm],
  queryFn: fetchPokemon
  })}
  //Create the function that will handle the Search

  return (

  <p>Temp</p>
  )
}

export default Search;
