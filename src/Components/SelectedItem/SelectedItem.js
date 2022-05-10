import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SelectedItem.css";

const SelectedItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1>selected{product.name}</h1>
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
