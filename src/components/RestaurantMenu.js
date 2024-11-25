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
      <div className="menu">
        <h2>{name}</h2>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h3>
          <i>Top Picks</i>
        </h3>
        <ul>
          {itemCards?.map((item) => {
            return (
              <li key={item?.card?.info?.id}>
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
