// import profilePic from "../images/person-1.png";
export default function Card(props) {
  const { key, item } = props;
  let badgeText;
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location.toLowerCase() === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <p hidden>{key}</p>
      <img
        className="card--img"
        src={require(`../images/${item.coverImg}`)}
        alt="mentor profile pic"
      />
      <div className="card--rating">
        <i class="la la-star"></i>
        <span className="card--rating_score">{item.stats.rating}</span>
        <span className="card--rating_count gray-text">
          ({item.stats.reviewCount})
        </span>
        <span className="gray-text">•</span>
        <span className="card--country gray-text">{item.location}</span>
      </div>
      <p className="card--title">{item.title}</p>
      <p>{item.description}</p>
      <p>
        <strong>From $</strong>
        <span className="card--price">{item.price}</span> / person
      </p>
      {/* <p>Available spots: {openSpots || "test"}</p> */}
    </div>
  );
}
