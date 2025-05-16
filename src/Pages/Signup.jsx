import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    Username: "",
    Password: "",
  });

  const { Signup } = useAuth();
  const navigator = useNavigate();

  const submitHandler = async (ev) => {
    ev.preventDefault();

    try {
      const userData = await Signup(
        formData.FirstName,
        formData.LastName,
        formData.Email,
        formData.Username,
        formData.Password,
        formData.PhoneNumber
      );

      navigator("/");
      toast.success(`Welcome ${userData.User.username}`, { theme: "colored" });
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data || "Login failed!", {
        theme: "colored",
      });
    }
  };

  return (
    <div className="auth-container flex items-center justify-center p-4">
      <div className="form-container w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <form onSubmit={submitHandler} className="space-y-4">
          <h3 className="text-2xl font-bold text-center text-secondary mb-6">
            Create New Account
          </h3>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="signupFirst"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your fist"
              onChange={(ev) =>
                setFormData({ ...formData, FirstName: ev.target.value })
              }
            />
            <p
              id="fullNameError"
              className="text-red-500 text-xs italic hidden"
            >
              Please enter your name
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="signupLast"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Enter your last"
              required
              onChange={(ev) =>
                setFormData({ ...formData, LastName: ev.target.value })
              }
            />
            <span id="signupEmailError" className="text-red-500 text-xs hidden">
              Please enter a valid email address
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="signupEmail"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Enter your email"
              onChange={(ev) =>
                setFormData({ ...formData, Email: ev.target.value })
              }
            />
            <span id="signupEmailError" className="text-red-500 text-xs hidden">
              Please enter a valid email address
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              id="signupNumber"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Enter your phone"
              required
              onChange={(ev) =>
                setFormData({ ...formData, PhoneNumber: ev.target.value })
              }
            />
            <span id="signupEmailError" className="text-red-500 text-xs hidden">
              Please enter a valid phonenumber
            </span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Name
            </label>
            <input
              type="text"
              id="signupUser"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Enter your user"
              required
              onChange={(ev) =>
                setFormData({ ...formData, Username: ev.target.value })
              }
            />
            <span id="signupEmailError" className="text-red-500 text-xs hidden">
              Please enter a valid username
            </span>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="signupPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
              placeholder="Create a password"
              required
              minLength={8}
              onChange={(ev) =>
                setFormData({ ...formData, Password: ev.target.value })
              }
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
              type="button"
            >
              {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </button>
            <span
              id="signupPasswordError"
              className="text-red-500 text-xs hidden"
            >
              Password must be at least 6 characters
            </span>
          </div>
          <button
            id="signupBtn"
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            type="submit"
          >
            Sign Up
          </button>
          <p className="text-center text-sm">
            Already have an account?
            <Link
              to="/signin"
              id="showLogin"
              className="text-primary font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
