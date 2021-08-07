import React from 'react';
import { useForm } from "react-hook-form";

const SignIn = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
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
              <button className="btn btn-primary w-100 mt-3" type="submit">
                Sign In
              </button>
            </form>
        </div>
    );
};

export default SignIn;