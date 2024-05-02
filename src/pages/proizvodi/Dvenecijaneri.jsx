import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import PhotoAlbum from "react-photo-album";
import { dv } from "../../data";
import { Nazad } from "../../components/nazad/Nazad";

export default function Dvenecijaneri() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px] mb-[80px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Drveni venecijaneri</h2>
              <p>
                Drveni venecijaneri su ponovo postali veoma popularni zbog svoje
                funkcionalnosti i jednostavnosti, a kako sada postoji veliki
                izbor dezena raznovrsnih boja, vrlo lako mogu uneti potrebnu
                toplinu svakom domu ili poslovnom prostoru. Proizvode se od
                lakog i plemenitog drveta, otpornog na UV zračenje i mehanička
                oštećenja, a možete birati između lamela širine 25mm ili 50mm.
                Količinu svetlosti koju želite u prostoriji regulišete
                jednostavnim povlačenjem kanapa, koji može biti u boji
                venecijanera. Sigurni smo da ćete uz pomoć naše velike palete
                dezena i boja drvenih venecijanera pronaći pravi izbor za Vaš
                poslovni prostor ili dom.
              </p>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/assets/proizvodi/drveni-venecijaneri.jpg"
                alt=""
              />
            </div>
          </div>

          <PhotoAlbum layout="rows" photos={dv} />
        </div>
        <Nazad />
      </section>
      <Footer />
    </>
  );
}
