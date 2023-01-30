import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="card--section">
        <Card
          img="person-1.png"
          ratingScore="5.0"
          ratingCount="6"
          country="USA"
          info="Life lessons with Katie Zaferes"
          price="136"
        />
        <Card
          img="person-2.png"
          ratingScore="4.5"
          ratingCount="100"
          country="Singapore"
          info="Life lessons with Long Zi Long"
          price="1120"
        />
        <Card
          img="person-4.png"
          ratingScore="4.1"
          ratingCount="1289"
          country="Malaysia"
          info="Life lessons with Lee Zi Long"
          price="15"
        />
      </section>
    </div>
  );
}
