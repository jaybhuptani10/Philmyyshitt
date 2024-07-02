import React from "react";
import Modal from "../components/Modal";

const PhoneTitle = ({
  movie,

  isLoggedIn,
  setWatched,

  setLiked,
  setAdd,
  watched,
  liked,
  add,
  rating,
  setRating,
  setOpenModal,
  openModal,
}) => {
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="m-5 flex gap-5">
      <img
        className="h-[15vh] w-[10vh] md:h-[20vh] md:w-[15vh] xl:h-[30vh] xl:w-[20vw] object-cover object-top rounded-xl"
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt=""
      />
      <div className="flex flex-col">
        <div className="md:flex gap-5">
          <h1 className="lg:text-4xl relative text-2xl font-extrabold lg:hidden">
            {movie?.original_title}{" "}
          </h1>
          <p className="lg:hidden block">{movie?.release_date}</p>
          <p className="lg:hidden block">{movie?.vote_average}</p>
        </div>
        <div className="lg:hidden absolute right-5">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="2em"
            width="2em"
            onClick={() => handleOpenModal()}
          >
            <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
          </svg>
          {openModal && (
            <Modal
              isLoggedIn={isLoggedIn}
              setWatched={setWatched}
              onClose={handleCloseModal}
              setLiked={setLiked}
              setAdd={setAdd}
              watched={watched}
              liked={liked}
              add={add}
              rating={rating}
              setRating={setRating}
            />
          )}
        </div>
        <div className="w-[100%] hidden sm:block lg:hidden  ">
          <p className="mx-2 sm:mt-5 sm:mx-0">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneTitle;
