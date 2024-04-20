import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  });
  return (
    <div>
      
      <div>
        <Component />
        <h1>Login Page ..!</h1>

        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <button>Login</button>
      </div>
     
    </div>
  );
};

export default Protected;
