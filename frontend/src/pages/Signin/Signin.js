import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  signin,
  authenticate,
} from "../../components/navbar/authHelper/Helper";
import Navbar from "../../components/navbar/Navbar";

const Signin = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const navigate = useNavigate();

  const { username, password, error, loading, didRedirect } = values;
  // const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    await signin({ username, password }).then((data) => {
      console.log(data);
      if (data.access) {
        authenticate(data.access, () => {
          alert("Login Successful");
          navigate("/");
        });
      } else {
        alert("Invalid Credentials");
      }
    });
    // .catch(console.log("signin request failed"));
  };

  const signInForm = () => {
    return (
      <>
        <Navbar />
        <div class="bg-grey-lighter min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto pt-40 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 class="mb-8 text-3xl text-center">Sign In</h1>
              <input
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="username"
                onChange={handleChange("username")}
                type="text"
                placeholder="Username"
                value={username}
              />
              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={handleChange("password")}
                value={password}
              />

              <button
                onClick={onSubmit}
                type="submit"
                class="w-full text-center bg-cyan-500 py-3 rounded   text-white hover:bg-green-dark focus:outline-none my-1"
              >
                SignIn
              </button>
            </div>
            <div class="text-grey-dark mt-6">
              Dont have an account?{" "}
              <Link to="/signup"
                class="no-underline border-b border-blue text-blue"
              >
                SignUp
              </Link>
              .
            </div>
          </div>
        </div>
      </>
    );
  };

  return <div>{signInForm()}</div>;
};

export default Signin;
