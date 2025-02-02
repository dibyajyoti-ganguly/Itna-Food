import { useState, useEffect } from "react";
import { DLIST_URL, MLIST_URL } from "../utils/constants";
import useWindowSize from "./useWindowSize";

const useRestaurantList = () => {
  const [list, setList] = useState([]);
  const isMobileView = useWindowSize();

  useEffect(
    () =>
      async function fetchData() {
        const data = await fetch(isMobileView == 1 ? MLIST_URL : DLIST_URL);
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
