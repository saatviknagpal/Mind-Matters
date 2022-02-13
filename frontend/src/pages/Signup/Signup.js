import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../components/navbar/authHelper/Helper";
import Navbar from "../../components/navbar/Navbar";

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    error: "",
    success: false,
  });
  const navigate = useNavigate();
  const { username, email, password, password2, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    await signup({ username, email, password, password2 }).then((data) => {
      console.log("here:" + data.email);
      if (data.email) {
        alert("Registration successful");
        navigate("/signin");
      } else {
        setValues({
          ...values,
          username: "",
          email: "",
          password: "",
          password2: "",
          error: "",
          success: true,
        });
        alert("User Already exist");
      }
    });
    // .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <>
        <Navbar />
        <div class="bg-grey-lighter min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto pt-16 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 class="mb-8 text-3xl text-center">Sign up</h1>
              <input
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                onChange={handleChange("username")}
                type="text"
                placeholder="Username"
                value={username}
              />

              <input
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                onChange={handleChange("email")}
                type="email"
                placeholder="Email"
                value={email}
              />

              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={handleChange("password")}
                value={password}
              />
              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
                onChange={handleChange("password2")}
                value={password2}
              />

              <button
                onClick={onSubmit}
                type="submit"
                class="w-full text-center bg-cyan-500 py-3 rounded   text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>

              <div class="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the{" "}
                <a
                  class="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  class="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div class="text-grey-dark mt-6">
              Already have an account?{" "}
              <Link to="/signin"
                class="no-underline border-b border-blue text-blue"
              >
                SignIn
              </Link>
              .
            </div>
          </div>
        </div>
      </>
    );
  };

  return signUpForm();
};

export default Signup;
