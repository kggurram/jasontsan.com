import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <Hero />

      <div className="px-16 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl">Scheduling & Pricing</h2>
        </div>
        <Locations />
        <div className="flex flex-row gap-4 justify-center py-24 text-white ">
          <div>
            <button className="flex flex-row justify-center gap-3 font-bold bg-red-500 px-8 py-5 text-xl rounded-xl w-auto bg-gradient-to-r from-red-500 to-orange-500">
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
          <div>
            <button className="flex flex-row justify-center gap-3 font-bold bg-red-500 px-8 py-5 text-xl rounded-xl w-auto bg-gradient-to-r from-red-500 to-orange-500">
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
      <Footer />
    </div>
  );
}

export default App;
