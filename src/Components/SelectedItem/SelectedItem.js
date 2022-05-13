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
    const url = `https://cryptic-hollows-45399.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleUpdate = (id) => {
    const previousQuantity = parseInt(product.quantity);
    const quantity = previousQuantity - 1;
    const updatedQuantity = quantity;
    console.log(updatedQuantity);

    // const url = `https://cryptic-hollows-45399.herokuapp.com/products/${id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ updatedQuantity }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setAllProducts(data);
    //   });
  };

  const handleRestock = (e, id) => {
    e.preventDefault();
    const restockAmount = parseInt(e.target.amount.value);
    console.log(restockAmount);

    const previousQuantity = parseInt(product.quantity);
    console.log(previousQuantity);
    const newQuantity = previousQuantity + restockAmount;
    console.log(newQuantity);

    // const url = `https://cryptic-hollows-45399.herokuapp.com/products/${id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ newQuantity }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setAllProducts(data);
    //   });
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
            <button
              className="btn btn-primary d-block mx-auto px-5 mt-4"
              onClick={() => handleUpdate(id)}
            >
              Delivered
            </button>

            <form
              onSubmit={handleRestock}
              className="form-inline my-4 d-flex align-items-center"
            >
              <div className="form-group d-flex align-items-center">
                <label for="exampleInputEmail1">Restock</label>
                <input
                  type="number"
                  className="form-control ms-3"
                  placeholder="Amount"
                  name="amount"
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
