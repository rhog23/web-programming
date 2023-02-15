export default function Card(props) {
  function formatDate(date) {
    const newDate = new Date(date.split("/").reverse().join("-"));
    return `${newDate.getDate()} ${newDate.toLocaleString("en-us", {
      month: "short",
    })}, ${newDate.getFullYear()}`;
  }
  const startDate = formatDate(props.startDate);
  const endDate = formatDate(props.endDate);
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} className="card--img" />
      <div className="card--body">
        <div className="card--location">
          <i class="las la-map-marker"></i>
          <p>{props.location.toUpperCase()}</p>
          <a href={props.googleMapsUrl} rel="noreferrer" target="_blank">
            View on Google Maps
          </a>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--date">
          {startDate} - {endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
