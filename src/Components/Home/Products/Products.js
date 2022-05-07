import React from "react";
import { useNavigate } from "react-router-dom";
import useAllProducts from "../../hooks/Hooks";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [allProducts, setAllProducts] = useAllProducts();
  const navigate = useNavigate();
  return (
    <div>
      <div className="review-heading">
        <h2 className="text-center my-5">Popular Products</h2>
      </div>
      <div className="card-container px-5 my-5">
        {allProducts.slice(0, 6).map((product) => (
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

export default Products;
