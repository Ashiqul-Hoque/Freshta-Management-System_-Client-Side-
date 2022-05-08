import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./AddItem.css";

const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center mt-4">Add Item</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <label>Product Name</label>
        <input
          className="mb-3"
          type="text"
          {...register("name", { required: true })}
        />
        <label>Image Link</label>
        <input className="mb-3" {...register("img", { required: true })} />

        <label>category</label>
        <select className="mb-3" {...register("category")}>
          <option value="Vegetable">Vegetable</option>
          <option value="Fruit">Fruit</option>
          <option value="Meat">Meat</option>
          <option value="Fish">Fish</option>
        </select>

        <label>Price</label>
        <input
          className="mb-3"
          type="number"
          {...register("price", { required: true })}
        />

        <label>Unit</label>
        <select className="mb-3" {...register("unit")}>
          <option value="kg">kg</option>
          <option value="pcs">pcs</option>
        </select>

        <label>Quantity</label>
        <input
          className="mb-3"
          type="number"
          {...register("quantity", { required: true })}
        />

        <label>Supplier Name</label>
        <input
          className="mb-3"
          type="text"
          {...register("supplier", { required: true })}
        />
        <input
          className="w-25 d-block mx-auto my-3 btn btn-primary"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddItem;
