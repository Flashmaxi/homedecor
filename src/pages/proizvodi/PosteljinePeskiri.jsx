import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import PhotoAlbum from "react-photo-album";
import { posteljine } from "../../data";

export default function PosteljinePeskiri() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px] mb-[80px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">Posteljine i peškiri</h2>
              <p>
                Naša posteljina je više od samo tkanine - to je iskustvo.
                Uživajte u mekoći naših luksuznih čaršava, jastučnica i
                prekrivača, pružajući vam ultimativnu udobnost za miran san
                svake noći. Od klasičnih pamučnih satena do egzotičnih svilenih
                komada, naša kolekcija posteljine nudi širok spektar boja i
                dezena koji će osvežiti i oplemeniti vašu spavaću sobu. A kada
                je u pitanju osvežavanje tela nakon opuštajućeg tuširanja, naši
                luksuzni peškiri pružaju dodir mekoće i apsorpcije. Izrađeni od
                najkvalitetnijeg pamuka ili bambusa, naši peškiri su ne samo
                funkcionalni, već i estetski privlačni dodatak vašem kupatilu.
                Neka naša posteljina i peškiri upotpune vaš dom svojim luksuznim
                dodirima i neodoljivim dizajnom. Posetite našu kolekciju danas i
                uživajte u osećaju raskoši svakog dana!
              </p>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/src/assets/proizvodi/posteljina.jpg"
                alt=""
              />
            </div>
          </div>

          <PhotoAlbum layout="rows" photos={posteljine} />
        </div>
      </section>
      <Footer />
    </>
  );
}
