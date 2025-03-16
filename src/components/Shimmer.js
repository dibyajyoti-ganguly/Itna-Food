import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly sm:mx-[10%] animate-pulse">
      {Array.from({ length: 18 }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
