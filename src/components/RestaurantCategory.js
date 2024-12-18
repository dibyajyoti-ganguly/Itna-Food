import { CDN_URL } from "../utils/constants";

const RestaurantCategory = ({ itemCards, title }) => {
  return (
    <div>
      <h2 className="text-xl font-extrabold my-5">{title}</h2>
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
              <img
                className="w-40 h-36 rounded-xl shadow-2xl"
                src={CDN_URL + item?.card?.info?.imageId}
                alt="Item"
              />
            </li>
          );
        })}
      </ul>
      <hr className="border-t-2 border-gray-300" />
    </div>
  );
};

export default RestaurantCategory;
