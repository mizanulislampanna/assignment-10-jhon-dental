import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const ProccedCheckout = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-primary fw-bold text-center mt-5">Submit Form</h2>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          readOnly
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={user?.email}
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Address</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Address"
        />
      </div>
      <Link to={"/complete"}>
        <button
          type="submit"
          class="btn btn-primary mt-3 mx-auto d-block fw-bold"
        >
          Submit
        </button>
      </Link>
    </div>
  );
};

export default ProccedCheckout;
