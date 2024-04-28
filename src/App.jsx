import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/Usluge/Service";
import Steps from "./components/steps/Steps";
import Footer from "./components/footer/Footer";
import Recenzije from "./components/testimonials/Recenzije";
import DalisteZnali from "./components/didyouknow/DalisteZnali";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Steps />
      <Recenzije />
      <DalisteZnali />
      <Footer />
    </>
  );
}

export default App;
