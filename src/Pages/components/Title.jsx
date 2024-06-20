import React, { useEffect, useState } from "react";
import axios from "axios";

const Title = ({ id }) => {
  const credits = "alternative_titles";
  const [theme, setTheme] = useState([]);
  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get("/api/details", {
          params: { id: id, type: credits },
        });
        console.log(response.data.titles);
        setTheme(response.data.titles); // Assuming response.data.crew is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchCastData();
    }
  }, [id]);
  return theme.map((item) => (
    <h1
      key={item.id}
      className="text-white text-[8.6px] sm:text-sm whitespace-nowrap   cursor-pointer"
    >
      {item.title},
    </h1>
  ));
};

export default Title;
