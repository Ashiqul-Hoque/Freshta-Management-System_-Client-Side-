import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAllProducts from "../hooks/Hooks";
import "./SelectedItem.css";

const SelectedItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [allProducts, setAllProducts] = useAllProducts();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleUpdate = (id) => {
    const previousQuantity = parseInt(product.quantity);
    const quantity = previousQuantity - 1;
    const updatedQuantity = quantity;
    console.log(updatedQuantity);

    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ updatedQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data);
      });
  };

  return (
    <div>
      <div>
        <h5 className="card-title text-center">{product.name}</h5>
        <div className="card-detail">
          <div className="d-block my-auto">
            <img src={product.img} className="card-img-top" alt="" />
          </div>
          <div className="card-body ps-4">
            <p className="mb-1">
              Stock Quantity: {product.quantity} {product.unit}
            </p>
            <p className="mb-1">
              Price: Tk. {product.price}/ {product.unit}
            </p>
            <p className="mb-1">Supplier : {product.supplier}</p>
            <button
              className="btn btn-primary d-block mx-auto px-5"
              onClick={() => handleUpdate(id)}
            >
              Delivered
            </button>
            <form className="form-inline mt-5 d-flex align-items-center">
              <div className="form-group mx-sm-3 mb-2 d-flex align-items-center">
                <label for="inputPassword2" className="sr-only me-4">
                  Restock
                </label>
                <input
                  type="number"
                  value="quantity"
                  className="form-control"
                  id="inputAmount"
                  placeholder="Amount"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
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
