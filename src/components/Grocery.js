import useGroceryItems from "../utils/useGroceryItems";
import GroceryCard from "./GroceryCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Grocery = () => {
  const { grocitems, setGrocItems } = useGroceryItems();
  const onlinestatus = useOnlineStatus();

  if (onlinestatus === false) {
    return (
      <div className="flex justify-center mt-8 text-slate-400 font-mono text-2xl font-bold">
        <h3>
          Looks like you are offline! Please check your internet connection...
        </h3>
      </div>
    );
  }

  return grocitems === null ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-evenly sm:mx-[1%] mt-10 pb-9">
      {grocitems.map((item) => {
        return (
          <GroceryCard key={item?.product_id} grocData={item?.variations[0]} />
        );
      })}
    </div>
  );
};

export default Grocery;
