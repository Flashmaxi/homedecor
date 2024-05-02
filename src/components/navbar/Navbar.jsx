import { Link } from "react-router-dom";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { navigation } from "../../data";
import Logo from "../../../public/assets/hdlogo.svg";

export default function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 h-[90px] lg:h-[120px] shadow-xl z-30 bg-[#292f36]">
      <div className="border-b border-accent">
        <div className="container mx-auto">
          <ul className="flex-row justify-end hidden lg:flex items-center">
            <li className="ps-2 py-1 mr-4">
              <a
                className="text-white text-[14px]"
                href="https://www.google.com/maps/place/Ju%C5%BEni+bulevar+130,+Beograd/@44.7932961,20.4822093,17z/data=!3m1!4b1!4m5!3m4!1s0x475a707a536f248d:0xddf60ed519be39be!8m2!3d44.7932923!4d20.484398?shorturl=1"
              >
                <span className="text-accent text-[14px]">Adresa: </span>Južni
                bulevar 130, Beograd
              </a>
            </li>
            <li className="ps-2 py-1">
              <a
                className="text-white text-[14px]"
                href="tel:+381 11 64 35 570"
              >
                <span className="text-accent text-[14px]">Telefon: </span>+381
                11 64 35 570
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" width={190} height={90} />
        </Link>

        <nav>
          <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
            <RiMenu4Line className="text-4xl text-accent" />
          </div>
          <ul
            className={`fixed bg-[#292f36] w-full text-white overflow-hidden border-t  border-accent top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300 ${
              isMenuOpen ? "h-auto py-[15px]" : "h-0"
            }`}
          >
            {navigation.map((item, index) => {
              return (
                <li key={index} className="ps-2 pt-1">
                  <Link to={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li
              className="ps-2 pt-1 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="https://www.google.com/maps/place/Ju%C5%BEni+bulevar+130,+Beograd/@44.7932961,20.4822093,17z/data=!3m1!4b1!4m5!3m4!1s0x475a707a536f248d:0xddf60ed519be39be!8m2!3d44.7932923!4d20.484398?shorturl=1">
                <span className="text-accent">Adresa: </span>Južni bulevar 130,
                Beograd
              </a>
            </li>
            <li
              className="ps-2 pt-1 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="tel:+381 11 64 35 570">
                <span className="text-accent">Telefon: </span>+381 11 64 35 570
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
