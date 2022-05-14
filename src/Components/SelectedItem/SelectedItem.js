import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAllProducts from "../hooks/Hooks";
import "./SelectedItem.css";

const SelectedItem = () => {
  const navigate = useNavigate();
  const [control, setControl] = useState(true);
  const { id } = useParams();

  const [allProducts] = useAllProducts();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://cryptic-hollows-45399.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id, control]);

  const handleDeliver = () => {
    const previousQuantity = product.quantity;
    const newQuantity = previousQuantity - 1;
    console.log(newQuantity);

    const url = `https://cryptic-hollows-45399.herokuapp.com/products/${id}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount == 1) {
          setControl(!control);
        }
        const updatedProduct = allProducts.filter(
          (product) => product._id == id
        );
        console.log(updatedProduct);
        setProduct(updatedProduct);
      });
  };

  const handleRestock = (event) => {
    console.log("clicked");
    event.preventDefault();

    const restockAmount = parseInt(event.target.amount.value);
    console.log(restockAmount, typeof restockAmount);

    const previousQuantity = product.quantity;
    console.log(previousQuantity, typeof previousQuantity);

    const newQuantity = previousQuantity + restockAmount;
    console.log(newQuantity, typeof newQuantity);

    const url = `https://cryptic-hollows-45399.herokuapp.com/products/${id}`;
    // console.log(url);
    console.log(JSON.stringify({ newQuantity }));

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount == 1) {
          setControl(!control);
        }
        const updatedProduct = allProducts.filter(
          (product) => product._id == id
        );
        console.log(updatedProduct);
        setProduct(updatedProduct);
      });
  };

  return (
    <div className="my-4">
      <div>
        <h4 className="card-title text-center">{product.name}</h4>
        <div className="card-detail mx-auto">
          <div className="d-block my-auto">
            <img src={product.img} className="card-img-top" alt="" />
          </div>
          <div className="card-body">
            <p className="mb-1">
              Stock Quantity: {product.quantity} {product.unit}
            </p>
            <p className="mb-1">
              Price: Tk. {product.price}/ {product.unit}
            </p>
            <p className="mb-1">Supplier : {product.supplier}</p>
            <p className="mb-1">Product ID : {product._id}</p>
            <button
              className="btn btn-primary d-block mx-auto px-5 mt-4"
              onClick={handleDeliver}
            >
              Delivered
            </button>

            <form
              onSubmit={handleRestock}
              className="form-inline my-4 d-flex align-items-center"
            >
              <div className="form-group d-flex align-items-center">
                <label htmlFor="exampleInputEmail1">Restock</label>
                <input
                  type="number"
                  className="form-control ms-3"
                  placeholder="Amount"
                  name="amount"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary ms-3">
                Confirm Restock
              </button>
            </form>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary d-block mx-auto px-5"
        onClick={() => navigate("/manageInventories")}
      >
        Manage Inventories
      </button>
    </div>
  );
};

export default SelectedItem;
