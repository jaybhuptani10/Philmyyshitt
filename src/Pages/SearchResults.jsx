import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import poster from "../assets/no-poster.png";

const SearchResults = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const location = useLocation();
  const { query } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query) {
          const response = await axios.get("/api/search", {
            params: { result: `multi?query=${query}` },
          });
          console.log(response.data.results);
          setResult(response.data.results || []); // Initialize result with an empty array if results are undefined
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);
  const onSearch = async (type, name) => {
    if (type === "tv") {
      navigate(`/series/${name}`);
    } else {
      navigate(`/movie/${name}`);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container px-5 mx-auto  md:px-20 lg:px-40 py-20 text-white z-0">
        <h1 className="text-3xl font-semibold mb-4">Search Results</h1>
        <p className="text-lg mb-4">Displaying results for: {query}</p>
        <ul className="grid grid-cols-3  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8 z-1">
          {result.length > 0 ? (
            result.map((item) => (
              <li
                onClick={() =>
                  onSearch(item.media_type, item.name || item.title)
                }
                key={item.id}
                className="flex flex-col gap-2 cursor-pointer hover:scale-105 hover:shadow-inner transform transition-transform duration-300 z-1"
              >
                {item.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className="rounded-lg shadow-md  "
                  />
                ) : (
                  <img
                    src={poster}
                    alt={item.title}
                    className="rounded-lg shadow-md z-1"
                  />
                )}

                <p className="text-lg font-semibold z-1">
                  {item.name || item.title}
                </p>
                <p className="text-gray-500">
                  {item.release_date || item.first_air_date}
                </p>
              </li>
            ))
          ) : (
            <li className="text-lg text-gray-500">No results found</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default SearchResults;
