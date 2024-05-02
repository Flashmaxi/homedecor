import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { RiArrowRightLine } from "react-icons/ri";

export default function HotelskiProgram() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[54px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Hotelski program</h2>
              <p className="text-[20px]">
                Hotel Decor nudi kompletnu tekstilnu ponudu za opremanje Vašeg
                hotela, restorana ili drugog poslovnog prostora. Naš Hotelski
                program obuhvata širok spektar proizvoda: posteljine, peškiri i
                ostali tekstilni SPA program (hotelske papuče, bade mantili
                itd.), stolnjaci, salvete, tapete, mebl štof, zavese i draperije
                i ostali sistemi za zaštitu od sunca, zatim wall-to-wall tepisi
                i single tepisi, odela i radne unifrome itd. Sve naše proizvode
                radimo po meri, specifikaciji i želji klinjenata, a karakteriše
                ih vrhunski kvalitet materijala i izrade, što garantuje
                udobnost, izdržljivost i estetski dojam. Bilo da opremate novi
                hotel ili renovirate postojeći prostor, naš tim stručnjaka stoji
                Vam na raspolaganju, da pruži personalizovana rešenja koja
                odgovaraju Vašim potrebama i budžetu. Pored toga, uvek smo tu da
                Vam pružimo podršku tokom čitavog procesa, od odabira proizvoda
                do isporuke i montaže i na kraju, garancije kvaliteta. Uverite
                se sami u kvalitet naših proizvoda i usluga. Kontaktirajte nas
                danas da biste saznali više o tome kako Hotel Decor može
                unaprediti vaš poslovni prostor i ostaviti trajan utisak na Vaše
                goste.
              </p>

              <a
                href="/Hotel Decor katalog.pdf"
                className="btn btn-primary"
                download
              >
                Preuzmi katalog <RiArrowRightLine className="text-accent" />
              </a>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/assets/proizvodi/hotel.avif"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
