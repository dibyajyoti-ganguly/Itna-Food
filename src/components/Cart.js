import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import useWindowSize from "../utils/useWindowSize";
import Del from "../images/delete.png";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const isMobileView = useWindowSize();

  const dispatch = useDispatch();

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="mt-12 flex flex-col items-center font-mono font-medium tracking-tighter text-base">
      <h1 className="text-2xl mb-4 font-extrabold">Cart</h1>
      <button
        className="py-2 px-3 mb-10 bg-black text-white rounded-lg"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Clear Cart
      </button>
      <ul>
        {cartItems.map((item) => {
          return (
            <li
              className={
                isMobileView == 1
                  ? "flex justify-between list-none mb-10"
                  : "flex w-[680px] justify-between list-none mb-10"
              }
              key={item?.card?.info?.id}
            >
              <span
                className={
                  isMobileView == 1
                    ? "w-[250px] text-[rgba(2,6,12,0.6)]"
                    : "w-[470px] text-[rgba(2,6,12,0.6)]"
                }
              >
                <p className="font-extrabold text-black">
                  {item?.card?.info?.name}
                </p>
                <p className="font-semibold text-slate-950">
                  ₹
                  {(
                    (item?.card?.info?.price ||
                      item?.card?.info?.defaultPrice) / 100
                  ).toFixed(0)}
                </p>
                {Object.keys(item?.card?.info?.ratings?.aggregatedRating)
                  .length ? (
                  <p className="font-medium text-slate-950">
                    ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}(
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </p>
                ) : null}
                <p className="line-clamp-2">{item?.card?.info?.description}</p>
              </span>
              <div className={isMobileView == 1 ? "" : "w-[160px"}>
                <div className="absolute">
                  <button
                    className={
                      isMobileView == 1
                        ? "px-5 py-2 mt-16 ml-5 rounded-lg bg-zinc-200 shadow-lg text-lg font-extrabold tracking-wider text-green-800 opacity-90"
                        : "px-6 py-2 mt-28 ml-10 rounded-lg bg-zinc-200 shadow-lg text-lg font-extrabold tracking-wider text-green-800 opacity-90"
                    }
                    onClick={() => {
                      dispatch(removeItem(item));
                    }}
                  >
                    <img className="w-5 h-5" src={Del} alt="Delete" />
                  </button>
                </div>
                {item?.card?.info?.imageId ? (
                  <img
                    className={
                      isMobileView == 1
                        ? "w-28 h-24 rounded-xl shadow-2xl"
                        : "w-40 h-36 rounded-xl shadow-2xl"
                    }
                    src={CDN_URL + item?.card?.info?.imageId}
                    alt="Item"
                  />
                ) : (
                  <img
                    className="w-40 h-36 rounded-xl shadow-2xl"
                    src="https://static.thenounproject.com/png/2186849-200.png"
                    alt="Item"
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
