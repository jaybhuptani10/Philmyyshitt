import React from "react";

const LoginButton = () => {
  return (
    <div className="m-5 w-[40vw] h-[30vh]  flex flex-col  justify-center gap-1 ">
      <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
        Sign in to Add, rate or review
      </h1>
      <h1>
        <h1 className="bg-[#5b6875] w-[100%]  p-2 text-center rounded-md duration-500 transition-all cursor-pointer hover:scale-110">
          Share
        </h1>
      </h1>
    </div>
  );
};

export default LoginButton;
