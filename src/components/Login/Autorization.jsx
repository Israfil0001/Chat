import React from "react";
import "./style.css";
import Home from "../home/Home";
import { Link } from "react-router-dom";
function Autorization() {
  return (
    <div>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
    </div>
  )
}

export default Autorization
