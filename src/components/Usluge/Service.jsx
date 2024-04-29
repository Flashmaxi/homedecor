import { Link } from "react-router-dom";
import { usluge } from "../../data";

export default function Service() {
  const { title, subtitle, items } = usluge;
  return (
    <>
      <section className="work mt-[80px] xl:mt-[150px] relative z-20 mb-[56px]">
        <div className="container mx-auto xl:px-0">
          <div className="text-center mb-24">
            <h2 className="work__title h2 mb-4">{title}</h2>
            <p className="work__subtitle max-w-3xl mx-auto">{subtitle}</p>
          </div>
          <div className="work__grid grid grid-cols-1 xl:grid-cols-3 gap-x-[104px] gap-y-[56px] mb-[96px]">
            {items.map((item, index) => {
              const { title, subtitle, image, icon, btnlink } = item;
              return (
                <div
                  key={index}
                  className="w-full max-w-[350px] h-full mx-auto"
                >
                  <img
                    className="mb-6 w-full rounded-tr-[120px] rounded-bl-[90px] min-h-[330px]"
                    src={image}
                    alt=""
                  />
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <h3 className="h3">{title}</h3>
                      <p>{subtitle}</p>
                    </div>
                    <Link
                      className="bg-primary text-accent hover:bg-primary/80 w-[70px] h-[70px] rounded-full flex items-center justify-center"
                      to={btnlink}
                    >
                      {icon}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
