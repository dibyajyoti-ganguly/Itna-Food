import { Link } from "react-router-dom";
import Logo from "../images/Group 18116.png";
import Hamburger from "../images/hamburger.png";
import { useSelector } from "react-redux";
import { useState } from "react";

const Hamburgheader = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [hamClick, setHamClick] = useState(0);
  return (
    <div className="mx-4 mt-2 bg-neutral-100 shadow-md rounded-xl">
      <div className="flex justify-between items-center pl-1 pr-4">
        <img className="w-16 mt-2" src={Logo} alt="logo"></img>
        <button
          onClick={() => {
            setHamClick(!hamClick);
          }}
        >
          <img className="w-10 mt-0" src={Hamburger} alt="Menu" />
        </button>
      </div>
      <hr />
      {hamClick ? (
        <ul className="flex flex-col items-center px-auto pb-3 list-none text-slate-500 font-mono text-lg font-bold">
          <li className="p-1 m-2 hover:text-black">
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
          <hr className="w-full border-t border-gray-200" />
          <li className="p-1 m-2 hover:text-black">
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
          <hr className="w-full border-t border-gray-200" />
          <li className="p-1 m-2 hover:text-black">
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
        </ul>
      ) : null}
    </div>
  );
};

export default Hamburgheader;
