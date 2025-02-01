import { useOutletContext, Link } from "react-router-dom";
import { useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const { nval, type } = useOutletContext();
  const { list, setList } = useRestaurantList();
  const onlinestatus = useOnlineStatus();
  const { username } = useContext(UserContext);
  const { setUsername } = useContext(UserContext);

  if (onlinestatus === false) {
    return (
      <div className="flex justify-center mt-8 text-slate-400 font-mono text-2xl font-bold">
        <h3>
          Looks like you are offline! Please check your internet connection...
        </h3>
      </div>
    );
  }

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="pb-6">
      <div className="flex flex-col justify-evenly items-center py-3 sm:flex-row">
        <button
          className="bg-zinc-200 mt-8 mb-7 px-4 py-2 border-solid border-orange-500 border-4 rounded-xl font-mono font-bold text-base text-orange-500 cursor-pointer"
          onClick={() => {
            setList(list.filter((resObj) => resObj.info.avgRating > 4.5));
          }}
        >
          Top-Rated Restaurants for {username}
        </button>
        <input
          className=" outline-none text-center bg-zinc-200 mt-2 mb-7 px-4 py-2 border-solid border-orange-500 border-4 rounded-xl font-mono font-bold text-base text-orange-500 sm:hidden"
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-wrap mt-1 justify-evenly sm:mx-[1%]">
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
