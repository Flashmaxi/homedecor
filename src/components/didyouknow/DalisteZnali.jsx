import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Draperije from "../../assets/didyouknow/draperije.jpg";
import Kraljevske from "../../assets/didyouknow/kraljevske-zavese.jpg";
import Kruzne from "../../assets/didyouknow/kruzne-zavese.jpg";
import Prirodne from "../../assets/didyouknow/prirodni-materijali.jpg";
import Rimske from "../../assets/didyouknow/rimske-roletne.jpg";
import RimskeZavese from "../../assets/didyouknow/rimske-zavese.jpg";
import RoletneTrska from "../../assets/didyouknow/roletne-trska.jpg";
import Tamne from "../../assets/didyouknow/tamne-zavese.jpg";
import Tit from "../../assets/didyouknow/tit-mehanizam.jpg";
import Venecijaneri from "../../assets/didyouknow/venecijaneri.jpg";
import Zapadna from "../../assets/didyouknow/zapadna-ruza.jpg";

export default function DalisteZnali() {
  const swiperContent = [
    {
      image: Draperije,
      zanimljivost:
        "Ceo stan smo opremili, ali spavaca soba je ostavila najbolji utisak. Svaka preporuka za saradnju!",
    },
    {
      image: Kraljevske,
      zanimljivost:
        "Iako smo danas uglavnom svi zadovoljni sa garnišnom i dve zavese, u prošlosti, u cilju da se prikaže bogatstvo, porodice koje su to mogle da priušte su gotovo uvek insistirale na tome da im prozori budu potpuno “odeveni”, od zavesa, prozirnih i neprozirnih draperija i panela, pa do raskošnih ukrasnih detalja.",
    },
    {
      image: Kruzne,
      zanimljivost:
        "Kako su ranije gotovo sve kade bile pravljene za kupanje stojeći, bile su opremljene kružnom šipkom iznad kade, sa koje bi visila zavesa, a kako bi osobi koja se kupa obezbedila privatnost. Tuš zavese su nekada bile pravljene od materijala koji nije bio vodootporan, pa su se brzo natapale i bile teške za održavanje.",
    },
    {
      image: Prirodne,
      zanimljivost:
        "Naučno je dokazano, da zavese napravljene od prirodnih materijala mogu da smanje nivo ugljen dioksida u domu. Zavese i draperije koje imaju nijanse prirodnih boja, takođe mogu umanjiti nivo CO2, čime povećavamo kvalitet i svežinu vazduha u domu.",
    },
    {
      image: Rimske,
      zanimljivost:
        "Rimske roletne potiču iz drevnog Rima, čak i pre nego što su stakleni prozori bili izmišljeni. Ove roletne su i danas veoma popularne zvog svoje teksture i načina na koji se pakuju.",
    },
    {
      image: RimskeZavese,
      zanimljivost:
        "Rimljanima je prilično dosadilo da im prašina i sve ostalo ulazi u domove kroz prozore, pa su došli do genijalne ideje da okače komade odeće iynad proyora i vrata i tako smo su nastale prve Rimske roletne. (Takođe, prvi rashladni sistem).",
    },
    {
      image: RoletneTrska,
      zanimljivost:
        "Neke od prvih poznatih roletni potiču još od starih Kineza. Roletne su pravili od bambusovih stabljika, spojenih zajedno, koje su kačili iznad prozora i vrata, kako bi obezbedili privatnost. Stari Egipćani su radili nešto slično sa trskom.",
    },
    {
      image: Tamne,
      zanimljivost:
        "U Viktorijansko doba, zavese su obično bile vrlo tamne, jer je farbanje materijala u svetlije dezene bilo prilično skupo. Tmurne varijacije teget boje, tamno braon i zelene, bile su uobičajene boje zavesa u to doba.",
    },
    {
      image: Tit,
      zanimljivost:
        "Tilt mehanizam, koji danas mozemo naći kod gotovo svih roletni, prvi je izumeo i patentirao Američki pronalazač Džon Hempson (John Hampson). Možda je sad parvo vreme da se svi zahvalimo gospodinu Hempsonu na njegovom sjajnom pronalasku.",
    },
    {
      image: Venecijaneri,
      zanimljivost:
        "Mada bi svi pomislili da venecijaneri potiču iz Venecije (logično, zar ne?), to zapravo nije istina. Persijanci su ti koji su prvi osmislili sistem sa letvicama, koje mi danas nazivamo venecijaneri.",
    },
    {
      image: Zapadna,
      zanimljivost:
        "Jedan od najvećih prozora na svetu, nalazi se na Notr Dam katedrali u Parizu, poznat kao “Zapadna ruža”. Zapadna ruža ima prečnik od 13 metara i obim od čak 41 metar.",
    },
  ];
  return (
    <section className="testimonial py-[60px] relative z-20">
      <div className="testimonial__bg container mx-auto px-6">
        <div>
          <h3 className="h3 mb-6 mx-auto text-center font-semibold">
            Da li ste znali?
          </h3>
          <p className="mx-auto text-center max-w-[580px] mb-6">
            Svi vole da čuju zanimljive činjenice. Mi iz HD Group, sastavili smo
            listu vrlo zanimljivih podataka o našoj omiljenoj temi. Zavesama i
            roletnama!
          </p>
        </div>
        <div className="w-full">
          <div className="testimonial__slider swiper min-h-[400px]">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {swiperContent.map((items, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="testimonial__item w-full max-w-[470px] bg-accent-secondary rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                          <div className="flex gap-4 mb-6">
                            <img className="mx-auto" src={items.image} alt="" />
                          </div>
                          <p className="text-sm lg:text-base text-center text-primary">
                            {items.zanimljivost}
                          </p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
