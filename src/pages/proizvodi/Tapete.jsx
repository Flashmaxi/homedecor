import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import PhotoAlbum from "react-photo-album";
import { tapete } from "../../data";

export default function Tapete() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px] mb-[80px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Tapete</h2>
              <p>
                Tapete su ponovo postale veoma popularan izbor za opremanje kako
                stambenih, tako i poslovnih prostora i predstavljaju jedan od
                najboljih izbora za dekoraciju zidova. Sa ponovnom pojavom ove
                neverovatno raznovrsne, ekspresivne opcije za zidne obloge,
                razvijeno je mnogo novih materijala od kojih se izrađuju tapete.
                Prošli su dani frustrirajućih tapeta koje je teško postaviti, a
                još teže ukloniti. Sada možete uživati u raznim materijalima
                koji se lako postavljaju, ali i lako uklanjaju. Sve naše tapete
                su vrlo kvalitetne, postojanih i intenzivnih boja i veoma su
                jednostavne za održavanje. Iz naše velike ponude tapeta, možete
                odabrati najbolji dizajn koji će biti idealan za prostor koji
                opremate, ali i onaj koji najviše odgovara vašem senzibilitetu i
                ukusu.
              </p>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/public/assets/proizvodi/tapete.jpg"
                alt=""
              />
            </div>
          </div>

          <PhotoAlbum layout="rows" photos={tapete} />
        </div>
      </section>
      <Footer />
    </>
  );
}
