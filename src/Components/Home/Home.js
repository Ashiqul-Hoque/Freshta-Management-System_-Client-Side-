import React, { useEffect, useState } from "react";
import "./Home.css";
import Products from "./Products/Products";
import Slider from "./slider/Slider";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
  `;
  return (
    <div>
      {loading ? (
        <div className="py-5 my-5">
          <HashLoader
            color={"#123abc"}
            loading={loading}
            css={override}
            size={50}
          />
        </div>
      ) : (
        <div>
          <Slider></Slider>
          <Products></Products>
        </div>
      )}
    </div>
  );
};

export default Home;
