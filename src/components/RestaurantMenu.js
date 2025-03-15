import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useWindowSize from "../utils/useWindowSize";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);
  const isMobileView = useWindowSize();

  if (resInfo === null) return <Shimmer />;
  else {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;

    /*const itemCards =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards ||
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.categories[0]?.itemCards ||
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
        ?.card?.itemCards;*/

    const categories =
      isMobileView == 1
        ? resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
              c?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
        : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) =>
              c?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );

    return (
      <div className="mt-10 mb-auto mx-5 flex flex-col items-center font-mono font-normal tracking-normal text-base">
        <h2 className="text-xl font-extrabold ">{name}</h2>
        <p className="text-base text-[rgba(2,6,12,0.6)]">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <div className={'mt-7 isMobileView == 1 ? "w-full px-4" : ""'}>
          {categories.map((category, index) => {
            return (
              <RestaurantCategory
                key={category?.card?.card?.title}
                itemCards={category?.card?.card?.itemCards}
                title={category?.card?.card?.title}
                showItems={index === showIndex ? true : false}
                index={index}
                setShowIndex={setShowIndex}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
