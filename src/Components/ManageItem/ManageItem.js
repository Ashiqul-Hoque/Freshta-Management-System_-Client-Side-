import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
import useAllProducts from "../hooks/Hooks";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./ManageItem.css";

const ManageItem = () => {
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

  const [allProducts, setAllProducts] = useAllProducts();
  let vegetables = allProducts.filter((pd) => pd.category === "Vegetable");
  let fruits = allProducts.filter((pd) => pd.category === "Fruit");
  let meat = allProducts.filter((pd) => pd.category === "Meat");
  let fish = allProducts.filter((pd) => pd.category === "Fish");

  const navigate = useNavigate();
  const { productId } = useParams();

  const handleDelete = (id) => {
    console.log("clicked", id);
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://cryptic-hollows-45399.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = allProducts.filter((product) => product._id !== id);
          console.log(remaining);
          setAllProducts(remaining);
        });
    }
  };

  return (
    <div>
      <div className="review-heading">
        <h2 className="text-center my-4 text-primary">All Products</h2>
        <button
          className="btn btn-primary d-block mx-auto px-5"
          onClick={() => navigate("/additem")}
        >
          + Add New Item
        </button>
      </div>
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
            <div className="my-4">
              <h3 className="ms-5 text-primary">Vegetables</h3>
              <div className="card-container px-5 my-4">
                {vegetables.map((product) => (
                  <SingleProduct
                    product={product}
                    key={product._id}
                    handleDelete={handleDelete}
                  ></SingleProduct>
                ))}
              </div>
            </div>
            <div className="my-5">
              <h3 className="ms-5 text-primary">Fruits</h3>
              <div className="card-container px-5 my-4">
                {fruits.map((product) => (
                  <SingleProduct
                    product={product}
                    key={product._id}
                    handleDelete={handleDelete}
                  ></SingleProduct>
                ))}
              </div>
            </div>
            <div className="my-5">
              <h3 className="ms-5 text-primary">Meat</h3>
              <div className="card-container px-5 my-4">
                {meat.map((product) => (
                  <SingleProduct
                    product={product}
                    key={product._id}
                    handleDelete={handleDelete}
                  ></SingleProduct>
                ))}
              </div>
            </div>
            <div className="my-5">
              <h3 className="ms-5 text-primary">Fish</h3>
              <div className="card-container px-5 my-4">
                {fish.map((product) => (
                  <SingleProduct
                    product={product}
                    key={product._id}
                    handleDelete={handleDelete}
                  ></SingleProduct>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageItem;
