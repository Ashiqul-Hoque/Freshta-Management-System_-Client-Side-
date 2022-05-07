import React from "react";
import "./ErrorPage.css";
import img404 from "../../Images/img404.png";

const ErrorPage = () => {
  return (
    <div>
      <img className="errorImg" src={img404} alt="" />
    </div>
  );
};

export default ErrorPage;
