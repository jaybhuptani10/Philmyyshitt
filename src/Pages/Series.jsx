import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Casts from "./components/Casts";
import Crew from "./components/Crew";
import Navbar from "./Navbar/Navbar";
import CrewData from "./components/CrewData";
import Genre from "./components/General";
import Themes from "./components/Themes";

const Series = () => {
  const { id } = useParams();
  const [series, setSeries] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Cast");

  const states = "images";
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get("/api/details", {
          params: { id: id, type: states },
        });

        setCrew(response.data.posters);
        // Assuming response.data.crew is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchCastData();
    }
  }, [id]);
  useEffect(() => {
    axios
      .get("/api/seriesdetails", {
        params: { series: id },
      })
      .then((res) => {
        setSeries(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!series) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="xl:px-40 md:px-10  min-h-screen w-full overflow-hidden flex flex-col text-white">
        <img
          className="w-[100vw] sm:hidden h-[30vh] sm:h-[60vh] object-cover object-top sm:rounded-xl"
          src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
          alt=""
        />

        <div className="flex sm:mt-20 w-full flex-col">
          <div className="flex flex-col  lg:flex-row">
            <div className="m-5 flex gap-5">
              <img
                className="h-[15vh] w-[10vh] md:h-[20vh] md:w-[15vh] xl:h-[30vh] xl:w-[20vw] object-cover object-top rounded-xl"
                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                alt=""
              />
              <div className="flex flex-col">
                <div className="md:flex gap-5">
                  <h1 className="lg:text-4xl  text-2xl font-extrabold lg:hidden">
                    {series.name}
                  </h1>
                  <p className="lg:hidden block">{series.first_air_date}</p>
                  <p className="lg:hidden block">{series.vote_average}</p>
                </div>
                <div className="w-[100%] hidden sm:block lg:hidden  ">
                  <p className="mx-2 sm:mt-5 sm:mx-0">{series.overview}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col my-5 flex-wrap w-[100%] ">
              <div className="flex flex-col  lg:flex-row gap-2 sm:gap-7">
                <h1 className="lg:text-4xl text-xl  font-extrabold hidden lg:block">
                  {series.name}
                </h1>
                <p className="hidden  bg-[#EFF0D1] w-40 h-10 lg:flex items-center text-black font-semibold justify-center  rounded-md">
                  {series.first_air_date}
                </p>
                <p className="hidden w-20 h-10  bg-[#A9E5BB] lg:flex items-center text-black font-semibold justify-center p-1 rounded-md">
                  {series.vote_average}
                </p>
              </div>

              <div className="w-[100%]  ">
                <p className="mx-2 block  lg:block sm:mt-5 sm:mx-0">
                  {series.overview}
                </p>
              </div>
              <div className="sm:my-20 my-10">
                <div className="flex justify-around font-extrabold text-sm sm:text-l text-[#6CD4FF] border-b-2 border-[#9F86C0]">
                  <h1
                    className={`cursor-pointer ${
                      selectedOption === "Details" ? "active" : ""
                    }`}
                    onClick={() => setSelectedOption("Details")}
                  >
                    Details
                  </h1>
                  <h1
                    className={`cursor-pointer ${
                      selectedOption === "Cast" ? "active" : ""
                    }`}
                    onClick={() => setSelectedOption("Cast")}
                  >
                    Cast
                  </h1>
                  <h1
                    className={`cursor-pointer ${
                      selectedOption === "Crew" ? "active" : ""
                    }`}
                    onClick={() => setSelectedOption("Crew")}
                  >
                    Crew
                  </h1>
                  <h1
                    className={`cursor-pointer ${
                      selectedOption === "Genre" ? "active" : ""
                    }`}
                    onClick={() => setSelectedOption("Genre")}
                  >
                    Genre
                  </h1>

                  <h1
                    className={`cursor-pointer ${
                      selectedOption === "Images" ? "active" : ""
                    }`}
                    onClick={() => setSelectedOption("Images")}
                  >
                    Images
                  </h1>
                </div>
                <div>
                  {selectedOption === "Cast" && <Casts id={series.id} />}
                  {selectedOption === "Crew" && <Crew id={series.id} />}
                  {selectedOption === "Genre" && (
                    <>
                      <div className="flex gap-5 items-center mt-5">
                        <h1 className="w-30 mx-2 sm:w-20 uppercase">Genres</h1>
                        <div className="h-[1px] w-6 sm:w-40 bg-white"></div>
                        <div className="flex flex-wrap gap-4">
                          {series.genres.map((genre) => (
                            <Genre key={genre.id} genres={genre.name} />
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-6 items-center mt-10">
                        <h1 className="w-30 mx-2 sm:w-20 uppercase">THEMES</h1>
                        <div className="h-[1px] w-6 sm:w-40 bg-white"></div>
                        <div className="flex flex-wrap gap-2">
                          <Themes id={series.id} />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="m-5 w-[40vw] h-[30vh] border-2 border-black"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Series;
