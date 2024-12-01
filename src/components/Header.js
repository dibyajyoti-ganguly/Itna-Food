import { useState } from "react";
import Logo from "../images/Group 18116.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ({ updateType, nval, updateVal }) => {
  const [click, setClick] = useState("Login");
  const onlineStatus = useOnlineStatus();
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
        <button className="search-btn" onClick={() => updateVal(!nval)}>
          S
        </button>
      </div>
      <div className="nav-items">
        <ul>
          <li>{onlineStatus ? "Online🟢" : "Offline⭕"}</li>
          <li>
            <Link
              to="/"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Grocery
            </Link>
          </li>
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
