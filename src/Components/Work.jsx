import React from "react";
import Cards from "./Cards";

const Work = () => {
  return (
    <div className="bg-[#0f0d15] min-h-[100vh] pt-5 w-full" id="work">
      <div className=" max-w-[60%] mx-auto text-xl md:text-2xl lg:text-3xl mt-12 relative">
        <p className="text-lg text-secondarytext">Work /&gt;</p>
        <p className="font-bold text-secondarytext">
          Selected web, application projects...
        </p>
      </div>
      <span className="text-[4rem] md:text-[6rem] xl:text-[8rem] text-secondary absolute font-sans font-bold right-0">
        Projects
      </span>

      {/* 3 grids */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-end pt-14">
        <div className="mx-auto pl-36 md:m-0 pt-32">
          <Cards
            img_src={"pde_logo.png"}
            caption={"Price Data Exchange"}
            project={"pde"}
            num={0}
          />
        </div>
        <div className="mx-auto pl-36 md:m-0 md:pb-32">
          <Cards
            img_src={"explore_books_logo.png"}
            caption={"ExploreBooks"}
            project={"ExploreBooks"}
            num={1}
          />
        </div>
        <div className="mx-auto pl-36 md:m-0 md:pt-32">
          <Cards
            img_src={"E-Trends_logo.png"}
            caption={"E-Trends"}
            project={"E-Trends"}
            num={2}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 md:pt-14">
        <div className="mx-auto pl-36 md:m-0 md:pl-72">
          <Cards
            img_src={"portfolio_logo.png"}
            caption={"This Site"}
            project={"Portfolio"}
            num={4}
          />
        </div>
        <div className="mx-auto pl-36  md:pr-32">
          <Cards
            img_src={"Pomodoro_logo.png"}
            caption={"Pomodoro"}
            project={"Pomodoro"}
            num={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
