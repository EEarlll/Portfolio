import React, { useEffect } from "react";

const BarrelRoll = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("roll-animation");
    return () => {
      body.classList.remove("roll-animation");
    };
  }, []);

  return <div className=""></div>;
};

export default BarrelRoll;
