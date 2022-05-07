import React from "react";
import "./Home.css";
import Products from "./Products/Products";
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Products></Products>
    </div>
  );
};

export default Home;
