import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const random_char = "abcdefghijklmnopqrstuvwxyz";

function Hero() {
  const ref = useRef(null);
  let interval = null;
  let delay = null;
  const [currentIndex, setcurrentIndex] = useState(0);
  const list = ["websites", "things"];

  const [selectedTile, setSelectedTile] = useState(null);
  const matrix =[31,61,28,34,46,40,52,58,64,70,75,21]

  const handleTileClick = (index) => {
    setSelectedTile(index);
    console.log(index)

    const startTime = performance.now();
    setTimeout(() => {
      const endTime = performance.now();
      const elapsedTime = endTime - startTime;

      // Check if the timeout completed after the desired duration
      if (elapsedTime >= 2000) {
        setSelectedTile(null);
      }
    }, 2000);
  };
  useEffect(() => {
    const changeText = () => {
      let iteration = 0;
      const targetElement = ref.current;

      interval = setInterval(() => {
        targetElement.innerText = list[currentIndex]
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return list[currentIndex][index];
            }
            return random_char[Math.floor(Math.random() * random_char.length)];
          })
          .join("");

        if (iteration >= list[currentIndex].length) {
          clearInterval(interval);
          delay = setTimeout(() => {
            setcurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
          }, 2000);
        }
        iteration += 1 / 6;
      }, 30);
    };

    changeText();
    const intervalId = setInterval(() => {
      changeText;
    }, 5000);
    return () => {
      clearInterval(intervalId);
      clearTimeout(delay);
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="bg-[#100e17] min-h-[100vh] ">
      <div className="mx-auto text-text flex justify-left items-center min-h-[100vh]">
        <div
          className={`md:grid md:grid-rows-6 grid-flow-col h-screen w-screen hidden`}
        >
          {[...Array(102)].map((_, index) => (
            <motion.div
              initial={{ background: "black" }}
              whileHover={{
                background: [
                  `rgba(0, 0, 0, 1)`, // Transparent background
                  `rgba(89, 24, 223, 0.3)`, // Low opacity
                  `rgba(89, 24, 223, 0.5)`, // Semi-opaque
                  `rgba(89, 24, 223, 1)`, // Fully opaque hover color
                ],
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              animate={{
                background:
                  selectedTile !== null
                    ? !matrix.includes(index)
                      ? "black"
                      : [
                          `rgba(0, 0, 0, 1)`, // Transparent background
                          `rgba(89, 24, 223, 0.3)`, // Low opacity
                          `rgba(89, 24, 223, 0.5)`, // Semi-opaque
                          `rgba(0, 0, 0, 1)`, // Transparent background
                        ]
                    : "black",
              }}
              onClick={() => handleTileClick(index)}
              transition={
                selectedTile == null
                  ? { duration: 1, delay: 0.5, ease: "easeIn" }
                  : {
                      duration: 1,
                      delay: 0.001 * index,
                      ease: "easeInOut",
                    }
              }
              key={index}
              className="min-w-1 border-[#090f1a] border"
            ></motion.div>
          ))}
        </div>
        <div className="absolute left-[20%] backdrop-brightness-110">
          <div className=" mx-auto text-2xl md:text-4xl lg:text-5xl">
            <Reveal y={75} background={"#5918df"}>
              <span className="text-lg text-secondarytext">Start /&gt;</span>
            </Reveal>

            <Reveal y={75} background={"#5918df"}>
              <span className="leading-normal font-bold text-wrap">
                Hi, my name is{" "}
                <span className="text-primary">Earlvin Eustacio</span> <br /> i{" "}
                <i className="serif">design</i> and{" "}
                <b className="mono">develop</b> <span ref={ref}></span>
              </span>
            </Reveal>
            <br />
            <Reveal y={75} background={"#5918df"}>
              <span className="text-xl text-secondarytext">
                Let me show You...
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
