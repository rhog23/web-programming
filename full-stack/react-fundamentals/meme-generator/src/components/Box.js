export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#84a59d" : "#e63946",
  };

  return (
    <div
      style={styles}
      className="box"
      key={props.id}
      onClick={props.toggle}
    ></div>
  );
}
