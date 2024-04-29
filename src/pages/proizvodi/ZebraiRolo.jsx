import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PhotoAlbum from "react-photo-album";
import { rolo } from "../../data";

export default function ZebraiRolo() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Zebra zavese</h2>
              <p>
                Zebra zavese su rolo zavese koje imaju višenamensku
                funkcionalnost, jer mogu da zamene klasičnu zavesu, draperiju i
                garnišnu. Vrlo brzo su osvojile kako svetsko, tako i domaće
                tržište. Izrađene su od dve vrste antistatik materijala, što
                znači da ne skupljaju ni prašinu ni mirise, a koji su različite
                svetlopropustljivosti. Zavese mogu biti spakovane u
                aluminijumskoj kutiji, a mogu biti i otvorenog tipa, u
                zavisnosti od Vaših potreba. Mogu se montirati na zid, plafon
                ili na sam okvir prozora. Količinu svetla koja ulazi u
                prostoriju regulišete sami, ručno pomoću lančića ili ugradnjom
                elektromotora i putem daljinskog upravljača. Vrlo su jednostavne
                za montažu i pogodne su za uređenje kako poslovnih prostora,
                tako i svih prostorija u jednom domu. Zebra zavese izrađujemo po
                merama Vaših prozora, a naš veliki izbor materijala i dezena će
                sigurno moći da izađe u susret svakoj Vašoj želji i zamisli.
              </p>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/public/assets/proizvodi/zebra.avif"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px]  mb-[86px]">
            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/public/assets/zebrarolo/r1.webp"
                alt=""
              />
            </div>

            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Rolo zavese</h2>
              <p>
                Rolo zavese na prvom mestu karakteriše velika funkcionalnost kod
                opremanja poslovnih i privatnih prostora, jer pružaju odličnu
                zaštitu od sunca i vrlo su jednostavne za rukovanje. Pored toga
                što su vrlo funkcionalne, svakom prostoru svojim velikim izborom
                dezena i boja, mogu dati moderniji izgled. Spuštanje i podizanje
                rolo zavese regulišete sami, ručno pomoću lančića ili ugradnjom
                elektromotora i putem daljinskog upravljača. Takođe, rolo
                mehanizam se može povezati sa sistemima „pametne kuće“. Sve Rolo
                zavese izrađujemo po merama Vaših prozora, a naš veliki izbor
                materijala i dezena će sigurno moći da izađe u susret svakoj
                Vašoj želji i zamisli.
              </p>
            </div>
          </div>

          <PhotoAlbum layout="rows" photos={rolo} />
        </div>
      </section>
      <Footer />
    </>
  );
}
