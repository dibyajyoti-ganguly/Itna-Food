import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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
      <div className="mt-10 mr-auto mb-auto ml-8 font-mono font-medium tracking-normal text-base">
        <h2 className="text-xl font-extrabold ">{name}</h2>
        <p className="text-xl font-extrabold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <br />
        <h3 className="text-xl font-extrabold">
          <i>Top Picks</i>
        </h3>
        <br />
        <ul>
          {itemCards?.map((item) => {
            return (
              <li
                className="text-slate-500 list-none"
                key={item?.card?.info?.id}
              >
                {item?.card?.info?.name} - ₹
                {(
                  (item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100
                ).toFixed(0)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default RestaurantMenu;
