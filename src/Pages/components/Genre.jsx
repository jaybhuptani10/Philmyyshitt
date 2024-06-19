import React from "react";

const Genre = ({ genres }) => {
  return (
    <h1 className="text-white text-xs whitespace-nowrap bg-[#303840] p-2 rounded-md mx-1 cursor-pointer">
      {genres}
    </h1>
  );
};

export default Genre;
