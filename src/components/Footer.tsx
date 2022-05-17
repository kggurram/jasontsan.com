import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="text-center pb-12">
        <a target="_blank" href="https://www.kgurram.tech" rel="noreferrer">
          Designed & built by Karthik Gurram
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-sm pl-2"
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
