import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import PhotoAlbum from "react-photo-album";
import { mebl } from "../../data";

export default function MeblStof() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px] mb-[80px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Mebl štof</h2>
              <p>
                Mebl štof je vrsta tekstila, dekorativna tkanina napravljena od
                mešavina različitih materijala po sirovinskom sastavu,
                tehnologiji proizvodnje i po težini. Napredak u proizvodnji
                dekorativnih tkanina omogućava veliku ponudu ovog materijala sa
                različitom teksturom, sirovinskim sastavom i primenom. Najčešće
                se koristi kao materijal za tapaciranje nameštaja, ali i za
                presvlačenje i oblaganje nameštaja, a ujedno i kao dekor i kao
                zaštita nameštaja. Vrsta, dizajn i sastav materijala biraju se u
                zavisnosti od namene proizvoda za koji se mebl štof
                upotrebljava. U našoj ponudi imamo jednobojne mebl štofove, kao
                i mebl štofove u različitom dizajnu, kao što je barok, etno,
                boho, minimal, geometrijski, industrial, cvetni itd. U našoj
                ponudi možete pronaći mebl štofove različitog sirovinskog
                sastava sa visokim koeficijentom trenja koji garantuje kvalitet.
              </p>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/public/assets/proizvodi/mebl.jpg"
                alt=""
              />
            </div>
          </div>

          <PhotoAlbum layout="rows" photos={mebl} />
        </div>
      </section>
      <Footer />
    </>
  );
}
