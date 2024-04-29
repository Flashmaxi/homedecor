import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export default function LuxZavese() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px] mb-[80px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Lux trakaste zavese</h2>
              <p>
                Trakaste zavese su najbolji način da prekrijete velike staklene
                površine i obezbedite vrlo veliki obim svetlopropustljivosti u
                Vaš poslovni prostor ili dom. Prave se od visokokvalitetnog
                platna, koji može biti raznoraznih boja ili dezena, različite
                svetlopropustljivosti, koji će se najbolje ukopiti u enterijer
                Važeg prostora. Trakaste zavese se postavljaju vertikalno i
                pomoću kanapa se mogu skupljati ili širiti, kao i rotirati u
                stranu, tako da sami birate količinu svetlosti koju želite u
                prostoriji. LUX TRAKASTE ZAVESE podrazumevaju isti mehanizam,
                ali su same trake izrađene od drugih, kvalitetnijh materijala.
                Imaju istu funkcionalnost kao i platnene zavese, ali zbog
                kvaliteta materijala traka, daju drugačiju, ekskluzivniju notu
                Vašem prostoru.
              </p>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/assets/proizvodi/trakaste-zavese.jpg"
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
