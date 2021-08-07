import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setShowSpinner(true);
    fetch("http://localhost:8000/registration", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.results === "Registration Successfully Completed") {
          setShowSpinner(false);
          history.push("/sign-in");
        } else {
          setShowSpinner(false);
          setError(data.results);
        }
      });
  };

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
          {error ? (
            <div
              className="toast align-items-center text-white bg-primary border-0"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="d-flex">
                <div className="toast-body">
                  Hello, world! This is a toast message.
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white me-2 m-auto"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          ) : (
            ""
          )}
          <h1 className="fw-bold text my-4">Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="px-md-5">
          <label className="form-label fs-14" htmlFor="firstName">
            Name
          </label>
          <input
            autoComplete="off"
            className="form-control input-background py-2"
            id="username"
            type="text"
            defaultValue=""
            placeholder="Name"
            {...register("username", { required: true })}
          />
          {errors.firstName && (
            <span role="alert" className="text-danger">
              {" "}
              First Name Required{" "}
            </span>
          )}
          <div className="mb-2">
            <label className="form-label fs-14" htmlFor="email">
              Email
            </label>
            <input
              autoComplete="off"
              className="form-control input-background py-2"
              type="email"
              id="email"
              defaultValue=""
              placeholder="@mail.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span role="alert" className="text-danger">
                {" "}
                Email Required{" "}
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
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span role="alert" className="text-danger">
                {" "}
                Password Required{" "}
              </span>
            )}
          </div>
          <button className="btn btn-dark w-100 mt-2" type="submit">
            Sign Up
          </button>
        </form>

        <small className="text-center d-block mt-1">
          <strong>
            Already have an account?{" "}
            <Link to="/sign-in" className="text-primary">
              Sign In
            </Link>{" "}
          </strong>
        </small>
      </div>
    </div>
  );
};

export default Signup;
