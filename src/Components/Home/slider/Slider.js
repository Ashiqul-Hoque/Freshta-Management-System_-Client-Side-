import React from "react";
import veg from "../../../Images/veg.png";
import fruits from "../../../Images/fruits.png";
import meat from "../../../Images/meat.png";
import fish from "../../../Images/fish.png";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={veg} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block d-md-my-auto">
              <h5>
                "Organic food is the best for you, and I'm eating the best, a
                lot of fresh vegetables. I also keep myself hydrated. It's all
                made a big difference to my performance in the gym."
              </h5>
              <p>- Amir Khan</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={fruits} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                {" "}
                “Apples, grapes… any kind of fruit gives me the energy I need to
                get through my busy day.”
              </h5>
              <p>- Kristin Chenoweth</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={meat} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                "Everything tastes better with butter. Meat that has fat in it
                is tender in a certain way, flavorful in a certain way. It's
                hard to deny the flavor quotient there."
              </h5>
              <p>- Alice Waters</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={fish} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                "In the hands of an able cook, fish can become an inexhaustible
                source of perpetual delight."
              </h5>
              <p>- Jean-Anthelme Brillat-Savarin</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
