import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/home");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/home");
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
          <small className={agree ? "" : "text-danger"}>
            Agree With terms & condition
          </small>
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
      <button
        disabled={!agree}
        type="submit"
        class="btn btn-primary px-5 mt-3 mx-auto d-block"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
