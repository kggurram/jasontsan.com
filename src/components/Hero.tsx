import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(" + require("../hero.jpeg") + ")",
    backgroundSize: "cover",
  };

  return (
    <>
      <div className="text-white  " style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-black via-transparent to-black px-40 py-96 h-screen">
          <div className="max-w-3xl grid grid-cols-1 gap-12">
            <h2 className="text-xl uppercase font-bold underline underline-offset-8">
              Stay Fresh
            </h2>
            <h1 className="text-8xl font-bold">Jason Ts</h1>
            <p className="text-5xl">
              Up-and-coming barber, serving Milton, Toronto and North York.
            </p>
            <div>
              <ul className="text-xl list-disc pl-8">
                <li>
                  Following appropriate Covid-19 restrictions and hygiene
                  procedures
                </li>
                <li>
                  Must have a mask or facial covering ready (required during
                  your appointment)
                </li>
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
