import { useState, useEffect } from "react";
import { LIST_URL } from "../utils/constants";

const useRestaurantList = ()=>{

    const [list, setList] = useState([]);

  useEffect(
    () =>
      async function fetchData() {
        const data = await fetch(LIST_URL);
        const json = await data.json();
        const newList =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setList(newList);
      },
    []
  );
    return {list,setList};
}

export default useRestaurantList;