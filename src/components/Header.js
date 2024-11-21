import { useState } from "react";
import Logo from "../images/Group 18116.png";

const Header = ({ updateType, nval, updateVal}) => {
  const [click, setClick] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo"></img>
      </div>
      <div className="search">
        <input
          style={{
            fontSize: "18px",
            fontFamily:
              "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            fontWeight: "bold",
            color: "rgba(0, 0, 0, 0.6)",
          }}
          type="text"
          className="search-box"
          onChange={(event) => {
            updateType(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
        <button className="search-btn" onClick={()=>updateVal(!nval)}>S</button>
      </div>
      <div className="nav-items">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setClick(click === "Login" ? "Logout" : "Login");
            }}
          >
            {click}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
