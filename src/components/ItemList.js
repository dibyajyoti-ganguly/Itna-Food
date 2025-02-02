import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import useWindowSize from "../utils/useWindowSize";

const ItemList = ({ title, itemCards }) => {
  const isMobileView = useWindowSize();
  const dispatch = useDispatch();
  return (
    <div>
      <ul key={title}>
        {" "}
        {itemCards?.map((item) => {
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
                    className={isMobileView==1?"px-5 py-2 mt-16 ml-5 rounded-lg bg-zinc-200 shadow-lg text-lg font-extrabold tracking-wider text-green-800 opacity-90":"px-6 py-2 mt-28 ml-10 rounded-lg bg-zinc-200 shadow-lg text-lg font-extrabold tracking-wider text-green-800 opacity-90"}
                    onClick={() => {
                      dispatch(addItem(item));
                    }}
                  >
                    ADD
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

export default ItemList;
