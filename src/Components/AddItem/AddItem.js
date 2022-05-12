import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./AddItem.css";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const handleAddItem = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const img = event.target.image.value;
    const category = event.target.category.value;
    const price = event.target.price.value;
    const unit = event.target.unit.value;
    const quantity = event.target.quantity.value;
    const supplier = event.target.supplier.value;
    const userEmail = user.email;
    // console.log(
    //   name,
    //   img,
    //   category,
    //   price,
    //   unit,
    //   quantity,
    //   supplier,
    //   userEmail
    // );
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        img,
        category,
        price,
        unit,
        quantity,
        supplier,
        userEmail,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      <h2 className="text-center mt-4">Add Item</h2>
      <form className="form-container mx-auto" onSubmit={handleAddItem}>
        <div className="form-group mb-3">
          <label for="exampleInputEmail1">Product Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label for="exampleInputPassword1">Image Link</label>
          <input className="form-control" name="image" required />
        </div>
        <div className="form-group mb-3">
          <label for="inputState">Category (Select one)</label>
          <select className="form-control" name="category" required>
            <option selected>Vegetable</option>
            <option>Fruit</option>
            <option>Meat</option>
            <option>Fish</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label for="exampleInputPassword1">Price</label>
          <input type="number" className="form-control" name="price" required />
        </div>
        <div className="form-group mb-3">
          <label for="inputState">Unit (Select one)</label>
          <select className="form-control" name="unit" required>
            <option selected>Kg</option>
            <option>Pcs</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label for="exampleInputPassword1">Quantity</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label for="exampleInputPassword1">Supplier Name</label>
          <input className="form-control" name="supplier" required />
        </div>

        <button
          type="submit"
          className="w-50 d-block mx-auto my-3 btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
