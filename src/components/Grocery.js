import useGroceryItems from "../utils/useGroceryItems";
import GroceryCard from "./GroceryCard";
import Shimmer from "./Shimmer";

const Grocery = () => {
  const { grocitems, setGrocItems } = useGroceryItems();
  return grocitems === null ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap mt-10 ml-14 pb-9">
      {grocitems.map((item) => {
        return (
          <GroceryCard key={item?.product_id} grocData={item?.variations[0]} />
        );
      })}
    </div>
  );
};

export default Grocery;
