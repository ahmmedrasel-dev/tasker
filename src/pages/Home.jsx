import React from "react";
import HeroSection from "../components/HeroSection";
import TaskContainer from "../components/TaskContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <body className="bg-[#191D26] font-[Inter] text-white">
        <Header />
        <HeroSection />
        <TaskContainer />
        <Footer />
      </body>
    </>
  );
};

export default Home;
