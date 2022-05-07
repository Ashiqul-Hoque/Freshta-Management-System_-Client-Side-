import React from "react";
import useAllProducts from "../hooks/Hooks";
import "./ManageItem.css";

const ManageItem = () => {
  const [allProducts, setAllProducts] = useAllProducts();
  return (
    <div>
      <h1>hello: {allProducts.length}</h1>
    </div>
  );
};

export default ManageItem;
