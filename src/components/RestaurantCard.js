import { CARD_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <div className="card">
        <img
          className="img-card"
          src={CARD_URL + resData.info.cloudinaryImageId}
          alt="card-img"
        />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.avgRating} - star</h4>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
