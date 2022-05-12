import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useAllProducts from "../../hooks/Hooks";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [allProducts] = useAllProducts();
  const navigate = useNavigate();

  const [graphOneData, setGraphOneData] = useState([]);
  const [graphTwoData, setGraphTwoData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/dataOne")
      .then((response) => response.json())
      .then((data) => setGraphOneData(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/dataTwo")
      .then((response) => response.json())
      .then((data) => setGraphTwoData(data));
  }, []);

  let vegetables = allProducts.filter((pd) => pd.category === "Vegetable");
  let fruits = allProducts.filter((pd) => pd.category === "Fruit");
  let meat = allProducts.filter((pd) => pd.category === "Meat");
  let fish = allProducts.filter((pd) => pd.category === "Fish");

  return (
    <div>
      <div className="my-5">
        <div>
          <h3 className="mt-4 text-center text-primary">Products Summary </h3>
        </div>
        <div className="summary-card text-white mt-4">
          <div className="home-card text-center py-4 bg-info">
            <h4>Vegetables</h4>
            <h5>Total Items: {vegetables.length}</h5>
          </div>
          <div className="home-card text-center py-4 bg-warning">
            <h4>Fruits</h4>
            <h5>Total Items: {fruits.length}</h5>
          </div>
          <div className="home-card text-center py-4 bg-primary">
            <h4>Fish</h4>
            <h5>Total Items: {fish.length}</h5>
          </div>
          <div className="home-card text-center py-4 bg-success">
            <h4>Meat</h4>
            <h5>Total Items: {meat.length}</h5>
          </div>
        </div>
      </div>
      <div className="graph-section py-5">
        <div className="mb-4">
          <h3 className="text-center text-primary">Sells Target Vs Sells </h3>
          <h3 className="mt-1 text-center text-primary">(Last 6 months) </h3>
          <div className="d-flex justify-content-center">
            <AreaChart
              width={400}
              height={350}
              data={graphOneData}
              margin={{
                top: 30,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="target"
                stroke="#9900FF"
                fill="#9850FF"
              />
              <Area
                type="monotone"
                dataKey="sells"
                stroke="#009999"
                fill="#009999"
              />
            </AreaChart>
          </div>
        </div>
        <div>
          <h4 className="text-center text-primary">Expenditure Vs Revenue </h4>
          <h4 className="mt-1 text-center text-primary">(Last 6 months) </h4>
          <div className="d-flex justify-content-center">
            <BarChart
              width={400}
              height={350}
              data={graphTwoData}
              margin={{
                top: 30,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis dataKey="" />
              <Tooltip />
              <Legend />
              <Bar dataKey="expenditure" fill="#3399FF" />
              <Bar dataKey="revenue" fill="#4DB6AC" />
            </BarChart>
          </div>
        </div>
      </div>
      <div className="review-heading">
        <h2 className="text-center my-4">Popular Products</h2>
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
