import React from "react";

const Bullet = ({ top}) => {
  return (
    <div className="bg-[#1b191e] border-2 rounded-full border-primary p-0.5 left-[-3px] absolute ease-in duration-300"  style={{ top: top || '0px' }}></div>
  );
};

const Line = () => {
  
  return (
    // Line
    <div className="h-[4800px] md:h-[4550px] absolute w-[0.01em] bg-primary left-[15.5%] top-[7.5%]">
      {/* Bullet */}
      <Bullet ></Bullet>
      {/* mouse and text */}
      <div className="absolute w-8 top-[23rem] left-[-15.7px] hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="backdrop-blur-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M5 15C5 16.8565 5.73748 18.6371 7.05023 19.9498C8.36299 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9497 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9497 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36299 2.73754 7.05023 4.05029C5.73748 5.36305 5 7.14348 5 9V15Z"
              stroke="#93899a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M12 6V10"
              stroke="#93899a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <span
          className="text-accent rotate-180 text-sm top-[3rem] left-[5px] backdrop-blur-sm absolute"
          style={{ writingMode: "vertical-lr" }}
        >
          SCROLL
        </span>
      </div>
      <Bullet top={'40rem'}></Bullet>
      <Bullet top={'130rem'}></Bullet>
      <Bullet top={'180rem'}></Bullet>
      <Bullet top={'260rem'}></Bullet>
    </div>
  );
};

export default Line;
