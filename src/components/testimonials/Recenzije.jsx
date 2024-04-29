// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar1 from "../../../public/assets/testimonials/avatar2.png";
import Avatar2 from "../../../public/assets/testimonials/avatar2.png";
import Avatar3 from "../../../public/assets/testimonials/avatar3.png";
import Avatar4 from "../../../public/assets/testimonials/avatar4.png";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Recenzije() {
  const swiperContent = [
    {
      image: Avatar1,
      name: "Adrijana Dobrilovic",
      place: "Beograd, Srbija",
      recenzija:
        "Ceo stan smo opremili, ali spavaca soba je ostavila najbolji utisak. Svaka preporuka za saradnju!",
    },
    {
      image: Avatar2,
      name: "Stefan Veselinovic",
      place: "Beograd, Srbija",
      recenzija:
        "Supruga i ja smo prezadovoljni profesionalnošću i ljubaznošću svih zaposlenih. Topla preporuka za svakoga ko želi da oplemeni svoj dom i u njega unese toplinu. Veselinovići",
    },
    {
      image: Avatar3,
      name: "Milica Badivuk",
      place: "Beograd, Srbija",
      recenzija: "Odlicna radnja, sve pohvale.",
    },
    {
      image: Avatar4,
      name: "Konstantin Krstic",
      place: "Beograd, Srbija",
      recenzija: "Odlicna radnja, sve ima!",
    },
  ];
  return (
    <section className="testimonial py-[60px] relative z-20">
      <h3 className="h3 font-semibold mx-auto text-center mb-6">
        Šta kažu o nama?
      </h3>
      <div className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6">
        <div className="w-full">
          <div className="testimonial__slider swiper h-[400px]">
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
                        <div className="testimonial__item w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                          <div className="flex gap-4 mb-6">
                            <img src={items.image} alt="" />
                            <div>
                              <h3 className="text-base lg:text-xl">
                                {items.name}
                              </h3>
                              <div className="text-base">{items.place}</div>
                            </div>
                          </div>
                          <p className="text-sm lg:text-base">
                            {items.recenzija}
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
