
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
    console.log(resData);
    return (
      <div className="res-card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="resimg"
        />
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