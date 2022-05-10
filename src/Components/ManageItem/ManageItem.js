import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAllProducts from "../hooks/Hooks";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./ManageItem.css";

const ManageItem = () => {
  const [allProducts, setAllProducts] = useAllProducts();
  const navigate = useNavigate();
  const { productId } = useParams();

  return (
    <div>
      <div className="review-heading">
        <h2 className="text-center my-4">All Products</h2>
        <button
          className="btn btn-primary d-block mx-auto px-5"
          onClick={() => navigate("/additem")}
        >
          + Add New Item
        </button>
      </div>
      <div className="card-container px-5 my-5">
        {allProducts.map((product) => (
          <SingleProduct product={product} key={product._id}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageItem;
