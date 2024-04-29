import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export default function PliseSistemi() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Plise sistemi</h2>
              <p>
                Plise sistemi su zavese sa mehanizmom za ručno upravljanje i
                specifične su jer ih je moguće ugraditi u svaki nestandardni
                okvir prozora (trougao, krug, polukrug itd.). Moguće ih je
                pomerati u više smerova, odozgo-naniže ili odozdo-naviše. Prave
                se od velikog broja materijala različitih boja i dezena, koji
                imaju antistatička svojstva, što znači da ne skupljaju prašinu
                ili mirise. Plise sistemi delimično ili potpuno zamračuju
                prostoriju i daju lep efekat prigušenog svetla ili totalnog
                mraka u prostoru. Takođe, vrlo su jednostavne za održavanje.
              </p>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/assets/proizvodi/plise-sistemi.jpg"
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
