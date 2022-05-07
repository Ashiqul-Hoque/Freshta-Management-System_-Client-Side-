import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="background text-center text-lg-start py-4">
      <div className="text-center p-3">
        <p className="text-center text-white">
          All rights reserved by
          <span className="text-dark">
            <strong className="text-dark mx-2">Freshta</strong>
          </span>
          &copy;2022.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
