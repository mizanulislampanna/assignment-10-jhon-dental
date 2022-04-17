import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-50 mx-auto mt-5 p-5 border border-primary rounded"
      >
        <h2 className="text-primary text-center mb-3 fw-bold">Please Login</h2>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className=" my-2">
          <p>
            New At Jhon Dental ?
            <Link
              to={"/register"}
              className="text-primary ms-3 text-decoration-none"
            >
              Register Now !
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="btn btn-primary px-5 mt-3 mx-auto d-block"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
