import React, { useEffect, useState } from "react";
import axios from "axios";
const Themes = ({ id }) => {
  const credits = "keywords";
  const [theme, setTheme] = useState([]);
  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get("/api/details", {
          params: { id: id, type: credits },
        });
        console.log(response.data.keywords);
        setTheme(response.data.keywords); // Assuming response.data.crew is an array
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
      className="text-white text-xs whitespace-nowrap  bg-[#303840] p-2 mx-2 rounded-md  cursor-pointer"
    >
      {item.name}
    </h1>
  ));
};

export default Themes;
