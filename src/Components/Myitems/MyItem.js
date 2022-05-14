import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
import useAllProducts from "../hooks/Hooks";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./MyItem.css";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [allProducts, setAllProducts] = useAllProducts();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const product = allProducts.filter((pd) => pd.userEmail === user.email);
  console.log(product);

  const handleDelete = (id) => {
    console.log("clicked", id);
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://cryptic-hollows-45399.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = allProducts.filter((product) => product._id !== id);
          console.log(remaining);
          setAllProducts(remaining);
        });
    }
  };

  return (
    <div>
      <h2 className="text-center my-4 text-primary">My Added Items</h2>
      <div>
        {loading ? (
          <div className="py-5 my-5">
            <HashLoader
              color={"#123abc"}
              loading={loading}
              css={override}
              size={50}
            />
          </div>
        ) : (
          <div className="card-container px-5 my-4">
            {product.map((pd) => (
              <SingleProduct
                product={pd}
                key={pd._id}
                handleDelete={handleDelete}
              ></SingleProduct>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyItem;
