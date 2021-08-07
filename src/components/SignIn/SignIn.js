import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const SignIn = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setShowSpinner(true);
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setShowSpinner(false);
        setLoggedUser(data[0]);
        history.push('/');
      });
  };

  console.log(loggedUser);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container col-12 col-md-8 col-lg-6">
        <div className="text-center">
          {showSpinner ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            ""
          )}
          <h1 className="fw-bold my-4">Sign In</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-3 px-md-5 mx-md-5"
        >
          <div className="my-2">
            <label className="form-label fs-14" htmlFor="email">
              Email
            </label>
            <input
              autoComplete="off"
              className="form-control input-background py-2"
              type="email"
              id="email"
              placeholder="@mail.com"
              defaultValue=""
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span role="alert" className="text-danger">
                {" "}
                Email required{" "}
              </span>
            )}
          </div>

          <div className="mb-2">
            <label className="form-label fs-14" htmlFor="password">
              Password
            </label>
            <input
              autoComplete="off"
              className="form-control input-background py-2"
              type="password"
              id="password"
              defaultValue=""
              placeholder="Password"
              {...register("password", { required: true }, { min: 8 })}
            />
            {errors.password && (
              <span role="alert" className="text-danger">
                {" "}
                Password required & must contain at least 8 character{" "}
              </span>
            )}
          </div>

          <small
            style={{ cursor: "pointer" }}
            className="text-primary fs-6 d-block text-end"
          >
            Forget password
          </small>

          {errors.exampleRequired && <span>This field is required</span>}
          <button className="btn btn-dark w-100 mt-3" type="submit">
            Sign In
          </button>

          <small className="text-center d-block mt-1">
            <strong>
              Already have an account?{" "}
              <Link to="/sign-up" className="text-primary">
                Sign Up
              </Link>{" "}
            </strong>
          </small>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
