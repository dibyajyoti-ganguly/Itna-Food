import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let [list, setList] = useState([]);

  useEffect(
    () =>
      async function fetchData() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4449799&lng=78.3596892&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        const newList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setList(newList);
      },
    []
  );

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          let filteredList = list.filter(
            (resObj) => resObj.info.avgRating > 4.5
          );
          setList(filteredList);
        }}
      >
        Top-Rated Restaurants
      </button>
      <div className="res-container">
        {list.map((resObj) => (
          <RestaurantCard key={resObj.info.id} resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
