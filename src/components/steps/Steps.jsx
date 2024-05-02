import {
  RiCompasses2Line,
  RiCheckboxMultipleLine,
  RiHammerFill,
  RiToolsFill,
  RiStarFill,
} from "react-icons/ri";

export default function Steps() {
  return (
    <section className="steps mt-[120px] py-[56px] relative z-20">
      <h2 className="h2 mb-10 mx-auto text-center">Naše usluge</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 lg:mb-36">
          <div className="steps__step text-center">
            <div className="mb-4">
              <RiCheckboxMultipleLine className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Izbor stila i materijala</h3>
            <p className="mb-5 max-w-md mx-auto">
              Pravilan odabir stila, dizajna i materijala može stvoriti osećaj
              topline i luksuza u stanu, a samim tim pojačati opštu percepciju i
              atmosferu same prostorije. Naši eksperti Vam mogu pomoći, olakšati
              izbor i uštedeti vreme kod odabira najbolje opcije za Vaš prostor.
            </p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <RiCompasses2Line className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Merenje</h3>
            <p className="mb-5 max-w-md mx-auto">
              U odnosu na odabir tipa zavesa, može se razlikovati i način
              uzimanja mera za iste. Ovo će za Vas raditi naši eksperti, ali uz
              njihove instrukcije, moći ćete i sami da naučite kako da prvilno
              izmerite prostor za Vašu buduću zavesu.
            </p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <RiHammerFill className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Izrada</h3>
            <p className="mb-5 max-w-md mx-auto">
              Nakon odabira materijala i uzimanja mera, naš iskusan tim za
              šivenje će opšiti Vašu zavesu, po najvišim standardima kvaliteta
              šivenja, kako biste dobili najbolji mogući finalni proizvod.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
          <div className="steps__step text-center">
            <div className="mb-4">
              <RiToolsFill className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Ugradnja ili montaža</h3>
            <p className="mb-5 max-w-md mx-auto">
              Za uslugu ugradnje ili montaže, zadužen je iskusan tim majstora,
              koji će u prethodno dogovorenom roku izvršiti profesionalnu
              ugradnju ili montažu Vaših zavesa.
            </p>
          </div>

          <div className="steps__step text-center">
            <div className="mb-4">
              <RiStarFill className="text-5xl text-accent mx-auto" />
            </div>
            <h3 className="h3 mb-5">Garancija kvaliteta</h3>
            <p className="mb-5 max-w-md mx-auto">
              Svojim dugogodišnjim iskustvom u radu, kvalitetom materijala,
              opšivanjem zavesa i na kraju profesionalnom uslugom montaže istih,
              garantujemo za najviši kvalitet usluge koju našim klijentima
              pružamo preko 20 godina unazad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
