import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Line from "../Components/Line";
import Work from "../Components/Work";
import Console from "../Components/Console";
import About from "../Components/About";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="relative overflow-clip">
      <Header />
      <Line />
      <Hero />
      <Work />
      <Console />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
