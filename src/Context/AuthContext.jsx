import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import config from "../config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [userData, setUserData] = useState(() => {
    const userData = {
      User: {},
      Token: "",
    };

    const token = localStorage.getItem("Token");
    if (token) {
      userData.Token = token;
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      setIsAuthenticated(true);
    }

    const user = localStorage.getItem("User");

    if (user) {
      userData.User = JSON.parse(user);
    }

    return userData;
  });

  useEffect(() => {
    if (userData) {
      localStorage.setItem("User", JSON.stringify(userData.User));
      localStorage.setItem("Token", userData.Token);
    } else {
      localStorage.removeItem("User");
      localStorage.removeItem("Token");
    }
  }, [userData]);

  /**
   *
   * @param {string} email
   * @param {string} password
   */
  const Signin = async (email, password) => {
    const res = await axios.post(config.API + "/account/login", {
      Email: email,
      Password: password,
    });
    var userData = {
      User: {
        id: res.data.user.id,
        firstName: res.data.user.firstName,
        lastName: res.data.user.lastName,
        username: res.data.user.userName,
        email: res.data.user.email,
      },
      Token: res.data.token,
    };
    setUserData(userData);

    setIsAuthenticated(true);

    axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;

    return userData;
  };

  /**
   * @param {string} username
   * @param {string} password
   *
   */
  const Signup = async (
    FirstName,
    LastName,
    Email,
    Username,
    Password,
    PhoneNumber
  ) => {
    const res = await axios.post(config.API + "/account/register", {
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      Username,
      Password,
    });

    var userData = {
      User: {
        id: res.data.user.id,
        firstName: res.data.user.firstName,
        lastName: res.data.user.lastName,
        username: res.data.user.userName,
        email: res.data.user.email,
      },
      Token: res.data.token,
    };

    setUserData(userData);

    setIsAuthenticated(true);

    axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;

    return userData;
  };

  const Signout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    delete axios.defaults.headers.common.Authorization;
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, Signin, Signup, Signout, userData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
