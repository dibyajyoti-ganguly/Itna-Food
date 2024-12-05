import { useOutletContext, Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const { nval, type } = useOutletContext();
  const { list, setList } = useRestaurantList();
  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false) {
    return (
      <div className="signal-card">
        <h3>
          Looks like you are offline! Please check your internet connection.
        </h3>
      </div>
    );
  }

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <button
          className="bg-gray-300 mt-9 mb-8 px-4 py-2 border-solid border-gray-500 border rounded-lg font-mono font-bold text-base text-slate-500 cursor-pointer"
          onClick={() => {
            setList(list.filter((resObj) => resObj.info.avgRating > 4.5));
          }}
        >
          Top-Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap mt-1 ml-14">
        {nval === 0
          ? list.map((resObj) => (
              <Link
                key={resObj.info.id}
                to={"/restaurants/" + resObj.info.id}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <RestaurantCard resData={resObj} />
              </Link>
            ))
          : list
              .filter((resObj) =>
                resObj.info.name.toLowerCase().includes(type.toLowerCase())
              )
              .map((resObj) => (
                <Link
                  key={resObj.info.id}
                  to={"/restaurants/" + resObj.info.id}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <RestaurantCard resData={resObj} />
                </Link>
              ))}
      </div>
    </div>
  );
};

export default Body;
