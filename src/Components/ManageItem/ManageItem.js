import React from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Home/Product/Product";
import useAllProducts from "../hooks/Hooks";
import "./ManageItem.css";

const ManageItem = () => {
  const [allProducts, setAllProducts] = useAllProducts();
  const navigate = useNavigate();

  return (
    <div>
      <div className="review-heading">
        <h2 className="text-center my-4">All Products</h2>
      </div>
      <div className="card-container px-5 my-5">
        {allProducts.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
      <div className="mb-5">
        <button
          className="btn btn-primary d-block mx-auto px-5"
          onClick={() => navigate("/manageInventories")}
        >
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default ManageItem;
