import { useState, useEffect } from "react";
import { LIST_URL } from "../utils/constants";

const useRestaurantList = () => {
  const [list, setList] = useState([]);

  useEffect(
    () =>
      async function fetchData() {
        const data = await fetch(LIST_URL);
        const json = await data.json();
        let newList =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        let newListv2 =
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        newListv2 = newListv2.slice(4);
        newList = newList.concat(newListv2);
        setList(newList);
      },
    []
  );
  return { list, setList };
};

export default useRestaurantList;
