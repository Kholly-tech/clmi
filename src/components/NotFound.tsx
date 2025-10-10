import NotFoundImage from "../assets/images/404.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img src={NotFoundImage} alt="" className="w-3/4 " />
      <div className="my-4 -mt-15">
        <Link
          to="/"
          className="bg-primary text-secondary font-bold py-3 px-5 rounded-xl transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
