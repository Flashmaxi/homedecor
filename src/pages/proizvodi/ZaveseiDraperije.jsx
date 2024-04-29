import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PhotoAlbum from "react-photo-album";
import { photos } from "../../data";

export default function ZaveseiDraperije() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px] mb-[80px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Zavese i draperije</h2>
              <p>
                Zavese i draperije su neizostavni elemenat dekoracije svakog
                enterijera, bilo da je u pitanju stambeni ili poslovni prostor.
                Osnovna razlika između zavesa i draperija ogleda se u samom
                sastavu materijala od kojih se proizvode. Zavese se uglavnom
                prave od laganih, transparentnih i osetljivih materijala, koje
                za osnovni cilj imaju oplemenjivanje i davanje topline svakom
                prostoru. Zavese, u zavisnosti od boje, dezena i vrste
                materijala od kojih su napravljene, mogu i te kako da utiču na
                sam izgled, ali i na osećaj topline u prostoru. Zavese, pored
                dekorativne, imaju i funkciju regulisanja propuštanja dnevne
                svetlosti u prostor, kao i da, u večernjim satima, umanje
                transparentost unutrašnjeg prostora ka spoljašnjem. Draperije se
                razlikuju od zavesa po tome što se izrađuju od čvrstih i
                otpornih materijala, koji imaju gusto tkanje. Pored dekorativnog
                efekta koji, uz kombinovanje sa zavesama, svakom prostoru daje
                jednu sasvim novu dimenziju, draperije imaju i funkciju
                delimičnog ili potpunog neutralisanja dnevne svetlosti u
                prostoru i obratno, transparentsnost unutrašnjeg prostora ka
                spoljašnjem.
              </p>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/assets/proizvodi/zavese.avif"
                alt=""
              />
            </div>
          </div>

          <PhotoAlbum layout="rows" photos={photos} />
        </div>
      </section>
      <Footer />
    </>
  );
}
