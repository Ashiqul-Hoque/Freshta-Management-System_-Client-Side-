import React from "react";
import { useNavigate } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { name, img, price, unit, quantity, supplier, _id } = props.product;
  const navigate = useNavigate();

  const navigateToProductDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div>
      <div className="card">
        <h5 className="card-title text-center">{name}</h5>
        <div className="product-info">
          <div className="d-block my-auto">
            <img src={img} className="card-img-top" alt="" />
          </div>
          <div className="card-body mb-2">
            <p className="mb-1">
              Stock: {quantity} {unit}
            </p>
            <p className="mb-1">
              Price: Tk. {price}/ {unit}
            </p>
            <p className="mb-1">Supplier : {supplier}</p>
            <p className="mb-1">Product ID : {_id}</p>
          </div>
        </div>

        <div className="d-flex justify-content-evenly">
          <button
            className="btn btn-success d-block px-4 mb-2"
            onClick={() => navigateToProductDetail(_id)}
          >
            Update
          </button>
          <button
            className="btn btn-danger d-block px-4 mb-2"
            onClick={() => props.handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
