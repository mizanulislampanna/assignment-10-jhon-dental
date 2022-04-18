import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/home");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
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
          name="username"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="User Name"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          name="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          name="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required
        />
      </div>
      <div class="form-check mt-3">
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
        />
        <label class="form-check-label" for="exampleCheck1">
          <small>Agree With term & condition</small>
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
