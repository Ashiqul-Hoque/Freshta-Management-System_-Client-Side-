import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useAllProducts from "../../hooks/Hooks";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [allProducts, setAllProducts] = useAllProducts();
  const navigate = useNavigate();

  let vegetables = allProducts.filter((pd) => pd.category == "Vegetable");
  let fruits = allProducts.filter((pd) => pd.category == "Fruit");
  let meat = allProducts.filter((pd) => pd.category == "Meat");
  let fish = allProducts.filter((pd) => pd.category == "Fish");

  const data = [
    {
      month: "January",
      target: 100000,
      sells: 75000,
    },
    {
      month: "february",
      target: 120000,
      sells: 150000,
    },
    {
      month: "March",
      target: 200000,
      sells: 210000,
    },
    {
      month: "April",
      target: 300000,
      sells: 240000,
    },
    {
      month: "May",
      target: 375000,
      sells: 450000,
    },
    {
      month: "June",
      target: 500000,
      sells: 420000,
    },
  ];

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
      <div>
        <div>
          <h3 className="text-center text-primary">Sells Target Vs Sells </h3>
          <h3 className="mt-1 text-center text-primary">(Last 6 months) </h3>
          <div className="d-flex justify-content-center">
            <AreaChart
              width={800}
              height={410}
              data={data}
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
      </div>
      <div className="review-heading">
        <h2 className="text-center my-5">Popular Products</h2>
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
