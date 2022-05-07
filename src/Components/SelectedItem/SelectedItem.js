import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectedItem.css";

const SelectedItem = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>selected</h1>
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
