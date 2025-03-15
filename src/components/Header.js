import { useState, useContext } from "react";
import Logo from "../images/Group 18116.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ({ updateType, nval, updateVal }) => {
  const [click, setClick] = useState("Login");
  const data = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-around items-center mx-auto my-0 w-2/3 bg-neutral-100 shadow-md rounded-xl">
      <div className="logo-container">
        <img className="w-24 mt-3" src={Logo} alt="logo"></img>
      </div>
      <div className="bg-zinc-200 w-72 shadow-md rounded-lg h-12 mb-1">
        <input
          type="text"
          className="bg-zinc-200 rounded-lg outline-none h-12 w-5/6 text-center text-slate-500 font-mono text-md font-bold"
          onChange={(event) => {
            updateType(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
        <button
          className="cursor-pointer h-12 w-1/6 rounded-lg outline-none text-slate-500 font-mono text-2xl font-bold hover:text-black"
          onClick={() => updateVal(1)}
        >
          S
        </button>
      </div>
      <div className="nav-items">
        <ul className="flex items-center px-0 py-4 list-none text-slate-500 font-mono text-xl font-bold">
          <li className="p-2 m-3 hover:text-black">
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
          <li className="p-2 m-3 hover:text-black">
            <Link
              to="/cart"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Cart({cartItems.length})
            </Link>
          </li>
          <button
            className="p-2 m-3 hover:text-black cursor-pointer"
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
