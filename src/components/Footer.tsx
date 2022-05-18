import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="text-center flex flex-col gap-4 pt-4 pb-12 text-sm">
        {/* <p>&copy; Copyright 2022, Jason Tsan</p> */}
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
