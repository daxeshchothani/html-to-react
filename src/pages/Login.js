import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const login = () => {
    localStorage.setItem("login", true);
    navigate("/")
  };

  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/")
    }
  });
  return (
    <div>
      <components />
      <h1>Login Page ..!</h1>

      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
