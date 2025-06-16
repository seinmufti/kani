import React from "react";
import { Hero } from "../sections/Hero";
import Navbar from "../components/Navbar";
import MyMission from "../sections/MyMission";
import BeforeandAfters from "../sections/BeforeandAfters";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <MyMission />
        <BeforeandAfters />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
