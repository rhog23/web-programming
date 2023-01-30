// import profilePic from "../images/person-1.png";
export default function Card(props) {
  const { img, ratingScore, ratingCount, country, info, price } = props;
  return (
    <div className="card">
      <img
        className="card--img"
        src={require(`../images/${img}`)}
        alt="mentor profile pic"
      />
      <div className="card--rating">
        <i class="la la-star"></i>
        <span className="card--rating_score">{ratingScore}</span>
        <span className="card--rating_count gray-text">({ratingCount})</span>
        <span className="gray-text">•</span>
        <span className="card--country gray-text">{country}</span>
      </div>
      <p className="card--info">{info}</p>
      <p>
        <strong>From $</strong>
        <span className="card--price">{price}</span> / person
      </p>
    </div>
  );
}
