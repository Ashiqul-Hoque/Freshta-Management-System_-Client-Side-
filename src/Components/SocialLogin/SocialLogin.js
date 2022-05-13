import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let errorElement;

  let from = location.state?.from?.pathname || "/";

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center mt-2">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-success w-50 d-block mx-auto mt-2 mb-3"
        >
          <img
            style={{ width: "30px" }}
            src={"https://i.ibb.co/1zMrpYg/google.png"}
            alt=""
          />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
