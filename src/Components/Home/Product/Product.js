import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, unit, quantity, supplier, _id } = props.product;
  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className="card">
      <h5 className="card-title text-center">{name}</h5>
      <div className="card-info">
        <div className="d-block my-auto">
          <img src={img} className="card-img-top" alt="" />
        </div>
        <div className="card-body ms-4">
          <p>
            Stock: {quantity} {unit}
          </p>
          <p>
            Price: Tk. {price}/ {unit}
          </p>
          <p>Supplier: {supplier}</p>
        </div>
      </div>

      <button
        className="btn btn-primary d-block mx-auto px-5 mb-2"
        onClick={() => navigateToProductDetail(_id)}
      >
        Stock Update
      </button>
    </div>
  );
};

export default Product;
