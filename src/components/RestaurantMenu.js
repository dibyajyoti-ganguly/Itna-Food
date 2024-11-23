import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  }

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
