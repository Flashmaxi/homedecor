import { RiArrowRightSLine } from "react-icons/ri";

//import images
import Dvenecijaneri from "./assets/proizvodi/drveni-venecijaneri.jpg";
import Zavesed from "./assets/proizvodi/zavese-i-draperije.jpg";
import Zebra from "./assets/proizvodi/zebra-i-rolo-zavese.jpg";
import Tapete from "./assets/proizvodi/tapete.jpg";
import Mebl from "./assets/proizvodi/Mebl-stof.jpg";
import Lux from "./assets/proizvodi/trakaste-zavese.jpg";
import Garnisne from "./assets/proizvodi/garnisna.jpg";
import Posteljine from "./assets/proizvodi/posteljine.jpg";
import Plise from "./assets/proizvodi/plise-sistemi.jpg";

export const navigation = [
  {
    name: "Početna",
    href: "/",
  },
  {
    name: "Proizvodi",
    href: "/proizvodi",
  },
  {
    name: "Hotelski program",
    href: "/hotelski-program",
  },
  {
    name: "Arhitekte",
    href: "/arhitekte",
  },
  {
    name: "O nama",
    href: "/o-nama",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
  },
];

export const hero = {
  title: "Oplemenite svoj životni prostor.",
  description: "",
  btntext: "Pogledajte ponudu",
  btnlink: "/proizvodi",
};

export const usluge = {
  title: "Naši proizvodi",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  items: [
    {
      image: Zavesed,
      icon: <RiArrowRightSLine />,
      btnlink: "/proizvodi/zavese-i-draperije",
      title: "Zavese i draperije",
      subtitle: "Home decor",
    },
    {
      image: Zebra,
      icon: <RiArrowRightSLine />,
      btnlink: "/proizvodi/zebra-i-rolo",
      title: "Zebra i rolo zavese",
      subtitle: "Home decor",
    },
    {
      image: Tapete,
      icon: <RiArrowRightSLine />,
      btnlink: "/proizvodi/tapete",
      title: "Tapete",
      subtitle: "Home decor",
    },
    {
      image: Dvenecijaneri,
      icon: <RiArrowRightSLine />,
      btnlink: "/proizvodi/drveni-venecijaneri",
      title: "Drveni venecijaneri",
      subtitle: "Home decor",
    },
    {
      image: Plise,
      icon: <RiArrowRightSLine />,
      btnlink: "/proizvodi/plise-sistemi",
      title: "Plise sistemi",
      subtitle: "Home decor",
    },
    {
      image: Mebl,
      icon: <RiArrowRightSLine />,
      btnlink: "/proizvodi/mebl-stof",
      title: "Mebl štof",
      subtitle: "Home decor",
    },
    {
      image: Lux,
      icon: <RiArrowRightSLine />,
      btnlink: "/proizvodi/lux-trakaste-zavese",
      title: "Lux trakaste zavese",
      subtitle: "Home decor",
    },
    {
      image: Garnisne,
      icon: <RiArrowRightSLine />,
      btnlink: "/proizvodi/garnisne",
      title: "Garnišne",
      subtitle: "Home decor",
    },
    {
      image: Posteljine,
      icon: <RiArrowRightSLine />,
      btnlink: "/proizvodi/posteljine-i-peskiri",
      title: "Posteljine i peškiri",
      subtitle: "Home decor",
    },
  ],
};

export const photos = [
  { src: "/src/assets/zavese/z1.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z2.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z3.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z4.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z5.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z6.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z7.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z8.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z9.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z10.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z11.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z12.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z13.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z14.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z15.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z16.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z17.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z18.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z19.webp", width: 800, height: 600 },
  { src: "/src/assets/zavese/z20.webp", width: 800, height: 600 },
];

export const rolo = [
  { src: "/src/assets/zebrarolo/r1.webp", width: 800, height: 600 },
  { src: "/src/assets/zebrarolo/r2.webp", width: 800, height: 600 },
  { src: "/src/assets/zebrarolo/r3.webp", width: 800, height: 600 },
  { src: "/src/assets/zebrarolo/r4.webp", width: 800, height: 600 },
];

export const tapete = [
  { src: "/src/assets/tapete/t1.webp", width: 800, height: 600 },
  { src: "/src/assets/tapete/t2.webp", width: 800, height: 600 },
  { src: "/src/assets/tapete/t3.webp", width: 800, height: 600 },
  { src: "/src/assets/tapete/t4.webp", width: 800, height: 600 },
];

export const dv = [
  { src: "/src/assets/dv/dv1.webp", width: 800, height: 600 },
  { src: "/src/assets/dv/dv.webp", width: 800, height: 600 },
];

export const mebl = [
  { src: "/src/assets/mebl/m1.webp", width: 800, height: 600 },
  { src: "/src/assets/mebl/m2.webp", width: 800, height: 600 },
  { src: "/src/assets/mebl/m3.webp", width: 800, height: 600 },
  { src: "/src/assets/mebl/m4.webp", width: 800, height: 600 },
  { src: "/src/assets/mebl/m5.webp", width: 800, height: 600 },
  { src: "/src/assets/mebl/m6.webp", width: 800, height: 600 },
];

export const garn = [
  { src: "/src/assets/garn/2.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/3.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/4.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/5.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/6.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/7.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/8.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/9.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/10.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/11.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/12.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/13.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/14.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/15.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/16.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/17.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/18.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/19.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/20.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/21.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/22.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/23.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/24.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/25.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/26.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/27.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/28.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/29.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/30.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/31.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/32.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/33.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/34.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/35.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/36.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/37.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/38.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/39.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/40.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/41.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/42.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/43.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/44.jpg", width: 800, height: 600 },
  { src: "/src/assets/garn/45.jpg", width: 800, height: 600 },
];

export const posteljine = [
  { src: "/src/assets/posteljine/p1.webp", width: 800, height: 600 },
  { src: "/src/assets/posteljine/p2.webp", width: 800, height: 600 },
  { src: "/src/assets/posteljine/p3.webp", width: 800, height: 600 },
  { src: "/src/assets/posteljine/p4.webp", width: 800, height: 600 },
  { src: "/src/assets/posteljine/p5.webp", width: 800, height: 600 },
  { src: "/src/assets/posteljine/p6.webp", width: 800, height: 600 },
];
