import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Desciption from "./Desciption";
import VideoSection from "./VideoSection";
import CheckList from "./CheckList";
import Trainer from "./Trainer";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Desciption />
      <VideoSection />
      <CheckList />
      <Trainer/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default HomePage;
