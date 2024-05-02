import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Service from "../components/Usluge/Service";
import { Nazad } from "../components/nazad/Nazad";
export default function Proizvodi() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1920px] mx-auto bg-white overflow-hidden">
        <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 right-0 left-0 z-10"></div>
      </div>
      <Service />
      <Nazad />
      <Footer />
    </>
  );
}
