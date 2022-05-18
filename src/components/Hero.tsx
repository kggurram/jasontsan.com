import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(" + require("../hero.jpeg") + ")",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="text-white  " style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black via-transparent lg:to-black px-16 pt-24 sm:px-24 sm:pb-60 md:px-24 md:pt-24 md:py-80 lg:py-60 xl: h-screen">
          <div className="max-w-3xl grid grid-cols-1 gap-12">
            <h2 className="text-xl uppercase font-bold underline underline-offset-8">
              Stay Fresh
            </h2>
            <h1 className="sm:text-8xl font-bold text-7xl">Jason Tsan</h1>
            <p className="sm:text-5xl text-2xl">
              Up-and-coming barber, serving Milton, Toronto and North York.
            </p>
            <div>
              <ul className="text-xl list-disc pl-8">
                <li>Remember to wash your hair before appointments</li>
                <li>Preferably have mask or facial covering ready</li>
              </ul>
            </div>

            <button className=" flex flex-row justify-center gap-2 hover:outline hover:outline-2 font-bold bg-red-500 px-6 py-3 text-xl rounded-md w-52 bg-gradient-to-r from-red-500 to-orange-500">
              <a
                href="https://calendly.com/acyv"
                target="_blank"
                rel="noreferrer"
              >
                Book Now
              </a>
              <div>
                <FontAwesomeIcon icon={faSquareArrowUpRight} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
