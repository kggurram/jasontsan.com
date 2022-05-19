import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import Locations from "./Locations";

const SnP = () => {
  return (
    <div className="px-16 py-16 ">
      <div className="text-center mb-16">
        <h2 className="text-4xl">Scheduling & Pricing</h2>
      </div>
      <Locations />
      <div className="flex flex-col sm:flex-row gap-4 justify-center py-24 text-white ">
        <div>
          <button className="flex justify-center gap-3 font-bold bg-red-500 px-8 py-5 m-auto text-xl rounded-xl bg-gradient-to-r from-red-500 to-orange-500">
            <a
              href="https://calendly.com/acyv"
              target="_blank"
              rel="noreferrer"
            >
              Book In-House
            </a>
            <div>
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </div>
          </button>
        </div>
        <div className="">
          <button className="flex justify-center gap-3 font-bold bg-red-500 px-8 py-5 text-xl m-auto rounded-xl bg-gradient-to-r from-red-500 to-orange-500">
            <a href="https://www.duzz.ca/" target="_blank" rel="noreferrer">
              Book Barbershop
            </a>
            <div>
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SnP;
