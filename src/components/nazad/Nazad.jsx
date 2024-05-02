import { useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";

export const Nazad = () => {
  let navigate = useNavigate();
  return (
    <div className="container mx-auto relative z-20 my-12">
      <button
        className="btn bg-primary text-accent hover:text-accent"
        onClick={() => navigate(-1)}
      >
        <RiArrowLeftLine className="hover:text-accent" /> Nazad
      </button>
    </div>
  );
};
