import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../Context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const { isAuthenticated, Signout, Signin } = useAuth();
  const navigator = useNavigate();

  const submitHandler = async (ev) => {
    ev.preventDefault();
    if (isAuthenticated) Signout();

    try {
      const userData = await Signin(formData.email, formData.password);

      console.log(userData);

      navigator("/");
      toast.success(`Welcome ${userData.User.firstName}`, { theme: "colored" });
    } catch (error) {
      toast.error(error.response?.data || "Login failed!", {
        theme: "colored",
      });
    }
  };

  return (
    <div className="auth-container flex items-center justify-center p-4">
      <div className="text-center mt-2 hidden lg:flex"></div>
      <form
        onSubmit={submitHandler}
        className="form-container w-full max-w-md p-8 rounded-2xl shadow-2xl"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src="/assets/home/buyCarIcon.eeb2e066.svg"
              alt="logo"
              className="w-[50px]"
            />
            <h2 className="font-bold text-4xl text-center text-secondary">
              RENTO
            </h2>
          </Link>
        </div>
        <div id="loginForm" className="space-y-4">
          <h3 className="text-2xl font-bold text-center text-secondary mb-6">
            Login to Your Account
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Enter your email"
              required
              onChange={(ev) =>
                setFormData({ ...formData, email: ev.target.value })
              }
            />
            <span id="emailError" className="text-red-500 text-xs hidden">
              Please enter a valid email address
            </span>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary pr-10"
              placeholder="Enter your password"
              required
              onChange={(ev) =>
                setFormData({ ...formData, password: ev.target.value })
              }
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
            >
              {showPass ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </button>
            <span className="text-red-500 text-xs hidden">
              Password must be at least 6 characters
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Login
          </button>
          <p className="text-center text-sm">
            Don't have an account?
            <Link to="/signup" className="text-primary font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
