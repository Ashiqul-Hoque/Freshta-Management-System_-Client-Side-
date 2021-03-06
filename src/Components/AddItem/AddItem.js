import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "./AddItem.css";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const handleAddItem = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let img = event.target.image.value;
    let category = event.target.category.value;
    let price = event.target.price.value;
    let unit = event.target.unit.value;
    let quantity = parseInt(event.target.quantity.value);
    let supplier = event.target.supplier.value;
    let userEmail = user.email;

    const url = `https://cryptic-hollows-45399.herokuapp.com/product`;
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
        toast("Product successfully added");
      });
  };

  return (
    <div className="back-color pt-4 pb-5">
      <h2 className="text-center text-primary">Add Item</h2>
      <form
        className="form-container mx-auto text-white"
        onSubmit={handleAddItem}
      >
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Product Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Image Link</label>
          <input className="form-control" name="image" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputState">Category (Select one)</label>
          <select className="form-control" name="category" required>
            <option selected>Vegetable</option>
            <option>Fruit</option>
            <option>Meat</option>
            <option>Fish</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Price</label>
          <input type="number" className="form-control" name="price" required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputState">Unit (Select one)</label>
          <select className="form-control" name="unit" required>
            <option selected>Kg</option>
            <option>Pcs</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Quantity</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Supplier Name</label>
          <input className="form-control" name="supplier" required />
        </div>

        <button
          type="submit"
          className="w-50 d-block mx-auto mt-4 btn btn-primary"
        >
          Submit
        </button>
      </form>
      <ToastContainer autoClose={1000}></ToastContainer>
    </div>
  );
};

export default AddItem;
