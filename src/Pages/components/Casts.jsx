import React, { useEffect, useState } from "react";
import axios from "axios";

const Casts = ({ id }) => {
  const credits = "credits";
  const [casts, setCasts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get("/api/details", {
          params: { id: id, type: credits },
        });
        setCasts(response.data.cast); // Assuming response.data.cast is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchCastData();
    }
  }, [id]);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const displayedCasts = showAll ? casts : casts.slice(0, 15);

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap gap-3">
        {displayedCasts.map((cast) => (
          <div
            key={cast.id}
            className="relative bg-[#303840] p-2 rounded-md mx-1 cursor-pointer"
          >
            <h1 className="text-white relative z-10 text-xs font-semibold cast-name">
              {cast.name}
              <span className="absolute -top-9 hidden rounded-md whitespace-nowrap p-1 bg-[#8AA1B1]">
                {cast.character}
              </span>
            </h1>
          </div>
        ))}
      </div>
      {casts.length > 15 && (
        <button
          className="mt-4 px-4 py-2 bg-[#8AA1B1] text-white rounded-md"
          onClick={handleShowMore}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Casts;
