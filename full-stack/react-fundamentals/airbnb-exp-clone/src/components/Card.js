// import profilePic from "../images/person-1.png";
export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location.toLowerCase() === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <p hidden>{props.id}</p>
      <img
        className="card--img"
        src={require(`../images/${props.coverImg}`)}
        alt="mentor profile pic"
      />
      <div className="card--rating">
        <i class="la la-star"></i>
        <span className="card--rating_score">{props.stats.rating}</span>
        <span className="card--rating_count gray-text">
          ({props.stats.reviewCount})
        </span>
        <span className="gray-text">•</span>
        <span className="card--country gray-text">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>{props.description}</p>
      <p>
        <strong>From $</strong>
        <span className="card--price">{props.price}</span> / person
      </p>
    </div>
  );
}
