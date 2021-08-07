import React from 'react';
import { CgFacebook } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const name = firstName + ' ' + lastName;
    const email = data.email;
    const phone = data.phone;
    const password1 = data.password;
    const confirmPassword = data.confirmPassword;
  };

  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-md-6 mb-2">
        <div className="container ">
          <div className="text-center">
            <p className="fw-bold text-secondary mb-4">Sign up to Clever</p>
            <div className="p-3 d-inline icon-bg cursor-pointer">
              <FcGoogle size={24} />
            </div>
            <div className="p-3 d-inline ms-2 icon-bg cursor-pointer">
              <CgFacebook size={24} className="fb-icon-color" />
            </div>
          </div>
          <p className="beforeAfter text-center fs-15 mt-4">
            or do it via email
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="px-md-5">
            <div className="row">
              <div className="mb-1 col-12 col-md-6">
                <label className="form-label fs-14" htmlFor="firstName">
                  First Name
                </label>
                <input
                  autoComplete="off"
                  className="form-control input-background py-2"
                  id="firstName"
                  type="text"
                  defaultValue=""
                  placeholder="First Name"
                  {...register('firstName', { required: true })}
                />
                {errors.firstName && (
                  <span role="alert" className="text-danger">
                    {' '}
                    First Name Required{' '}
                  </span>
                )}
              </div>

              <div className="mb-2 col-12 col-md-6">
                <label className="form-label fs-14" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  autoComplete="off"
                  className="form-control input-background py-2"
                  type="text"
                  id="lastName"
                  defaultValue=""
                  placeholder="Last Name"
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && (
                  <span role="alert" className="text-danger">
                    {' '}
                    Last Name Required{' '}
                  </span>
                )}
              </div>
            </div>

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
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span role="alert" className="text-danger">
                  {' '}
                  Email Required{' '}
                </span>
              )}
            </div>

            <div className="mb-2">
              <label className="form-label fs-14" htmlFor="phone">
                Phone
              </label>
              <input
                autoComplete="off"
                className="form-control input-background py-2"
                id="phone"
                defaultValue=""
                placeholder="Phone"
                {...register('phone', { required: true })}
              />
              {errors.phone && (
                <span role="alert" className="text-danger">
                  {' '}
                  Phone Number Required{' '}
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
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span role="alert" className="text-danger">
                  {' '}
                  Password Required{' '}
                </span>
              )}
            </div>

            <div className="mb-2">
              <label className="form-label fs-14" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                autoComplete="off"
                className="form-control input-background py-2"
                type="password"
                id="confirmPassword"
                defaultValue=""
                placeholder="Confirm Password"
                {...register('confirmPassword', { required: true })}
              />
              {errors.confirmPassword && (
                <span role="alert" className="text-danger">
                  {' '}
                  Confirm Password Required{' '}
                </span>
              )}
            </div>

            <button className="btn btn-dark w-100 mt-2" type="submit">
              Sign Up
            </button>
          </form>

          <small className="text-center d-block mt-1">
            <strong>
              Already have an account?{' '}
              <Link href="/signin" className="text-primary">
                <a href="">Sign Up</a>
              </Link>{' '}
            </strong>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
