import React, { useEffect, useState } from "react";
import axios from "axios";

const Crew = ({ id }) => {
  const credits = "credits";
  const [crew, setCrew] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const initialVisibleJobs = 3; // Number of jobs to initially display

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const response = await axios.get("/api/details", {
          params: { id: id, type: credits },
        });
        setCrew(response.data.crew); // Assuming response.data.crew is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchCastData();
    }
  }, [id]);

  const jobs = [
    { title: "Director", keys: ["Director"] },
    { title: "Producer", keys: ["Producer"] },
    { title: "Screenplay", keys: ["Screenplay"] },
    { title: "Writers", keys: ["Writer"] },
    { title: "CASTING", keys: ["Casting"] },
    { title: "Cinematography", keys: ["Director of Photography"] },
    { title: "Editors", keys: ["Editor"] },
    {
      title: "Music",
      keys: [
        "Original Music Composer",
        "Music Editor",
        "Orchestrator",
        "Sound Re-Recording Mixer",
        "Sound Mixer",
        "Supervising Sound Editor",
        "Utility Sound",
        "Sound Designer",
        "Assistant Sound Editor",
      ],
    },
    {
      title: "ASST. DIRECTORS",
      keys: ["First Assistant Director", "Second Assistant Director"],
    },
    {
      title: "Casting",
      keys: ["Casting"],
    },
    {
      title: "Production Design",
      keys: [
        "Production Design",
        "Art Direction",
        "Set Decoration",
        "Assistant Art Director",
      ],
    },
    {
      title: "Costume & Make-Up",
      keys: [
        "Costume Design",
        "Makeup Artist",
        "Hairstylist",
        "Key Hair Stylist",
        "Key Makeup Artist",
        "Makeup Department Head",
        "Makeup Designer",
        "Makeup Supervisor",
        "Special Effects Makeup Artist",
        "Wigmaker",
      ],
    },
    {
      title: "stunts",
      keys: ["Stunt Coordinator", "Stunt Double", "Stunt Driver", "Stunts"],
    },
    {
      title: "Visual Effects",
      keys: [
        "Visual Effects",
        "Visual Effects Producer",
        "Visual Effects Supervisor",
        "Visual Effects Art Director",
        "Visual Effects Coordinator",
        "Visual Effects Editor",
        "Visual Effects Technical Director",
        "CG Supervisor",
      ],
    },
    {
      title: "Camera",
      keys: [
        "Camera Operator",
        "First Assistant Camera",
        "Second Assistant Camera",
        "Steadicam Operator",
        "Underwater Camera",
        "Camera Technician",
        "Camera Loader",
        "Camera Trainee",
      ],
    },
    {
      title: "Lighting",
      keys: ["Gaffer"],
    },
  ];

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-5 mt-5 mx-2">
      {jobs
        .slice(0, showMore ? jobs.length : initialVisibleJobs)
        .map((job, index) => {
          let jobCrew = crew.filter((crewMember) =>
            job.keys.includes(crewMember.job)
          );
          if (jobCrew.length === 0) return null;

          return (
            <div key={index} className="flex gap-5 items-center">
              <h1 className="w-30 sm:w-20 uppercase">{job.title}</h1>
              <div className="h-[1px] w-10 sm:w-40 bg-white"></div>
              <div className="flex flex-wrap gap-2">
                {jobCrew.map((crewMember) => (
                  <h1
                    key={crewMember.id}
                    className="text-white text-xs whitespace-nowrap bg-[#303840] p-2 rounded-md mx-1 cursor-pointer"
                  >
                    {crewMember.name}
                  </h1>
                ))}
              </div>
            </div>
          );
        })}
      {jobs.length > initialVisibleJobs && (
        <button
          className="text-blue-500 underline cursor-pointer"
          onClick={toggleShowMore}
        >
          {showMore ? "Show Less" : `+${jobs.length - initialVisibleJobs} more`}
        </button>
      )}
    </div>
  );
};

export default Crew;
