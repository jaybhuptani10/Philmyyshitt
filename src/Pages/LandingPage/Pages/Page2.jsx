import React from "react";
import "../../style.css";
const Page2 = () => {
  return (
    <div className="text-white py-20">
      <h1 className="sm:text-3xl">We Let You.......</h1>
      <div className="py-10 justify-center flex gap-2 flex-wrap">
        <div className="px-5 h-[20%] sm:w-[25vw] sm:h-[7vw] text-black bg-[#CBD2D0] hover:bg-[#FE938C] cursor-pointer flex items-center gap-1 details-card ">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="3.5em"
            width="3.5em"
            className="w-[25%]"
          >
            <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
          </svg>
          <h1 className="w-[75%] text-xs sm:text-xl font-bold">
            Keep track of every Movie / Show you watch
          </h1>
        </div>
        <div className="px-5 sm:w-[25vw] sm:h-[7vw] text-black bg-[#CBD2D0] cursor-pointer flex items-center gap-1 details-card  hover:bg-[#4281A4]">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="3.5em"
            width="3.5em"
            className="w-[25%] "
          >
            <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
          </svg>

          <h1 className="w-[75%] text-xs sm:text-xl font-bold">
            Mark your favourite Movie / Show and show them to your friends
          </h1>
        </div>
        <div className="px-5 h-[20%] sm:w-[25vw] sm:h-[7vw] text-black bg-[#CBD2D0] cursor-pointer flex items-center gap-1 details-card hover:bg-[#1D7874]">
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            height="3.5em"
            width="3.5em"
            className="w-[25%] p-2 sm:p-1"
          >
            <path d="M13.498.795l.149-.149a1.207 1.207 0 111.707 1.708l-.149.148a1.5 1.5 0 01-.059 2.059L4.854 14.854a.5.5 0 01-.233.131l-4 1a.5.5 0 01-.606-.606l1-4a.5.5 0 01.131-.232l9.642-9.642a.5.5 0 00-.642.056L6.854 4.854a.5.5 0 11-.708-.708L9.44.854A1.5 1.5 0 0111.5.796a1.5 1.5 0 011.998-.001zm-.644.766a.5.5 0 00-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 000-.708l-1.585-1.585z" />
          </svg>
          <h1 className="w-[75%] text-xs sm:text-xl font-bold">
            Write reviews and share your thoughts with the community
          </h1>
        </div>
        <div className="px-5 sm:w-[25vw] sm:h-[7vw] text-black bg-[#CBD2D0] cursor-pointer flex items-center gap-1 details-card  hover:bg-[#FE938C]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="3.5em"
            width="3.5em"
            className="w-[25%]"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 17.456a6 6 0 110-10.912 6 6 0 110 10.912zm-2-1.487a4 4 0 110-7.938A5.977 5.977 0 008.5 12c0 1.522.567 2.911 1.5 3.969zm4-7.938a4 4 0 110 7.938A5.978 5.978 0 0015.5 12 5.978 5.978 0 0014 8.031zm-2 .846c.915.733 1.5 1.86 1.5 3.123 0 1.263-.585 2.39-1.5 3.123A3.993 3.993 0 0110.5 12c0-1.263.585-2.39 1.5-3.123z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="w-[75%] text-xs sm:text-xl font-bold">
            Make friends and connect with other cinephiles
          </h1>
        </div>
        <div className="px-5 w-[100%] sm:w-[25vw] sm:h-[7vw] text-black bg-[#CBD2D0] cursor-pointer flex items-center gap-1 details-card hover:bg-[#4281A4]">
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="3.5em"
            width="3.5em"
            className="w-[25%]"
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" />
          </svg>
          <h1 className="w-[75%] text-xs sm:text-xl font-bold">
            Rate every Movie / Show you watch
          </h1>
        </div>
        <div className="px-5 sm:w-[25vw] sm:h-[7vw] text-black bg-[#CBD2D0] cursor-pointer flex items-center gap-1 details-card hover:bg-[#1D7874] ">
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            height="3.5em"
            width="3.5em"
            className="w-[25%] p-2 sm:p-1"
          >
            <path
              fillRule="evenodd"
              d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
            />
            <path d="M2 2a2 2 0 012-2h8a2 2 0 012 2v13.5a.5.5 0 01-.777.416L8 13.101l-5.223 2.815A.5.5 0 012 15.5V2zm2-1a1 1 0 00-1 1v12.566l4.723-2.482a.5.5 0 01.554 0L13 14.566V2a1 1 0 00-1-1H4z" />
          </svg>
          <h1 className="w-[75%] text-xs sm:text-xl font-bold">
            Mark the Movies / Shows you want to watch
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page2;
