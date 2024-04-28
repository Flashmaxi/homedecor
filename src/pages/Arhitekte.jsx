import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { RiMapPin2Fill, RiMailFill, RiPhoneFill } from "react-icons/ri";

export default function Arhitekte() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1920px] mx-auto bg-white overflow-hidden">
        <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 right-0 left-0 z-10"></div>
      </div>
      <div className="relative z-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="lg:text-center">
            <p className="text-base text-accent font-semibold">Home decor</p>
            <h2 className="h2">Za arhitekte i dizajnere enterijera</h2>
            <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
              Ukoliko ste arhitekta ili dizajner enterijera u potrazi za novim
              prilikama, imamo sjajnu vest za vas. Naša kompanija nudi posebne
              uslove saradnje za stručnjake poput vas. Naša ponuda uključuje
              brojne pogodnosti koje će vam omogućiti da unapredite svoju
              kreativu i poslovanje. Ovo je sjajna prilika da se upoznamo i
              radimo zajedno.
            </p>
          </div>
        </div>

        <div className="container mx-auto">
          <ul className="text-primary flex gap-[54px] justify-center xl:justify-start flex-col mx-auto text-center ">
            <li>
              <a
                className="flex flex-col text-center justify-center"
                href="https://www.google.com/maps/place/Ju%C5%BEni+bulevar+130,+Beograd/@44.7932961,20.4822093,17z/data=!3m1!4b1!4m5!3m4!1s0x475a707a536f248d:0xddf60ed519be39be!8m2!3d44.7932923!4d20.484398?shorturl=1"
                target="_blank"
              >
                <RiMapPin2Fill className="text-2xl mx-auto mb-3" />{" "}
                <span>Južni bulevar 130, Beograd</span>
              </a>
            </li>

            <li>
              <a
                className="flex flex-col text-center justify-center"
                href="mailto:office@homedecor.rs"
                target="_blank"
              >
                <RiMailFill className="text-2xl mx-auto mb-3" />
                <span>office@homedecor.rs</span>
              </a>
            </li>

            <li>
              <a
                className="flex flex-col text-center justify-center"
                href="tel:+381 11 64 35 570"
                target="_blank"
              >
                <RiPhoneFill className="text-2xl mx-auto mb-3" />
                <span>+381 11 64 35 570</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
