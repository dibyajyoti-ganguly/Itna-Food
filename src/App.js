import Logo from "./images/Group 18116.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="logo"></img>
      </div>
      <div className="search"></div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/b9c7807f-59bb-4e91-83d4-5048d293f44e_12126.JPG"
        alt="resimg"
      />
      <h3>{resData.name}</h3>
      <h4>⭐{resData.avgRating} • {resData.sla.slaString}</h4>
      <p>{resData.cuisines.join(", ")}</p>
      <p>{resData.locality}, {resData.areaName}</p>
    </div>
  );
};

const resObj = {
  id: "362596",
  name: "Burger King",
  cloudinaryImageId:
    "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_362596.JPG",
  locality: "M Cube Mall",
  areaName: "Attapur",
  costForTwo: "₹350 for two",
  cuisines: ["Burgers", "American"],
  avgRating: 4.1,
  parentId: "166",
  avgRatingString: "4.1",
  totalRatingsString: "21K+",
  sla: {
    deliveryTime: 20,
    lastMileTravel: 1.4,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "1.4 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2024-10-19 04:00:00",
    opened: true,
  },
  badges: {
    imageBadges: [
      {
        imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
        description: "Delivery!",
      },
      {
        imageId: "Rxawards/_CATEGORY-Burger.png",
        description: "Delivery!",
      },
    ],
  },
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {
        badgeObject: [
          {
            attributes: {
              description: "Delivery!",
              imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            },
          },
          {
            attributes: {
              description: "Delivery!",
              imageId: "Rxawards/_CATEGORY-Burger.png",
            },
          },
        ],
      },
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "60% OFF",
    subHeader: "UPTO ₹120",
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
    aggregatedRating: {
      rating: "--",
    },
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
};

const Body = () => {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
