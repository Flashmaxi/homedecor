import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { hero } from "../../data";

export default function Hero() {
  const { title, description, btntext, btnlink } = hero;
  return (
    <section
      className="hero h-[640px] xl:h-[840px] bg-center object-cover lg:object-none lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20"
      style={{
        backgroundImage: `url("/assets/hero/bg.jpg")`,
      }}
    >
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
          <h1 className="h1 mb-8">{title}</h1>
          <p className="mb-8">{description}</p>
          <Link to={btnlink} className="btn btn-primary mx-auto xl:mx-0">
            {btntext}
            <RiArrowRightLine className="text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
