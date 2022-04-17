import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 mx-auto mt-5 p-5 border border-primary rounded"
    >
      <h2 className="text-primary text-center mb-4 fw-bold">Register</h2>
      <div class="form-group">
        <label for="exampleInputEmail1">User Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="User Name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <div className=" my-2">
        <p>
          Already Have an Account ?
          <Link
            to={"/login"}
            className="text-primary ms-3 text-decoration-none"
          >
            Login Now !
          </Link>
        </p>
      </div>
      <button type="submit" class="btn btn-primary px-5 mt-3 mx-auto d-block">
        Register
      </button>
    </form>
  );
};

export default Register;
