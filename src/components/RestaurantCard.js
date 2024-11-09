import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    cuisines,
    locality,
    areaName,
  } = resData.info;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="resimg" />
      <h3>{name}</h3>
      <h4>
        ⭐{avgRating} • {sla.slaString}
      </h4>
      <p>{cuisines.slice(0, 2).join(", ")}</p>
      <p>
        {locality}, {areaName}
      </p>
    </div>
  );
};

export default RestaurantCard;
