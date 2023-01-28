import CardImage from "./components/CardImage";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";

export default function App() {
  return (
    <div className="card">
      <CardImage />
      <CardBody />
      <CardFooter />
    </div>
  );
}
