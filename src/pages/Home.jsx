import React from "react";
import Welcome from "../components/Welcome";
import Information from "../components/Information";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex-col justify-center">
      <Welcome />
      <Information />
      <Trending />
      
      <Footer position='relative' />
    </div>
  );
};

export default Home;
