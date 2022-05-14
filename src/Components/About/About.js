import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container about-section my-4">
      <div className="d-flex flex-column justify-content-center">
        <div className="text-center text-success">
          <h1>Freshta</h1>
        </div>
        <div>
          <img
            className="w-100"
            src={"https://i.ibb.co/khQfDcC/about-pic.png"}
            alt=""
          />
        </div>
      </div>
      <div className="info-text">
        <h4 className="text-primary">About Us</h4>
        <p>
          Freshta is an online shop available in most vibrant cities in
          Bangladesh. We believe time is valuable to our fellow city residents,
          and that they should not have to waste hours in traffic, brave harsh
          weather and wait in line just to buy necessities . This is why we
          deliver every day needs to our customers’ door-steps across
          Bangladesh.
          <p>
            Freshta is a work in progress, and we hope to get better over time.
            We are firm believers in using technology and education to improve
            Bangladesh, and we will continue to invest all our effort in pushing
            the boundaries of technology.
            <br></br>
            If you have ideas on how we can improve, we would love to hear from
            you. <strong>Please do email us at: </strong>
            <span className="text-primary">info@freshta.com.</span>
          </p>
        </p>
        <h4 className="text-primary">Our Team</h4>
        <p>
          For us, there's nothing better than tasting something really good at
          the peak of freshness. Our skilled merchants search all over the
          country for the very best, and make sure it gets to you at its prime,
          so we can share that enjoyment of great fresh food for you. It's a
          passion shared by everyone we work with, from the people who grow,
          raise, and make what's in your order to the team members who prepare
          and deliver it to you.
        </p>
      </div>
    </div>
  );
};

export default About;
