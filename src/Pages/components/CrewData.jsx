import React, { useEffect, useState } from "react";
import axios from "axios";

const CrewData = ({ id }) => {
  const states = "images";
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get("/api/details", {
          params: { id: id, type: states },
        });
        console.log(response.data.backdrops);
        setCrew(response.data.backdrops);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchCastData();
    }
  }, [id]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 p-4">
      {crew.map((actor, index) => (
        <img
          key={index}
          className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg transform transition duration-200 hover:scale-105"
          src={`https://image.tmdb.org/t/p/w500/${actor.file_path}`}
          alt=""
        />
      ))}
    </div>
  );
};

export default CrewData;
