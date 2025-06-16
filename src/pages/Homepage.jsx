import React from "react";
import { Hero } from "../sections/Hero";
import Navbar from "../components/Navbar";
import MyMission from "../sections/MyMission";
import BeforeAndAfters from "../sections/BeforeAndAfters";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <MyMission />
        <BeforeAndAfters />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
