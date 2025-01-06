import { CDN_URL } from "../utils/constants";

const ItemList = ({ title, itemCards }) => {
  return (
    <div>
      <ul key={title}>
        {" "}
        {itemCards?.map((item) => {
          return (
            <li
              className="flex w-[680px] justify-between list-none mb-10"
              key={item?.card?.info?.id}
            >
              <span className="w-[470px] text-[rgba(2,6,12,0.6)]">
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
              <div className="w-[160px]">
                <div className="absolute">
                  <button className="px-6 py-2 mt-28 ml-10 rounded-lg bg-zinc-200 shadow-lg text-lg font-black tracking-wider text-green-800">
                    ADD
                  </button>
                </div>
                {item?.card?.info?.imageId ? (
                  <img
                    className="w-40 h-36 rounded-xl shadow-2xl"
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
