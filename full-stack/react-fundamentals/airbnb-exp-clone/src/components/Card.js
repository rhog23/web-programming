// import profilePic from "../images/person-1.png";
export default function Card(props) {
  const {
    key,
    title,
    description,
    price,
    coverImg,
    rating,
    reviewCount,
    location,
    openSpots,
  } = props;
  return (
    <div className="card">
      <p hidden>{key}</p>
      <img
        className="card--img"
        src={require(`../images/${coverImg}`)}
        alt="mentor profile pic"
      />
      <div className="card--rating">
        <i class="la la-star"></i>
        <span className="card--rating_score">{rating}</span>
        <span className="card--rating_count gray-text">({reviewCount})</span>
        <span className="gray-text">•</span>
        <span className="card--country gray-text">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p>{description}</p>
      <p>
        <strong>From $</strong>
        <span className="card--price">{price}</span> / person
      </p>
      <p>Available spots: {openSpots}</p>
    </div>
  );
}
