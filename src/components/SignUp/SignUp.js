import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:8000/registration", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-6 mb-2">
        <div className="container ">
          <div className="text-center">
            <p className="fw-bold text-secondary mb-4">Sign Up</p>
          </div>
          <p className="beforeAfter text-center fs-15 mt-4">
            or do it via email
          </p>

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
              <Link href="/signin" className="text-primary">
                <a href="">Sign Up</a>
              </Link>{" "}
            </strong>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
