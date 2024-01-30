import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop.jsx";
import Reveal from "../Components/Reveal.jsx";
import { Images } from "../utils/utils.js";

const project_list = {
  ExploreBooks: {
    id: "1",
    source: [
      Images.explore_books1,
      Images.explore_books2,
      Images.explore_books3,
      Images.explore_books4,
      Images.explore_books5,
    ],
    info: "Developed as a project to hone full-stack development skills, this application integrates Node.js, Express, Next.js, to create a feature-rich experience for book enthusiasts. The primary goal of ExploreBooks is to allow users to add, delete, and edit books with PDF attachments, while also offering public access for anyone to view and download PDFs.",
    tech: "Next.js, Reactjs, Tailwindcss, Nodejs, Express, Mongodb, Firebase",
    url: "https://explorebooks.vercel.app/",
  },
  pde: {
    id: "2",
    source: [Images.pde1, Images.pde2, Images.pde3, Images.pde4, Images.pde5],
    info: "Price Data Exchange (PDE) is a web application designed to provide historical data on fiat currencies, cryptocurrencies, and stocks, along with confidence indicators. It's built for practicing Laravel PHP and MySQL.",
    tech: "Laravel, PHP, MySql, DaisyUi, Tailwindcss",
    url: "/",
  },
  "E-Trends": {
    id: "3",
    source: [
      Images.e_trends1,
      Images.e_trends2,
      Images.e_trends3,
      Images.e_trends4,
      Images.e_trends5,
    ],
    info: "Created this website with the intention of learning and exploring various technologies. My primary focus has been on Vite, React, and Tailwind CSS.",
    tech: "Vite, React, and Tailwind CSS",
    url: "https://e-trends.vercel.app/",
  },
  Portfolio: {
    id: "4",
    source: [Images.Portfolio1, Images.Portfolio2],
    info: "Created to showcase and practice web development skills.",
    tech: "React, Vite, Tailwindcss, Framer Motion",
    url: "/",
  },
  Pomodoro: {
    id: "5",
    source: [
      Images.Pomodoro1,
      Images.Pomodoro2,
      Images.Pomodoro3,
      Images.Pomodoro4,
      Images.Pomodoro5,
    ],
    info: "This is a simple web application made to practice the fundamentals of HTML/CSS/JS. The Pomodoro Technique is a time management method that uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks.",
    tech: "HTML, CSS, JS",
    url: "https://eearlll.github.io/Pomodoro/",
  },
};

const Project = () => {
  const { id } = useParams();
  const [srcIndex, setsrcIndex] = useState(0);

  useEffect(() => {
    console.log(srcIndex);
  }, [srcIndex]);

  return (
    <>
      <ScrollToTop />
      {/* container */}
      <Reveal background={"#5918df"} x={75}>
        <div className="flex md:flex-row flex-col">
          {/* sidebar */}

          <div className="p-11 min-w-[30%] bg-bg2 md:sticky top-0 h-screen md:w-[30%] w-full flex flex-col">
            <nav className="flex justify-between text-text pb-12">
              <div className="pointer_event">
                <Link to={"/"}>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                    fill="#ffffff"
                    width={45}
                    height={45}
                    className="hover:scale-110 duration-300 ease-in-out pointer_event"
                  >
                    <g
                      id="SVGRepo_bgCarrier"
                      stroke-width="0"
                      className="pointer_event"
                    ></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="pointer_event"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <circle
                        fill="#5918df"
                        cx="256"
                        cy="256"
                        r="256"
                        className="pointer_event"
                      ></circle>
                      <g>
                        <polygon
                          fill="#f9f9f9"
                          className="pointer_event"
                          points="213.2,332.464 110.432,256 213.2,179.52 222.768,192.368 137.248,256 222.768,319.616 "
                        ></polygon>
                        <rect
                          x="123.84"
                          y="248"
                          fill="#f9f9f9"
                          width="277.696"
                          height="16"
                          className="pointer_event"
                        ></rect>
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                {/* left arrow */}
                <div
                  className="pointer_event"
                  onClick={() =>
                    setsrcIndex((prevIndex) =>
                      prevIndex - 1 < 0
                        ? project_list[id].source.length - 1
                        : prevIndex - 1
                    )
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    className="pointer_event"
                  >
                    <g
                      id="SVGRepo_bgCarrier"
                      stroke-width="0"
                      className="pointer_event"
                    ></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="pointer_event"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M15 5L9 12L15 19"
                        stroke="#5918df"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="pointer_event"
                      ></path>
                    </g>
                  </svg>
                </div>
                {/* middle */}
                <h1 className="text-secondarytext text-2xl">{srcIndex + 1}</h1>
                {/* right arrow */}
                <div
                  className="pointer_event"
                  onClick={() =>
                    setsrcIndex((prevIndex) =>
                      prevIndex + 1 > project_list[id].source.length - 1
                        ? 0
                        : prevIndex + 1
                    )
                  }
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(180)"
                    width={25}
                    height={25}
                    className="pointer_event"
                  >
                    <g
                      id="SVGRepo_bgCarrier"
                      stroke-width="0"
                      className="pointer_event"
                    ></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="pointer_event"
                    ></g>
                    <g id="SVGRepo_iconCarrier" className="pointer_event">
                      <path
                        d="M15 5L9 12L15 19"
                        stroke="#5918df"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="pointer_event"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </nav>
            <section className="text-secondarytext pb-12">
              <h1 className=" text-3xl">Technology Used: </h1> <br />
              <ul>
                <li>{project_list[id].tech}</li>
              </ul>
            </section>
            <main className="text-text grow">
              <strong className="text-4xl">{id}</strong>
              <p className="text-wrap tracking-wide">
                <br />
                {project_list[id].info}
              </p>
              {project_list[id].url && (
                <div className="bg-primary p-4 rounded-full md:px-10 my-12  hover:scale-110 ease-out duration-300 hover:shadow-lg hover:shadow-primary/50 tracking-widest w-fit pointer_event">
                  <a
                    href={project_list[id].url}
                    target="_blank"
                    className="text-xl pointer_event"
                  >
                    Visit Site
                  </a>
                </div>
              )}
            </main>
            <footer className="flex">
              <div className=" bg-white h-[2px] my-4 rounded-full w-[90%]"></div>
              <h1 className="text-text pl-12 flex justify-center items-center">
                {project_list[id].id}
              </h1>
            </footer>
          </div>
          {/* main */}
          <div className="grow ">
            <img
              key={project_list[id].source[srcIndex]}
              src={`${project_list[id].source[srcIndex]}`}
              alt={id}
              className="scale-x-[1.4] scale-y-[1.3] translate-y-[15%] md:transform-none h-full"
            />
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default Project;
