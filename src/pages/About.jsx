import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { RiPhoneFill, RiArrowRightLine } from "react-icons/ri";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about mt-[90px] lg:mt-[200px] relative z-20 mb-[60px]">
        <div className="container mx-auto xl:px-0">
          <div className="flex flex-col text-center xl:flex-row xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
            <div className="flex-1 order-2 xl:order-none max-w-xl xl:max-w-[610px] flex flex-col items-center xl:items-start gap-8">
              <h2 className="h2">O nama</h2>
              <p className="text-[19px]">
                “HD Group” d.o.o. predstavlja renomiranu domaću kompaniju sa
                preko 20 godina iskustva u opremanju životnog prostora, a naš
                izložbeni salon se nalazi u Južnom bulevaru br.130, na Vračaru.
                Pod našim okriljem se nalaze brendovi “Home Decor” koji je
                namenjen maloprodaji i opremanju i oplemenjivanju svakog doma,
                ali i “Hotel Decor” koji nudi kompletnu tekstilnu ponudu za
                opremanje hotela, restorana i drugih poslovnih prostora. Od
                samog osnivanja “HD Group” d.o.o. je sinonim za izvrsnost i
                predanost u poslovanju, a našu reputaciju kao pouzdanog partnera
                potvrđuje preko 3000 zadovoljnih klijenata širom Srbije i
                Balkana. Naša posvećenost kvalitetu i neprekidno unapređenje
                poslovnih procesa omogućili su nam uspešnu saradnju sa nekim od
                vodećih proizvođačima tekstilnih proizvoda (Adeko, FD, Keops,
                Dali, Akar, Gunflex, English Decor, Hohmann, FR-One, Rasch,
                Marburg, Living walls, Casa Deco itd), a kroz pažljiv odabir
                partnera i kontinuiranu podršku, osiguravamo pristup
                najkvalitetnijim materijalima za sve proizvode iz naše velike
                ponude. Jedan od ključnih stubova našeg uspeha je naš tim
                iskusnih stručnjaka, čiji predani rad garantuje visoke standarde
                kvaliteta i efikasnosti u svakom projektu. Svaki projekat
                tretiramo sa pažnjom i posvećenošću i težimo svojevrsnom
                pružanju najboljih mogućih rešenja, koja savršeno odgovaraju
                svim potrebama naših klijenata. “HD Group” d.o.o. gleda u
                budućnost sa uzbuđenjem i spremnošću da nastavi da raste i
                razvija se zajedno sa svojim partnerima i klijentima. Ponosni
                smo na postignute rezultate u proteklih 20 godina, ali isto tako
                sa uzbuđenjem očekujemo nove izazove i prilike koje će nam
                omogućiti dalji rast i napredak.
              </p>

              <div className="flex items-center justify-center xl:justify-start gap-4">
                <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                  <RiPhoneFill className="text-accent text-4xl" />
                </div>

                <div className="text-left">
                  <div>
                    <a
                      className="text-xl lg:text-2xl font-bold"
                      href="tel:+381116435570"
                    >
                      +381 11 64 35 570
                    </a>
                  </div>
                  <div>Kontakt telefon</div>
                </div>
              </div>
              <Link to="/kontakt" className="btn btn-primary">
                Pozovite nas! <RiArrowRightLine className="text-accent" />
              </Link>
            </div>

            <div className="about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-[453px] xl:mx-0">
              <img
                className="rounded-tr-[160px] rounded-bl-[120px]"
                src="/public/assets/about/aboutimg.avif"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
