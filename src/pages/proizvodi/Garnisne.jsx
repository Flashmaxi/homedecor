import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import PhotoAlbum from "react-photo-album";
import { garn } from "../../data";

export default function Garnisne() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px] mb-[80px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Garnišne</h2>
              <p>
                Kada razmišljamo o uređenju prozora jedan od važnijih elemenata
                koji omplemenjuju prostor su zavese, ali pored njih, kao
                neizostavni element su i odgovarajuće garnišne. Uz odabir
                odgovarajućeg modela i ostalih detalja u enterijeru, garnišne
                mogu dodatno naglasiti izgled doprineti oplemenjivanju
                celokupnog prostora. Od elegantnog i modernog do suptilnog i
                tradicionalnog, svakako ćete pronaći rešenje koje odgovara Vašem
                stilu. U našoj ponudi možete pronaći mnogobrojne modele
                različitih boja i materijala koji se veoma lako i brzo
                postavljaju. Postoje tri vrste garnišni koju nudimo – plafonske,
                plafonske na potez i zidne.
              </p>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/public/assets/proizvodi/garnisne.avif"
                alt=""
              />
            </div>
          </div>

          <PhotoAlbum layout="rows" photos={garn} />
        </div>
      </section>
      <Footer />
    </>
  );
}
