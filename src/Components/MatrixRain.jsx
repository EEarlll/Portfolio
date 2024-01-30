import React, { useEffect, useRef } from "react";

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
      let columns;
      let fontSize;
      let drops;
  
      const initialize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        columns = Math.floor(canvas.width / fontSize);
        drops = [];
  
        for (let i = 0; i < columns; i++) {
          drops[i] = Math.floor(Math.random() * canvas.height);
        }
      };
  
      const drawMatrix = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        ctx.fillStyle = "#0F0"; // Green color for the characters
        ctx.font = `${fontSize}px monospace`;
  
        for (let i = 0; i < columns; i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
  
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
  
          drops[i]++;
        }
      };
  
      const animateMatrix = () => {
        drawMatrix();
        requestAnimationFrame(animateMatrix);
      };
  
      // Set initial values and start animation
      fontSize = 10;
      initialize();
      animateMatrix();
  
      // Handle window resize
      const handleResize = () => {
        initialize();
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return <canvas ref={canvasRef} />;
};

export default MatrixRain;
