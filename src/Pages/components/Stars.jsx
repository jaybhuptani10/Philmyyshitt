import React, { useState } from "react";

const Stars = ({ rating, setRating }) => {
  const stars = [1, 2, 3, 4, 5];

  const [hoverIndex, setHoverIndex] = useState(null);

  const onStarClick = (ratingValue) => {
    if (ratingValue === Math.ceil(rating)) {
      // If the same star is clicked, toggle the half rating
      if (rating === ratingValue) {
        setRating(ratingValue - 0.5); // Set half rating
      } else {
        setRating(ratingValue); // Set full rating
      }
    } else {
      // If a different star is clicked, reset to full rating
      setRating(ratingValue);
    }
  };

  const onMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const onMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="flex flex-col gap-1 items-center bg-[#5b6875] w-[100%] p-2 text-center rounded-md duration-500 transition-all justify-center h-24">
      {rating > 0 ? (
        <h1 className="text-[#C8C8C8] uppercase font-bold cursor-pointer">
          Rated
        </h1>
      ) : (
        <h1 className="text-[#C8C8C8] uppercase font-bold cursor-pointer">
          Rate
        </h1>
      )}

      <div className="stars flex gap-1">
        {stars.map((star, index) => (
          <div
            key={index}
            className="relative w-10 h-10 cursor-pointer"
            onClick={() => onStarClick(index + 1)}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={onMouseLeave}
          >
            {rating >= index + 1 ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-full h-full ${
                  hoverIndex !== null
                    ? hoverIndex >= index
                      ? "text-[#FF8C61]"
                      : "text-gray-500"
                    : rating >= index + 1
                    ? "text-[#FF8C61]"
                    : rating >= index + 0.5
                    ? "text-[#FF8C61] fill-current opacity-50"
                    : "text-gray-500"
                }`}
              >
                <path d="M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z" />
              </svg>
            ) : rating >= index + 0.5 ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-full h-full ${
                  hoverIndex !== null
                    ? hoverIndex >= index
                      ? "text-[#FF8C61]"
                      : "text-gray-500"
                    : rating >= index + 1
                    ? "text-[#FF8C61]"
                    : rating >= index + 0.5
                    ? "text-[#FF8C61] fill-current "
                    : "text-gray-500"
                }`}
              >
                <path d="M5.025 20.775A.998.998 0 006 22a1 1 0 00.555-.168L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 00-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.214 4.107-1.491 6.452zM12 5.429l2.042 4.521.588.047h.001l3.972.315-3.271 2.944-.001.002-.463.416.171.597v.003l1.253 4.385L12 15.798V5.429z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-full h-full ${
                  hoverIndex !== null
                    ? hoverIndex >= index
                      ? "text-[#FF8C61]"
                      : "text-gray-500"
                    : rating >= index + 1
                    ? "text-[#FF8C61]"
                    : rating >= index + 0.5
                    ? "text-[#FF8C61] fill-current opacity-50"
                    : "text-gray-500"
                }`}
              >
                <path d="M21.947 9.179a1.001 1.001 0 00-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 00-1.822-.001L8.622 8.05l-5.701.453a1 1 0 00-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 001.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 001.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stars;
