import Empty from "../images/empty-cart.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={Empty} className="w-60 h-60 mt-20" />
      <h1 className="text-2xl font-bold font-mono tracking-normal">Your cart is empty!</h1>
      <button className="py-2 px-3 mt-8 bg-black text-white rounded-xl font-mono">
        <Link
          to="/"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Explore Restaurants
        </Link>
      </button>
    </div>
  );
};

export default EmptyCart;
