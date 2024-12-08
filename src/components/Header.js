import { useState } from "react";
import Logo from "../images/Group 18116.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ({ updateType, nval, updateVal }) => {
  const [click, setClick] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-around items-center mx-auto my-0 w-4/5 bg-neutral-100 shadow-md rounded-xl">
      <div className="logo-container">
        <img className="w-24 mt-3" src={Logo} alt="logo"></img>
      </div>
      <div className="bg-zinc-200 w-1/4 shadow-md rounded-lg h-12">
        <input
          type="text"
          className="bg-zinc-200 rounded-lg outline-none h-12 w-5/6"
          onChange={(event) => {
            updateType(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
        <button
          className="cursor-pointer h-12 w-1/6 rounded-lg outline-none text-slate-500 font-mono text-2xl font-bold"
          onClick={() => updateVal(!nval)}
        >
          S
        </button>
      </div>
      <div className="nav-items">
        <ul className="flex items-center px-0 py-4 list-none text-slate-500 font-mono text-lg font-bold">
          <li className="p-2 m-2">{onlineStatus ? "Online🟢" : "Offline⭕"}</li>
          <li className="p-2 m-2">
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
          <li className="p-2 m-2">
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
          <li className="p-2 m-2">
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
          <li className="p-2 m-2">
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
          <li className="p-2 m-2">Cart</li>
          <button
            className="p-2 m-2 cursor-pointer"
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
