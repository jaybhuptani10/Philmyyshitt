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
        // Assuming response.data.crew is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchCastData();
    }
  }, [id]);
  return (
    <div>
      {" "}
      {crew.map((actor) => (
        <div key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.file_path}`}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default CrewData;
