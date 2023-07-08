import React from "react";
import Welcome from "../components/Welcome";
import Information from "../components/Information";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div className="flex-col justify-center">
      <Welcome />
      <Information />
      <Trending />
    </div>
  );
};

export default Home;
