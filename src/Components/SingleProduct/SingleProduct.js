import React from "react";
import useAllProducts from "../hooks/Hooks";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { name, img, price, unit, quantity, supplier, _id } = props.product;
  const [allProducts, setAllProducts] = useAllProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = allProducts.filter((product) => product._id !== id);
          setAllProducts(remaining);
        });
    }
  };

  return (
    <div>
      <div className="card">
        <h5 className="card-title text-center">{name}</h5>
        <div className="card-detail">
          <div className="d-block my-auto">
            <img src={img} className="card-img-top" alt="" />
          </div>
          <div className="card-body ps-4">
            <p className="mb-1">
              Stock: {quantity} {unit}
            </p>
            <p className="mb-1">
              Price: Tk. {price}/ {unit}
            </p>
            <p className="mb-1">Supplier : {supplier}</p>
          </div>
        </div>

        <div className="d-flex justify-content-evenly">
          <button
            className="btn btn-danger d-block px-4 mb-2 w-50"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
