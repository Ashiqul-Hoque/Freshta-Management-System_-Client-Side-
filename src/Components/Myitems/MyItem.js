import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./MyItem.css";

const MyItem = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2 className="text-center my-4 text-primary">My Added Items</h2>
    </div>
  );
};

export default MyItem;
