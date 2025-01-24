import useGroceryItems from "../utils/useGroceryItems";
import GroceryCard from "./GroceryCard";
import Shimmer from "./Shimmer";

const Grocery = () => {
  const { grocitems, setGrocItems } = useGroceryItems();
  return grocitems === null ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap mt-1 ml-14">
      {grocitems.map((item) => {
        return <GroceryCard key={item?.nodeId} grocData={item} />;
      })}
    </div>
  );
};

export default Grocery;
