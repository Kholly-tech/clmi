import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import { constants } from "../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-primary p-6 md:p-16 my-3 text-white">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        <div className="flex flex-col items-center justify-center">
          <img
            src={logo}
            className="w-[250px] md:w-[250px] h-[250px] mt-10"
            alt="Logo"
          />
          <h5 className="text-lg md:text-xl max-w-md">
            {constants.footerText.text1}
          </h5>
        </div>

        {/* Ministries */}
        <div className="flex flex-col space-y-7 justify-center mx-auto md:px-4">
          <h3 className="text-secondary font-bold text-2xl mb-10">
            Ministries
          </h3>
          {constants.ministries.map((ministry, i) => (
            <Link to={ministry.link} key={i} className="">
              {ministry.title}
            </Link>
          ))}
        </div>

        {/* Visit Us */}
        <div className="flex flex-col justify-center md:items-end md:text-end mx-auto md:px-4">
          <h3 className="text-secondary font-bold text-2xl mb-10">Visit Us</h3>
          <div className="text-lg md:text-2xl">
            Comfort Life HQ – Ibadan Opp. Wema Bank, beside Ajimobi New Park,New
            Gbagi, Ibadan .<br />
          </div>
          <div className="mt-5 font-semibold text-lg">
            <span className="">Tel: +234 (0) 816 667 3443</span>
            <br />
            <a
              href="mailto:comfortlifemissionint@gmail.com"
              className="cursor-pointer"
            >
              comfortlifemissionint@gmail.com
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
      <hr className="text-secondary-dim mt-8" />
      <h6 className="text-center font-medium text-secondary mt-3 font-serif">
        &copy;{` Copyright CLMI ${currentYear}. | All Rights Reserved.`}
      </h6>
    </div>
  );
};

export default Footer;
