import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;

    const itemCards =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards ||
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
        ?.card?.itemCards ||
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.categories[0]?.itemCards;

    return (
      <div className="mt-10 mr-auto mb-auto ml-8 flex flex-col items-center font-mono font-medium tracking-tighter text-base">
        <h2 className="text-xl font-extrabold ">{name}</h2>
        <p className="text-base text-[rgba(2,6,12,0.6)]">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <br />
        <h3 className="text-xl font-extrabold">Top Picks</h3>
        <ul>
          {itemCards?.map((item) => {
            return (
              <li
                className="flex w-[680px] justify-between list-none my-10"
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
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
                      )
                    </p>
                  ) : null}
                  <p className="line-clamp-2">
                    {item?.card?.info?.description}
                  </p>
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
      </div>
    );
  }
};

export default RestaurantMenu;
