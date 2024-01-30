import React, { useEffect, useRef, useState } from "react";

function Cursor() {
  // initialize x,y,ref
  const [cursorPos, setcursorPos] = useState({ x: 0, y: 0 });
  const [isPointerevent, setisPointerevent] = useState(false);
  const ref = useRef(null);

  // callback function to set x,y and animate the ref
  const updateCursorPosition = (e) => {
    const eventPointer = e.target.classList.contains("pointer_event");
    if (eventPointer) {
      setisPointerevent(true);
    } else {
      setisPointerevent(false);
    }

    setcursorPos({ x: e.clientX, y: e.clientY });
    ref.current.animate(
      {
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      },
      { duration: 377, fill: "forwards" }
    );
  };

  // mount on render add callback function
  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  // move the elements
  const cursorStyle = {
    position: "absolute",
    top: `${cursorPos.y}px`,
    left: `${cursorPos.x}px`,
    transform: isPointerevent
      ? "translate(-50%, -50%) scale(2)"
      : "translate(-50%, -50%)",
    backgroundColor: isPointerevent ? "rgba(255, 255, 255, 0.20)" : undefined,
    boxShadow: isPointerevent ? "0 4px 30px rgba(0, 0, 0, 0.1)" : undefined,
    backdropFilter: isPointerevent ? "blur(0.3px)" : undefined,
    transition: "transform 300ms ease-in, background-color 300ms ease-in",
  };
  const mouseCursorStyle = {
    position: "absolute",
    top: `${cursorPos.y}px`,
    left: `${cursorPos.x}px`,
    transform: "translate(-50%, -50%)",
  };

  return (
    // full screen with callback function
    <div
      className="hidden md:block fixed md:w-screen md:h-screen pointer-events-none z-50"
      onMouseMove={updateCursorPosition}
    >
      {/* cursor outer div */}
      <div className="cursor">
        {/* animated ring */}
        <div
          style={cursorStyle}
          ref={ref}
          className="cursor-element cursor-border"
        ></div>

        {/* Cursor dot */}
        <div style={mouseCursorStyle} className="cursor-element">
          <div className="cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}

export default Cursor;
