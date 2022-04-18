import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation;
  const from = location.state?.from?.pathname || "/";

  let errorElement;

  if (loading || loading2) {
    return <Loading></Loading>;
  }

  if (error || error2) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message || error2?.message}
        </p>
      </div>
    );
  }
  if (user || user2) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div>
        <p className="text-center">{errorElement}</p>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-outline-primary mx-auto d-block"
        >
          <img
            className="me-2"
            src="https://i.ibb.co/Fwr9N8f/google-1.png"
            alt=""
          />
          Google Sign In
        </button>
      </div>
      <div className="my-2">
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-outline-primary mx-auto d-block mb-5"
        >
          <img
            className=""
            src="https://i.ibb.co/1YNqz65/download-1.png"
            alt=""
          />
          Github Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
