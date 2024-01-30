import {
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

const Reveal = ({ children, background, x, y, once, delay_num }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: y, x: x },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  const secondary_variant = {
    hidden: { left: 0 },
    visible: { left: "100%" },
  };

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    } else {
      mainControls.start("hidden");
      slideControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div className="relative w-fit overflow-clip" ref={ref}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        key={children}
        variants={secondary_variant}
        initial="hidden"
        animate={slideControls}
        exit={{ left: "100%" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: background,
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
